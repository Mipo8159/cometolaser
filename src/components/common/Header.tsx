import React, { useState } from 'react';
import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowBackIosNew';
import '../../styles/vagaro.css';
import { useNavigate } from 'react-router-dom';
import UseMedia from '../../hooks/UseMedia';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const { isMobile } = UseMedia();

	// State for the ABOUT dropdown
	const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);
	const openAbout = Boolean(anchorElAbout);

	const handleAboutClick = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		setAnchorElAbout(e.currentTarget);
	};
	const handleAboutClose = () => {
		setAnchorElAbout(null);
	};
	const handleMenuItemClick = (path: string) => {
		navigate(path);
		handleAboutClose();
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				position: 'absolute',
				top: isMobile ? '0' : '10px',
				width: '95%',
				padding: isMobile ? '10px' : '12px 18px',
				borderRadius: '8px',
			}}>
			<Box
				width={isMobile ? '150px' : 'auto'}
				onClick={(e) => {
					e.stopPropagation();
					navigate('/');
				}}
				sx={{ cursor: 'pointer' }}>
				<Typography
					variant='h1'
					component='h1'
					color={'white'}
					fontSize={isMobile ? 25 : 42}
					fontFamily={'Bebas Neue'}
					fontWeight={600}
					letterSpacing={4}
					width={isMobile ? 75 : 'auto'}>
					COME TO LASER
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					gap: isMobile ? '12px' : '20px',
				}}>
				<Button
					className='btn-hover'
					sx={{
						color: 'black',
						background: 'white',
						border: '1px solid lightgray',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: isMobile ? '5px 8px' : '8px 16px',
						fontFamily: 'montserrat',
						fontWeight: 600,
						'&:hover': {
							border: '1px solid black',
						},
					}}
					endIcon={
						!isMobile && (
							<ArrowForwardIcon
								sx={{
									transform: 'rotate(180deg)',
									width: '12px',
								}}
							/>
						)
					}
					onClick={handleAboutClick}>
					<Typography fontWeight={500} fontFamily={'montserrat'} fontSize={15}>
						ABOUT
					</Typography>
				</Button>

				<Menu
					anchorEl={anchorElAbout}
					open={openAbout}
					onClose={handleAboutClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					PaperProps={{
						sx: {
							mt: 1,
							minWidth: 120,
						},
					}}>
					<MenuItem onClick={() => handleMenuItemClick('/faq')}>
						<Typography fontFamily='montserrat' fontSize={14}>
							FAQ
						</Typography>
					</MenuItem>
					<MenuItem onClick={() => handleMenuItemClick('/policy')}>
						<Typography fontFamily='montserrat' fontSize={14}>
							Policy
						</Typography>
					</MenuItem>
				</Menu>

				{/* CONTACT button */}
				<Button
					className='btn-hover'
					sx={{
						color: 'black',
						background: 'white',
						border: '1px solid lightgray',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: isMobile ? '5px 8px' : '8px 16px',
						fontFamily: 'montserrat',
						'&:hover': {
							border: '1px solid black',
						},
					}}
					endIcon={
						!isMobile && (
							<ArrowForwardIcon
								sx={{
									transform: 'rotate(180deg)',
									width: '12px',
								}}
							/>
						)
					}
					onClick={(e) => {
						e.stopPropagation();
						navigate('/contact');
					}}>
					<Typography fontWeight={500} fontFamily={'montserrat'} fontSize={15}>
						CONTACT
					</Typography>
				</Button>

				{/* BOOK link */}
				<a
					href='https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVBh1+AlsgZbN43U0IWetNqJ2tsFz33AN0AtcX/kaTbKxySdGKTrNIp+tEw+2riuHn9sUKnegykTdg2uWGlD56lYcdT+fezA9y6wRHn6e2Y+ybzJDt7JGI1L5wb+qBN3gR6VDem0UkWUUrHltt8sljDMv+qckAXfnN3rAOjknL20SyU2BoYoC34XG0MDA6uvmnE3oP+Wfxnp58Pp7FDSVmCCdBZsyFC753jlgHYrVoZp78mz2I0IqUiSx7P0QHrpFZ9w6cf6KxLVCIle9JxxgUc1+hFFGhZWLyKOgv0Z9InaLIy8JUq+PMUwmBCrdbgxwJ9t8fSVdyKCD6dVP285mRRtHeq+WtHEb6tdDF3O/ySgFLDL0E/IsEAs6tFJd58RtRgfb1YNGl5nNznxe1XU1/rcPrCu/n56etB75aofTzHdRh/GtyDZk9NYaKSGMkadMPg=='
					target='_blank'
					rel='noopener noreferrer'
					className='vagaro btn-hover'
					style={{
						padding: isMobile ? '5px 8px' : '8px 16px',
					}}>
					<Typography fontWeight={500} fontFamily={'montserrat'} fontSize={15}>
						BOOK
					</Typography>
					{!isMobile && (
						<ArrowForwardIcon
							style={{
								transform: 'rotate(180deg)',
								marginLeft: '6px',
								width: '12px',
							}}
						/>
					)}
				</a>
			</Box>
		</Box>
	);
};

export default Header;
