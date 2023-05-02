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
import { FC, useEffect, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';
import { coursePrice, createBooksCategory } from 'src/config/constants';
import { loadImage } from 'src/helpers/image.helper';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { FileService } from 'src/services/file.service';
import { BooksValidation } from 'src/validations/books.validation';
import ErrorAlert from '../error-alert/error-alert';
import SelectField from '../select-field/select-field';
import TextFiled from '../text-filed/text-filed';
import { BookModalProps } from './books-modal.props';

const BooksModal: FC<BookModalProps> = ({ isOpen, onClose, booksValue }): JSX.Element => {
	const [values, setValues] = useState(data);
	const [file, setFile] = useState<File | string | null>();
	const [errorFile, setErrorFile] = useState('');

	const { startCreateBooksLoading, createBooks, clearBooksError, updateBooks } = useActions();
	const { isLoading, error } = useTypedSelector(state => state.books);
	const toast = useToast();
	const { t } = useTranslation();

	const handleChange = (file: File) => {
		setFile(file);
	};

	const onSubmit = async (fomrikValues: FormikValues) => {
		if (!file) {
			setErrorFile(t('preview_img_is_requried', { ns: 'global' }) as string);
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

		if (!booksValue) {
			createBooks({
				price: fomrikValues.price,
				title: fomrikValues.title,
				pdf: fomrikValues.pdf,
				image: imageUrl as string,
				category: fomrikValues.category,
				callback: () => {
					toast({
						title: t('successfully_created_course', { ns: 'instructor' }),
						position: 'top-right',
						isClosable: true,
						status: 'success',
					});
					setFile(null);
					onClose();
				},
			});
		} else {
			updateBooks({
				price: fomrikValues.price,
				title: fomrikValues.title,
				pdf: fomrikValues.pdf,
				_id: booksValue._id,
				category: fomrikValues.category,
				image: imageUrl as string,
				callback: () => {
					toast({
						title: t('successfully_edited', { ns: 'instructor' }),
						position: 'top-right',
						isClosable: true,
						status: 'success',
					});
					setFile(null);
					onClose();
				},
			});
		}
	};

	useEffect(() => {
		setErrorFile('');
		if (booksValue) {
			setValues(booksValue);
			setFile(booksValue.image);
		} else {
			setValues(data);
			setFile(null);
		}
	}, [booksValue]);

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
					enableReinitialize
				>
					<Form>
						<ModalBody>
							<>{error && <ErrorAlert title={error as string} clearHandler={clearBooksError} />}</>
							<VStack>
								<TextFiled
									name='title'
									label={t('title', { ns: 'instructor' })}
									placeholder={'Harry Poter'}
								/>
								<TextFiled name='pdf' label={t('pdf_link', { ns: 'admin' })} />
								<SelectField
									name='price'
									label={t('books_price', { ns: 'admin' })}
									placeholder='-'
									arrOptions={coursePrice}
								/>
								<SelectField
									name='category'
									label={t('category', { ns: 'instructor' })}
									placeholder='-'
									arrOptions={createBooksCategory}
								/>
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
							<Button type='submit' isLoading={isLoading} colorScheme='blue' mr={3}>
								{booksValue ? t('edit_book', { ns: 'admin' }) : t('add_book', { ns: 'admin' })}
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
	category: '',
};
