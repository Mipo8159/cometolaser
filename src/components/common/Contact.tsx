import { Box, Typography } from '@mui/material';
import React from 'react';
import { IContactCard } from '../../interfaces/contact-card.interface';
import ContactCard from '../cards/ContactCard';
import UseMedia from '../../hooks/UseMedia';
import VideoPlayer from './VideoPlayer';

const contactList: IContactCard[] = [
	{
		id: 1,
		title: 'Phone',
		body: {
			head: '1 (929) 603 - 7388',
			mobile: true,
		},
	},
	{
		id: 2,
		title: 'Email',
		body: {
			head: 'ComeToLaser@gmail.com',
			email: true,
		},
	},
	{
		id: 3,
		title: 'Location',
		body: {
			head: '1425 Kings Hwy, 3 STE Brooklyn, NY 11229',
		},
	},
];

const Contact: React.FC = () => {
	const { isTablet, isMobile } = UseMedia();
	return (
		<Box
			marginTop={isMobile ? -4 : 0}
			marginBottom={isMobile ? 2 : 8}
			paddingX={2}>
			<Box
				display={'flex'}
				flexDirection={'row'}
				justifyContent={'center'}
				padding={5}>
				<Box display={isTablet || isMobile ? 'none' : 'block'}>
					<Typography
						variant='h2'
						fontSize={42}
						color='#000'
						marginBottom={3}
						sx={{ textShadow: 'none' }}
						fontFamily={'montserrat'}
						fontWeight={500}>
						Contact us
					</Typography>
				</Box>
			</Box>

			<Box display={'flex'} justifyContent={'center'}>
				<Box
					width={'776px'}
					marginRight={6}
					display={isTablet || isMobile ? 'none' : 'block'}>
					<VideoPlayer
						src='/video/contact-us.mp4'
						autoPlay={true}
						videoOnly
						styles={{ height: '475px' }}
					/>
				</Box>

				<Box display={'flex'} flexDirection={'column'}>
					<Typography
						variant='h2'
						fontSize={isMobile ? 28 : 36}
						color='#000'
						marginBottom={isMobile ? 3 : 6}
						marginTop={isMobile ? -2 : 'auto'}
						sx={{ textShadow: 'none' }}
						fontFamily={'montserrat'}
						fontWeight={500}>
						Contact Information
					</Typography>

					{contactList.map(({ id, title, body }: IContactCard) => (
						<ContactCard key={id} title={title} body={body} />
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
