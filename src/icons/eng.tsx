import { Icon } from '@chakra-ui/react';
import { IconProp } from './icons.props';

const EngIcons = ({ ...props }: IconProp): JSX.Element => (
	<Icon
		xmlns='http://www.w3.org/2000/svg'
		width='30'
		zoomAndPan='magnify'
		viewBox='0 0 37.5 37.499999'
		height='30'
		preserveAspectRatio='xMidYMid meet'
		version='1.0'
		{...props}
	>
		<defs>
			<clipPath id='da33f8f8d9'>
				<path
					d='M 2.582031 7.078125 L 34.832031 7.078125 L 34.832031 30.328125 L 2.582031 30.328125 Z M 2.582031 7.078125 '
					clipRule='nonzero'
				/>
			</clipPath>
		</defs>
		<g clipPath='url(#da33f8f8d9)'>
			<path
				fill='#eeeeee'
				d='M 31.238281 7.078125 L 6.175781 7.078125 C 4.195312 7.078125 2.59375 8.679688 2.59375 10.65625 L 2.59375 26.75 C 2.59375 28.726562 4.195312 30.328125 6.175781 30.328125 L 31.238281 30.328125 C 33.214844 30.328125 34.816406 28.726562 34.816406 26.75 L 34.816406 10.65625 C 34.816406 8.679688 33.214844 7.078125 31.238281 7.078125 Z M 31.238281 7.078125 '
				fillOpacity='1'
				fillRule='nonzero'
			/>
			<path
				fill='#ce1124'
				d='M 21.390625 7.078125 L 16.019531 7.078125 L 16.019531 16.019531 L 2.59375 16.019531 L 2.59375 21.386719 L 16.019531 21.386719 L 16.019531 30.328125 L 21.390625 30.328125 L 21.390625 21.386719 L 34.816406 21.386719 L 34.816406 16.019531 L 21.390625 16.019531 Z M 21.390625 7.078125 '
				fillOpacity='1'
				fillRule='nonzero'
			/>
		</g>
	</Icon>
);
export default EngIcons;
