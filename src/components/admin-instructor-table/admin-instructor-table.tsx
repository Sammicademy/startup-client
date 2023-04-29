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
} from '@chakra-ui/react';
import { AiOutlineFieldNumber, AiOutlineReload } from 'react-icons/ai';
import { instructorUsers } from 'src/config/constants';

const AdminInstructorTable = () => {
	return (
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
					{instructorUsers.map((user, idx) => (
						<Tr key={idx}>
							<Td>{idx + 1}</Td>
							<Td>{user.email}</Td>
							<Td>{user.fullName}</Td>
							<Td>{user.job}</Td>
							<Td>{user.socialMedia}</Td>
							<Td>
								<ButtonGroup variant='outline'>
									<Button size={'sm'} colorScheme='facebook'>
										Appr
									</Button>
									<Button size={'sm'} colorScheme={'red'}>
										Del
									</Button>
								</ButtonGroup>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default AdminInstructorTable;
