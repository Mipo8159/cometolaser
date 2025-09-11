import { Box, Typography } from '@mui/material';
import React from 'react';
import { IMiscCard } from '../../interfaces/misc-card.interface';
import MiscCard from '../cards/MiscCard';
import UseMedia from '../../hooks/UseMedia';

const footerContacts: IMiscCard[] = [
	{
		id: 1,
		initial: {
			head: '1 (929) 603 - 7388',
			mobile: true,
		},
		body: {
			head: 'ComeToLaser@gmail.com',
			email: true,
		},
	},
	{
		id: 2,
		initial: {
			head: '1425 Kings Hwy, 3 STE',
			mobile: false,
		},
		body: {
			head: 'Brooklyn, NY 11229',
			email: false,
		},
	},
	{
		id: 3,
		initial: {
			head: 'Mon - Fri: 9am - 6pm',
			mobile: false,
		},
		body: {
			head: '​​Saturday: 9am - 6pm',
			email: false,
		},
		extra: '​Sunday: Closed',
	},
];

const Footer: React.FC = () => {
	const { isMobile, isTablet } = UseMedia();
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			alignItems={isMobile || isTablet ? 'center' : 'flex-start'}
			sx={{ background: '#000' }}
			paddingX={isMobile ? 0 : 8}
			paddingY={isMobile ? 4 : 8}>
			<Box
				display={'flex'}
				flexDirection={isMobile ? 'column' : 'row'}
				width={isMobile ? 'auto' : '100%'}
				alignItems={'flex-start'}>
				<Typography
					variant='h2'
					fontSize={isMobile ? 28 : 56}
					color='#fff'
					marginBottom={isMobile ? 4 : 8}
					sx={{ textShadow: 'none' }}
					fontFamily={'montserrat'}
					marginRight={6}
					fontWeight={500}>
					Where to Find Us
				</Typography>

				<a
					href='https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVBh1+AlsgZbN43U0IWetNqJ2tsFz33AN0AtcX/kaTbKxySdGKTrNIp+tEw+2riuHn9sUKnegykTdg2uWGlD56lYcdT+fezA9y6wRHn6e2Y+ybzJDt7JGI1L5wb+qBN3gR6VDem0UkWUUrHltt8sljDMv+qckAXfnN3rAOjknL20SyU2BoYoC34XG0MDA6uvmnE3oP+Wfxnp58Pp7FDSVmCCdBZsyFC753jlgHYrVoZp78mz2I0IqUiSx7P0QHrpFZ9w6cf6KxLVCIle9JxxgUc1+hFFGhZWLyKOgv0Z9InaLIy8JUq+PMUwmBCrdbgxwJ9t8fSVdyKCD6dVP285mRRtHeq+WtHEb6tdDF3O/ySgFLDL0E/IsEAs6tFJd58RtRgfb1YNGl5nNznxe1XU1/rcPrCu/n56etB75aofTzHdRh/GtyDZk9NYaKSGMkadMPg=='
					target='_blank'
					rel='noopener noreferrer'
					className='vagaro btn-hover btn-footer'
					style={{
						padding: isMobile ? '5px 8px' : '8px 16px',
					}}>
					<Typography fontWeight={500} fontFamily={'montserrat'} fontSize={15}>
						BOOK NOW
					</Typography>
				</a>
			</Box>

			<Box
				display={isMobile ? 'block' : 'flex'}
				flexDirection={!isMobile ? 'row' : 'column'}
				alignItems={isMobile || isTablet ? 'center' : 'flex-start'}
				justifyContent={'space-between'}
				width={isMobile ? 'auto' : '100%'}>
				{footerContacts.map(({ id, initial, body, extra }: IMiscCard, idx) => (
					<MiscCard
						key={id}
						initial={initial}
						body={body}
						extra={extra}
						mg={isMobile ? (idx % 2 === 0 ? 10 : -14) : 0}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Footer;
