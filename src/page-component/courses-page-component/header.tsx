import {
	Box,
	Button,
	Divider,
	Flex,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaRegCommentDots, FaTelegram } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { HiHeart } from 'react-icons/hi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import ReactStars from 'react-stars';
import TextAreaField from 'src/components/text-area-field/text-area-field';
import TextFiled from 'src/components/text-filed/text-filed';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { DarkLogo, LightLogo } from 'src/icons';

const Header = () => {
	const [reviewVal, setReviewVal] = useState(val);

	const { colorMode, toggleColorMode } = useColorMode();
	const { course } = useTypedSelector(state => state.course);
	const { user } = useTypedSelector(state => state.user);
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onReviewSubmit = (formikValues: FormikValues) => {
		console.log(formikValues);
	};

	useEffect(() => {
		setReviewVal({
			...reviewVal,
			name: user?.fullName as string,
			email: user?.email as string,
		});
	}, [user]);

	return (
		<Box
			position={'fixed'}
			top={0}
			left={0}
			zIndex={99}
			right={0}
			h={'10vh'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Stack
				h={'10vh'}
				w={'90%'}
				mx={'auto'}
				direction={'row'}
				align={'center'}
				justify={'space-between'}
			>
				<Stack gap={{ base: 0, md: 2 }} direction={'row'}>
					<Link href='/'>
						{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}
					</Link>
				</Stack>

				<Stack direction={'row'} align={'center'}>
					<IconButton
						colorScheme={'green'}
						variant={'ghost'}
						onClick={toggleColorMode}
						icon={
							colorMode == 'light' ? (
								<BsFillMoonStarsFill />
							) : (
								<FiSun />
							)
						}
						aria-label={'moon'}
					/>
					<IconButton
						icon={<FaTelegram />}
						onClick={() =>
							window.open('https://t.me/sammi_community')
						}
						aria-label={'comments'}
						variant={'ghost'}
						colorScheme={'telegram'}
						display={{ base: 'none', md: 'flex' }}
					/>
					<IconButton
						onClick={onOpen}
						icon={<FaRegCommentDots />}
						aria-label={'comments'}
						variant={'outline'}
						colorScheme={'green'}
						display={{ base: 'none', md: 'flex' }}
					/>
					<Button
						leftIcon={<HiHeart color='red' />}
						onClick={() =>
							window.open('https://t.me/samarbadriddinov/661')
						}
						colorScheme={'green'}
						display={{ base: 'none', md: 'flex' }}
					>
						Sponsor
					</Button>
					<IconButton
						onClick={() => router.push(`/course/${course?.slug}`)}
						icon={<RiLogoutBoxLine />}
						aria-label={'comments'}
						variant={'outline'}
						colorScheme={'red'}
					/>
				</Stack>
			</Stack>
			<Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
				<ModalOverlay
					bg='blackAlpha.300'
					backdropFilter='blur(10px) hue-rotate(90deg)'
				>
					<ModalContent>
						<ModalHeader>Izoh</ModalHeader>
						<ModalCloseButton />
						<Divider />
						<Formik
							initialValues={reviewVal}
							onSubmit={onReviewSubmit}
							enableReinitialize
						>
							{formik => (
								<Form>
									<ModalBody>
										<Text fontWeight='bold' mb='1rem'>
											Kurs haqida o'z fikringizni yozishingiz mumkin.
										</Text>
										<Flex gap={2}>
											<TextFiled
												name={'email'}
												label={'Email manzilingiz'}
												disabled={true}
											/>
											<TextFiled
												name={'name'}
												label={'Ismingiz'}
												disabled={true}
											/>
										</Flex>
										<Box mt={2}>
											<ReactStars
												edit={true}
												size={20}
												value={formik.values.rating}
												onChange={e =>
													formik.setFieldValue('rating', e)
												}
											/>
										</Box>
										<Box mt={2}>
											<TextAreaField
												name={'summary'}
												label={'Izohingiz'}
												resize={'none'}
												height={'150px'}
												placeholder={
													"Men ushbu kursni ko'rib bir texnologiyani to'liq o'rgana oldim. Kurslar ham amaliy ham nazariy ekan...."
												}
											/>
										</Box>
									</ModalBody>
									<ModalFooter>
										<Button
											h={14}
											colorScheme={'facebook'}
											w={'full'}
											isActive
											type='submit'
										>
											Submit
										</Button>
									</ModalFooter>
								</Form>
							)}
						</Formik>
					</ModalContent>
				</ModalOverlay>
			</Modal>
		</Box>
	);
};

export default Header;

const val = {
	email: '',
	name: '',
	rating: 0,
	summary: '',
};
