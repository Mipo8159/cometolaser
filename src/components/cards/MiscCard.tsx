import React from 'react';
import { IMiscCard } from '../../interfaces/misc-card.interface';
import { Box, Typography } from '@mui/material';
import UseMedia from '../../hooks/UseMedia';

const MiscCard: React.FC<IMiscCard> = ({ initial, body, extra }) => {
	const { isMobile } = UseMedia();

	return (
		<Box marginBottom={isMobile ? 4 : 1}>
			{initial.mobile ? (
				<a
					href={`tel:${initial.head}`}
					style={{
						color: '#fff',
						fontSize: isMobile ? '16' : '18px',
						marginBottom: isMobile ? '15px' : '22px',
						display: 'block',
						fontFamily: 'montserrat',
						fontWeight: '500',
					}}>
					{initial.head}
				</a>
			) : (
				<Typography
					variant='h2'
					fontSize={isMobile ? 16 : 18}
					color='#fff'
					marginBottom={isMobile ? 2 : 3}
					fontFamily={'montserrat'}
					fontWeight={500}
					sx={{ textShadow: 'none' }}>
					{initial.head}
				</Typography>
			)}

			{body.email ? (
				<a
					href={`mailto:${body.head}`}
					style={{
						color: '#fff',
						fontSize: isMobile ? '16px' : '18px',
						marginBottom: isMobile ? '15px' : '22px',
						display: 'block',
						fontFamily: 'montserrat',
						fontWeight: '500',
					}}>
					{body.head}
				</a>
			) : (
				<Typography
					variant='h2'
					fontSize={isMobile ? 16 : 18}
					color='#fff'
					marginBottom={isMobile ? 2 : 3}
					fontFamily={'montserrat'}
					fontWeight={500}
					sx={{ textShadow: 'none' }}>
					{body.head}
				</Typography>
			)}

			{extra && (
				<Typography
					variant='h2'
					fontSize={isMobile ? 16 : 18}
					color='#fff'
					fontFamily={'montserrat'}
					fontWeight={500}
					marginBottom={isMobile ? 2 : 3}
					sx={{ textShadow: 'none' }}>
					{extra}
				</Typography>
			)}
		</Box>
	);
};

export default MiscCard;
