import React from 'react';
import { Avatar, Rating } from '@mui/material';

const ReviewSectionCard = () => {
	return (
		<div className='flex flex-col justify-center items-center space-y-4'>
			<p className='text-para text-lg text-center'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
				magni consectetur iste accusantium atque corporis amet odio,
				ullam id numquam, veniam ab earum quae laborum.
			</p>
			<Rating name='read-only' value={4} readOnly />
			<h5 className=''>Kevin Kay</h5>
			<Avatar
				alt='Remy Sharp'
				src='https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2020/07/male-2.jpg'
				sx={{ width: 56, height: 56 }}
			/>
		</div>
	);
};

export default ReviewSectionCard;
