import { Icon } from '@chakra-ui/react';
import { IconProp } from './icons.props';

const RusIcon = ({ ...props }: IconProp): JSX.Element => (
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
			<clipPath id='3ddd0ebfde'>
				<path d='M 2.582031 23 L 34.832031 23 L 34.832031 30.328125 L 2.582031 30.328125 Z M 2.582031 23 ' clipRule='nonzero' />
			</clipPath>
			<clipPath id='ac23ffb961'>
				<path d='M 2.582031 14 L 34.832031 14 L 34.832031 24 L 2.582031 24 Z M 2.582031 14 ' clipRule='nonzero' />
			</clipPath>
			<clipPath id='3e37e541af'>
				<path
					d='M 2.582031 7.078125 L 34.832031 7.078125 L 34.832031 15 L 2.582031 15 Z M 2.582031 7.078125 '
					clipRule='nonzero'
				/>
			</clipPath>
		</defs>
		<g clipPath='url(#3ddd0ebfde)'>
			<path
				fill='#ce2028'
				d='M 34.816406 26.75 C 34.816406 28.726562 33.214844 30.328125 31.238281 30.328125 L 6.175781 30.328125 C 4.195312 30.328125 2.59375 28.726562 2.59375 26.75 L 2.59375 23.175781 L 34.816406 23.175781 Z M 34.816406 26.75 '
				fillOpacity='1'
				fillRule='nonzero'
			/>
		</g>
		<g clipPath='url(#ac23ffb961)'>
			<path
				fill='#22408c'
				d='M 2.59375 14.234375 L 34.816406 14.234375 L 34.816406 23.175781 L 2.59375 23.175781 Z M 2.59375 14.234375 '
				fillOpacity='1'
				fillRule='nonzero'
			/>
		</g>
		<g clipPath='url(#3e37e541af)'>
			<path
				fill='#eeeeee'
				d='M 31.238281 7.078125 L 6.175781 7.078125 C 4.195312 7.078125 2.59375 8.679688 2.59375 10.65625 L 2.59375 14.234375 L 34.816406 14.234375 L 34.816406 10.65625 C 34.816406 8.679688 33.214844 7.078125 31.238281 7.078125 Z M 31.238281 7.078125 '
				fillOpacity='1'
				fillRule='nonzero'
			/>
		</g>
	</Icon>
);

export default RusIcon;
