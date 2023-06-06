import {
	Avatar,
	AvatarBadge,
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { MdEdit } from 'react-icons/md';
import TextAreaField from 'src/components/text-area-field/text-area-field';
import TextFiled from 'src/components/text-filed/text-filed';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const Settings = () => {
	const { user } = useTypedSelector(state => state.user);

	const onSubmit = () => {};

	return (
		<>
			<HStack>
				<Avatar
					src={user?.avatar}
					name={user?.fullName}
					backgroundColor={'facebook.500'}
					size={'xl'}
				>
					<AvatarBadge
						as={IconButton}
						size='sm'
						rounded='full'
						top='-10px'
						colorScheme='facebook'
						aria-label='remove Image'
						icon={<MdEdit />}
					/>
				</Avatar>
				<VStack align={'flex-start'}>
					<Text fontSize={'xl'} fontWeight={'bold'}>
						{user?.fullName}
					</Text>
					<Text>
						<Box fontWeight={'bold'} as={'span'}>
							Email
						</Box>
						: {user?.email}
					</Text>
				</VStack>
			</HStack>
			<Formik onSubmit={onSubmit} initialValues={{}}>
				<Form>
					<Flex gap={5}>
						<TextFiled
							name='firstName'
							label='Ismingiz'
							placeholder='Omar'
						/>
						<TextFiled
							name='lastName'
							label='Sharfingiz'
							placeholder='Osman'
						/>
					</Flex>
					<Flex gap={5}>
						<TextFiled
							name='birthday'
							label="Tug'ilgan sana"
							placeholder='birthday'
							type='date'
						/>
						<TextFiled
							name='job'
							label='Kasbingiz'
							placeholder='Front-End developer'
						/>
					</Flex>
					<TextAreaField
						name='bio'
						placeholder="O'zingiz haqingizda"
						label="Ma'lumot"
						height='100'
					/>
					<Button
						mt={5}
						h={14}
						w={'full'}
						colorScheme={'facebook'}
						isActive
					>
						Submit
					</Button>
				</Form>
			</Formik>
		</>
	);
};

export default Settings;
