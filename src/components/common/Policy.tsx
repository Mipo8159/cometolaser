import React from 'react';
import {
	Box,
	Typography,
	Divider,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import UseMedia from '../../hooks/UseMedia';

interface IPolicy {
	id: number;
	title: string;
	renderContent: (isMobile: boolean) => React.ReactNode;
}

const policyList: IPolicy[] = [
	{
		id: 1,
		title: 'Cancellation & No-Show Policy',
		renderContent: (isMobile) => (
			<Box>
				<Typography
					fontSize={isMobile ? 14 : 16}
					color='#000'
					marginBottom={1}
					fontFamily='montserrat'>
					Clients must cancel or reschedule appointments at least 24 hours in
					advance. No-shows will be charged:
				</Typography>
				<Box component='ul' sx={{ pl: 3, mb: 1 }}>
					<Typography
						component='li'
						fontSize={isMobile ? 14 : 16}
						color='#000'
						sx={{
							position: 'relative',
							pl: '1em',
							mb: 1,
							'&::before': {
								content: '"•"',
								position: 'absolute',
								left: 0,
								color: '#000',
								fontSize: isMobile ? '1em' : '1.2em',
								lineHeight: 1,
							},
						}}
						fontFamily='montserrat'>
						$25 fee for services 30 minutes or less
					</Typography>
					<Typography
						component='li'
						fontSize={isMobile ? 14 : 16}
						color='#000'
						sx={{
							position: 'relative',
							pl: '1em',
							'&::before': {
								content: '"•"',
								position: 'absolute',
								left: 0,
								color: '#000',
								fontSize: isMobile ? '1em' : '1.2em',
								lineHeight: 1,
							},
						}}
						fontFamily='montserrat'>
						$50 fee for services over 30 minutes
					</Typography>
				</Box>
				<Typography
					fontSize={isMobile ? 14 : 16}
					color='#000'
					fontFamily='montserrat'>
					A valid debit or credit card is required to be kept on file and will
					only be charged in accordance with this policy.
				</Typography>
			</Box>
		),
	},
	{
		id: 2,
		title: 'Late Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				We allow a 15-minute grace period for late arrivals. If you arrive more
				than 15 minutes late, your appointment will be cancelled, and the
				no-show fee may apply, as we must stay on schedule for other clients.
			</Typography>
		),
	},
	{
		id: 3,
		title: 'Forms of Payment Accepted',
		renderContent: (isMobile) => (
			<Box>
				<Typography
					fontSize={isMobile ? 14 : 16}
					color='#000'
					marginBottom={1}
					fontFamily='montserrat'>
					We accept:
				</Typography>
				<Box component='ul' sx={{ pl: 3 }}>
					{[
						'Cash',
						'Debit',
						'Credit Cards (Visa, Mastercard, American Express, Discover)',
						'Apple Pay',
						'Zelle',
					].map((method, idx) => (
						<Typography
							key={idx}
							component='li'
							fontSize={isMobile ? 14 : 16}
							color='#000'
							sx={{
								position: 'relative',
								pl: '1em',
								mb: idx < 4 ? 1 : 0,
								'&::before': {
									content: '"•"',
									position: 'absolute',
									left: 0,
									color: '#000',
									fontSize: isMobile ? '1em' : '1.2em',
									lineHeight: 1,
								},
							}}
							fontFamily='montserrat'>
							{method}
						</Typography>
					))}
				</Box>
			</Box>
		),
	},
	{
		id: 4,
		title: 'Refund Policy',
		renderContent: (isMobile) => (
			<Box>
				<Typography
					fontSize={isMobile ? 14 : 16}
					color='#000'
					marginBottom={1}
					fontFamily='montserrat'>
					All sales are final and non-refundable. If you purchase a package but
					are unable to continue:
				</Typography>
				<Box component='ul' sx={{ pl: 3 }}>
					<Typography
						component='li'
						fontSize={isMobile ? 14 : 16}
						color='#000'
						sx={{
							position: 'relative',
							pl: '1em',
							mb: 1,
							'&::before': {
								content: '"•"',
								position: 'absolute',
								left: 0,
								color: '#000',
								fontSize: isMobile ? '1em' : '1.2em',
								lineHeight: 1,
							},
						}}
						fontFamily='montserrat'>
						We will deduct the standard price of the treatments used and apply
						the remaining balance toward another service.
					</Typography>
					<Typography
						component='li'
						fontSize={isMobile ? 14 : 16}
						color='#000'
						sx={{
							position: 'relative',
							pl: '1em',
							'&::before': {
								content: '"•"',
								position: 'absolute',
								left: 0,
								color: '#000',
								fontSize: isMobile ? '1em' : '1.2em',
								lineHeight: 1,
							},
						}}
						fontFamily='montserrat'>
						If you’re unable to use a pre-paid service, we offer a one-time
						exchange for another service of equal value.
					</Typography>
				</Box>
			</Box>
		),
	},
	{
		id: 5,
		title: 'Tax & Gratuity Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				Tax and gratuity are not included in service prices. Gratuities are
				appreciated and can be given via Cash, Venmo, or Zelle.
			</Typography>
		),
	},
	{
		id: 6,
		title: 'Guest Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				Due to limited space, guests are not permitted to accompany clients
				during appointments.
			</Typography>
		),
	},
	{
		id: 7,
		title: 'Health Condition Policy',
		renderContent: (isMobile) => (
			<Box>
				<Typography
					fontSize={isMobile ? 14 : 16}
					color='#000'
					marginBottom={1}
					fontFamily='montserrat'>
					For your safety, we require medical clearance if you have a history of
					any of the following:
				</Typography>
				<Box component='ul' sx={{ pl: 3, mb: 1 }}>
					{[
						'Cancer (melanoma or non-melanoma)',
						'Precancerous lesions, atypical moles, or active infections',
						'Photosensitive conditions (e.g., lupus, herpes simplex, porphyria)',
						'Use of photosensitizing medications or herbs (e.g., isotretinoin, tetracycline, St. John’s wort)',
						'Immunosuppressive conditions or medications (e.g., HIV/AIDS, corticosteroids)',
						'Hormonal disorders (e.g., PCOS, uncontrolled diabetes)',
						'Bleeding disorders or anticoagulant use',
						'History of keloid scarring, very dry skin, or recent sun/tanning exposure (within 3–4 weeks)',
						'Alcohol use, allergies, or herbal supplements',
						'Wearing contact lenses during facial treatments',
						'Pregnancy at the time of treatment',
						'Use of Accutane within the last six months',
						'Presence of a pacemaker or internal defibrillator',
					].map((item, idx) => (
						<Typography
							key={idx}
							component='li'
							fontSize={isMobile ? 14 : 16}
							color='#000'
							sx={{
								position: 'relative',
								pl: '1em',
								mb: idx < 12 ? 1 : 0,
								'&::before': {
									content: '"•"',
									position: 'absolute',
									left: 0,
									color: '#000',
									fontSize: isMobile ? '1em' : '1.2em',
									lineHeight: 1,
								},
							}}
							fontFamily='montserrat'>
							{item}
						</Typography>
					))}
				</Box>
				<Typography
					fontSize={isMobile ? 14 : 16}
					color='#000'
					fontFamily='montserrat'>
					A doctor's note confirming safety is required prior to treatment if
					any of these conditions apply.
				</Typography>
			</Box>
		),
	},
	{
		id: 8,
		title: 'Laser Treatment Risk Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				IPL laser hair removal may cause temporary effects including redness,
				blistering, scabbing, bruising, and discoloration. Though rare, scarring
				and permanent discoloration can occur. These risks are explained prior
				to treatment to ensure informed consent.
			</Typography>
		),
	},
	{
		id: 9,
		title: 'Clinical Results Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				Results vary by individual due to factors such as medical history,
				skin/hair type, and compliance with treatment guidelines. While IPL is a
				safe and effective alternative to traditional hair removal methods,
				results cannot be guaranteed.
			</Typography>
		),
	},
	{
		id: 10,
		title: 'Treatment Series & Fee Disclosure Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				Laser hair removal typically requires 6–10 sessions for optimal results,
				followed by maintenance treatments as needed. The fee structure is fully
				explained before beginning treatment.
			</Typography>
		),
	},
	{
		id: 11,
		title: 'Procedure Understanding & Voluntary Consent Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				Patients confirm they have been fully informed of the nature, purpose,
				expected outcomes, and risks of laser hair removal. They understand no
				specific result can be guaranteed and that the procedure is cosmetic and
				voluntary.
			</Typography>
		),
	},
	{
		id: 12,
		title: 'Photography & Image Use Policy',
		renderContent: (isMobile) => (
			<Typography
				fontSize={isMobile ? 14 : 16}
				color='#000'
				fontFamily='montserrat'>
				Photographs may be taken before, during, and after treatment for medical
				documentation and promotional use. Any public use will be anonymized. By
				proceeding with treatment, patients authorize image use in accordance
				with this policy.
			</Typography>
		),
	},
];

const Policy: React.FC = () => {
	const theme = useTheme();
	const { isMobile } = UseMedia();
	const maxWidth = useMediaQuery(theme.breakpoints.up('md')) ? 800 : '100%';

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			py={isMobile ? 4 : 6}
			px={isMobile ? 2 : 0}
			bgcolor='#fff'>
			<Typography
				variant='h2'
				fontSize={isMobile ? 48 : 64}
				color='#000'
				mb={isMobile ? 2 : 3}
				fontFamily='montserrat'
				fontWeight={500}
				textAlign='center'>
				Policies
			</Typography>

			<Box
				width='100%'
				maxWidth={maxWidth}
				display='flex'
				flexDirection='column'
				gap={isMobile ? 3 : 4}>
				{policyList.map(({ id, title, renderContent }) => (
					<Box
						key={id}
						sx={{
							p: isMobile ? 2 : 3,
							borderTop: '2px solid #000',
							bgcolor: '#fff',
						}}>
						<Typography
							variant='h4'
							fontSize={isMobile ? 20 : 28}
							fontFamily='montserrat'
							fontWeight={600}
							color='#000'
							mb={1}>
							{title}
						</Typography>
						<Divider sx={{ mb: 2, borderColor: '#000' }} />
						<Box>{renderContent(isMobile)}</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Policy;
