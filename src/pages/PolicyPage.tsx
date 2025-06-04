import React from 'react';
import useTrackPageView from '../hooks/useTrackPage';
import { Box } from '@mui/material';
import Header from '../components/common/Header';
import Socials from '../components/common/Socials';
import Policy from '../components/common/Policy';

const PolicyPage: React.FC = () => {
	useTrackPageView();

	return (
		<Box>
			<div className='header-container'>
				<Header />
			</div>

			<Policy />
			<Socials />
		</Box>
	);
};

export default PolicyPage;
