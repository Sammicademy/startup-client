import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
	Stack,
	Textarea,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { GiSave } from 'react-icons/gi';
import 'react-quill/dist/quill.snow.css';
import { TagsInput } from 'react-tag-input-component';
import SectionTitle from 'src/components/section-title/section-title';
import { courseCategory, courseLevel, coursePrice } from 'src/config/constants';
import { editorModules } from 'src/config/editor.config';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateCourseComponent = () => {
	const [learned, setLearned] = useState<string[]>();
	const [requirements, setRequirements] = useState<string[]>();
	const [tags, setTags] = useState<string[]>();
	const [file, setFile] = useState(null);

	const handleChange = file => {
		setFile(file);
	};

	return (
		<>
			<SectionTitle
				title='Create course'
				subtitle="Note that when you're creating course it will be draft"
			/>
			<Divider mt={5} />
			<Flex mt={12} gap={4}>
				<Box w={'70%'}>
					<Stack spacing={5}>
						<FormControl isRequired>
							<FormLabel>Title</FormLabel>
							<Input
								type='text'
								h={14}
								placeholder={'JavaScript from 0 to hero'}
								colorScheme={'facebook'}
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Excerpt</FormLabel>
							<Textarea height={150} placeholder='Full course about JavaScript' />
						</FormControl>
						<Flex gap={4}>
							<Box w={'full'}>
								<FormLabel>
									What will students learn in your course?{' '}
									<Box as={'span'} color={'red.300'}>
										*
									</Box>
								</FormLabel>
								<TagsInput
									value={learned}
									onChange={setLearned}
									name='learn'
									placeHolder='Full project...'
								/>
							</Box>
							<Box w={'full'}>
								<FormLabel>
									Requirements{' '}
									<Box as={'span'} color={'red.300'}>
										*
									</Box>
								</FormLabel>
								<TagsInput
									value={requirements}
									onChange={setRequirements}
									name='requirements'
									placeHolder='Basic JavaScript...'
								/>
							</Box>
						</Flex>
						<Box>
							<FormLabel mb={3}>
								Description{' '}
								<Box as={'span'} color={'red.300'}>
									*
								</Box>
							</FormLabel>
							<ReactQuill modules={editorModules} />
						</Box>
						<Button w={'full'} h={14} colorScheme={'facebook'} rightIcon={<GiSave />}>
							Create course
						</Button>
					</Stack>
				</Box>
				<Box w={'30%'}>
					<Stack spacing={5}>
						<FormControl isRequired>
							<FormLabel>Level</FormLabel>
							<Select
								borderRadius={'8px'}
								placeholder={'-'}
								height={14}
								focusBorderColor={'green.500'}
							>
								{courseLevel.map(option => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</Select>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Category</FormLabel>
							<Select
								borderRadius={'8px'}
								placeholder={'-'}
								height={14}
								focusBorderColor={'green.500'}
							>
								{courseCategory.map(option => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</Select>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Price</FormLabel>
							<Select borderRadius={'8px'} height={14} focusBorderColor={'green.500'}>
								{coursePrice.map(option => (
									<option key={option} value={option}>
										{option.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
									</option>
								))}
							</Select>
						</FormControl>
						<Box>
							<FormLabel>
								Course tags{' '}
								<Box as={'span'} color={'red.300'}>
									*
								</Box>
							</FormLabel>
							<TagsInput value={tags} onChange={setTags} name='tags' placeHolder='JavaScript...' />
						</Box>
						<Box>
							<FormLabel>
								Course preview image{' '}
								<Box as={'span'} color={'red.300'}>
									*
								</Box>
							</FormLabel>
							<FileUploader
								handleChange={handleChange}
								name='file'
								types={['JPG', 'PNG', 'GIF']}
								style={{ minWidth: '100%' }}
							/>
						</Box>
					</Stack>
				</Box>
			</Flex>
		</>
	);
};

export default CreateCourseComponent;
