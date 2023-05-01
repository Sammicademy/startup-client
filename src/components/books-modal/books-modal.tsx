import {
	Box,
	Button,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { FaTimes } from 'react-icons/fa';
import { coursePrice } from 'src/config/constants';
import { loadImage } from 'src/helpers/image.helper';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { FileService } from 'src/services/file.service';
import { BooksValidation } from 'src/validations/books.validation';
import ErrorAlert from '../error-alert/error-alert';
import SelectField from '../select-field/select-field';
import TextFiled from '../text-filed/text-filed';
import { BookModalProps } from './books-modal.props';

const BooksModal: FC<BookModalProps> = ({ isOpen, onClose }): JSX.Element => {
	const [values, setValues] = useState(data);
	const [file, setFile] = useState<File | string | null>();
	const [errorFile, setErrorFile] = useState('');

	const { startCreateBooksLoading, createBooks, clearBooksError } = useActions();
	const { isLoading, error } = useTypedSelector(state => state.books);
	const toast = useToast();

	const handleChange = (file: File) => {
		setFile(file);
	};

	const onSubmit = async (fomrikValues: FormikValues) => {
		if (!file) {
			setErrorFile('Preview image is required');
			return;
		}
		let imageUrl = file;
		if (typeof file !== 'string') {
			startCreateBooksLoading();
			const formData = new FormData();
			formData.append('image', file as File);
			const response = await FileService.fileUpload(formData, 'books');
			imageUrl = response.url;
		}

		createBooks({
			price: fomrikValues.price,
			title: fomrikValues.title,
			pdf: fomrikValues.pdf,
			image: imageUrl as string,
			callback: () => {
				toast({
					title: 'Successfully created',
					position: 'top-right',
					isClosable: true,
					status: 'success',
				});
			},
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={'xl'}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add books</ModalHeader>
				<ModalCloseButton />
				<Formik
					onSubmit={onSubmit}
					initialValues={values}
					validationSchema={BooksValidation.createBooks}
				>
					<Form>
						<ModalBody>
							<>{error && <ErrorAlert title={error as string} clearHandler={clearBooksError} />}</>
							<VStack>
								<TextFiled name='title' label='Title' placeholder={'Harry Poter'} />
								<SelectField
									name='price'
									label={'Books price'}
									placeholder='-'
									arrOptions={coursePrice}
								/>
								<TextFiled name='pdf' label='PDF Link' />
								{file ? (
									<Box pos={'relative'} w={'full'} h={200}>
										<Image
											src={
												typeof file === 'string'
													? loadImage(file as string)
													: URL.createObjectURL(file)
											}
											alt={'preview image'}
											fill
											style={{ objectFit: 'cover', borderRadius: '8px' }}
										/>
										<Icon
											as={FaTimes}
											fontSize={20}
											pos={'absolute'}
											right={2}
											top={2}
											cursor={'pointer'}
											onClick={() => setFile(null)}
										/>
									</Box>
								) : (
									<Box>
										<FileUploader
											handleChange={handleChange}
											name='file'
											types={['JPG', 'PNG', 'GIF']}
											style={{ minWidth: '100%' }}
										/>
										{errorFile && (
											<Text mt={2} fontSize='14px' color='red.500'>
												{errorFile}
											</Text>
										)}
									</Box>
								)}
							</VStack>
						</ModalBody>

						<ModalFooter>
							<Button
								type='submit'
								isLoading={isLoading}
								colorScheme='blue'
								mr={3}
								onClick={onClose}
							>
								Add books
							</Button>
						</ModalFooter>
					</Form>
				</Formik>
			</ModalContent>
		</Modal>
	);
};

export default BooksModal;

const data = {
	title: '',
	pdf: '',
	price: 0,
};
