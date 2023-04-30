import {
	Button,
	ButtonGroup,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineFieldNumber, AiOutlineReload } from 'react-icons/ai';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';
import { AdminInstructorTableProps } from './admin-instructor-table.props';

const AdminInstructorTable: FC<AdminInstructorTableProps> = ({
	instructors,
	approved,
}): JSX.Element => {
	const { approveInstructor, deleteInstructor, clearAdminError } = useActions();
	const { isLoading, error } = useTypedSelector(state => state.admin);
	const { t } = useTranslation();
	const router = useRouter();
	const toast = useToast();

	const approveInstructorHandler = (instructorId: string) => {
		approveInstructor({
			instructorId,
			callback: () => {
				router.replace(router.asPath);
				toast({
					title: 'Successfully approve',
					status: 'success',
					position: 'top-right',
					isClosable: true,
				});
			},
		});
	};

	const deleteInstructorHandler = (instructorId: string) => {
		deleteInstructor({
			instructorId,
			callback: () => {
				router.replace(router.asPath);
				toast({
					title: 'Successfully deleted',
					status: 'info',
					position: 'top-right',
					isClosable: true,
				});
			},
		});
	};

	return (
		<>
			<>{error && <ErrorAlert title={error as string} clearHandler={clearAdminError} />}</>
			<TableContainer>
				<Table variant='striped' colorScheme='teal'>
					<TableCaption>
						<Button colorScheme={'facebook'} variant={'outline'} rightIcon={<AiOutlineReload />}>
							more...
						</Button>
					</TableCaption>
					<Thead>
						<Tr>
							<Th isNumeric>
								<AiOutlineFieldNumber fontSize={20} />
							</Th>
							<Th>Email</Th>
							<Th>FullName</Th>
							<Th>Job</Th>
							<Th>Social media</Th>
							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{instructors.map((instructor, idx) => (
							<Tr key={idx}>
								<Td>{idx + 1}</Td>
								<Td>{instructor.author.email}</Td>
								<Td>{instructor.author.fullName}</Td>
								<Td>{instructor.author.job}</Td>
								<Td>{instructor.socialMedia}</Td>
								<Td>
									<ButtonGroup variant='outline'>
										{approved ? (
											<Button
												isLoading={isLoading}
												size={'sm'}
												colorScheme={'red'}
												onClick={() => deleteInstructorHandler(instructor._id)}
											>
												Del
											</Button>
										) : (
											<Button
												size={'sm'}
												colorScheme='facebook'
												isLoading={isLoading}
												onClick={() => approveInstructorHandler(instructor._id)}
											>
												Appr
											</Button>
										)}
									</ButtonGroup>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default AdminInstructorTable;
