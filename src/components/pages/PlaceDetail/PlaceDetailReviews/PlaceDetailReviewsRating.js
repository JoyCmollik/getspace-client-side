import React from 'react';
import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';

const PlaceDetailReviewsRating = ({ title, rating }) => {
	return (
		<div className='flex justify-between items-center'>
			<p>{title}</p>
			<div className='flex items-center space-x-4'>
				<Box sx={{ width: '190px' }}>
					<LinearProgress
						className='rounded-lg'
						variant='determinate'
						color='secondary'
						value={rating * 20}
					/>
				</Box>
				<p>{rating}</p>
			</div>
		</div>
	);
};

export default PlaceDetailReviewsRating;
