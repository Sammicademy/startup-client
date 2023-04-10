import { Box, Container } from '@chakra-ui/react';
import { FC, FunctionComponent, useState } from 'react';
import InstructorProvider from 'src/provider/instructor.provider';
import Footer from '../footer/footer';
import Header from '../header/header';
import { LayoutProps } from '../layout.props';
import InstructorSidebar from '../sidebar/instructor-sidebar';
import { InstructorProvideProps } from './instructor.props';

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);

	const onToggle = () => setToggle(prev => !prev);

	return (
		<Box maxW={'full'} overflow={'hidden'}>
			<Header onToggle={onToggle} />
			<InstructorSidebar toggle={toggle} />
			<Box mt={'11vh'} pl={{ base: 0, lg: '320px' }} minH={'90vh'} transition={'all .4s ease'}>
				<Container maxW={'container.lg'}>{children}</Container>
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;

export const withInstructorLayout = <T extends Record<string, unknown> & InstructorProvideProps>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<InstructorProvider course={props.course} courses={props.courses}>
					<Component {...props} />
				</InstructorProvider>
			</Layout>
		);
	};
};
