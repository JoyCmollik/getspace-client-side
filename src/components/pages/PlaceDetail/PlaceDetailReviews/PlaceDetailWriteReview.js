import React, { useState } from 'react';
import { Rating, Avatar } from '@mui/material';

const initialReview = {
	cleanliness: 4,
	accuracy: 4,
	communication: 4,
	location: 4,
	reviewComment: '',
};

const PlaceDetailWriteReview = () => {
	const [review, setReview] = useState(initialReview);

	const handleReview = (key, value) => {
		setReview((prevReview) => {
			let newReview = { ...prevReview };
			newReview[key] = value;
			return newReview;
		});
	};

	return (
		<div className='space-y-4'>
			<h4 className='text-2xl font-medium'>Write a review</h4>
			<div className='grid grid-cols-2 gap-x-4'>
				{/* textarea */}
				<div className='flex items-start space-x-4 border p-4 rounded-lg'>
					<Avatar />
					<textarea
						onBlur={(e) => {
							handleReview('reviewComment', e.target.value);
						}}
						className='w-full h-40 outline-none text-para'
						style={{ resize: 'none' }}
						placeholder='Your review....'
					/>
				</div>
				{/* ratings */}
				<div className='grid grid-cols-2 gap-4 place-items-center border p-4 rounded-lg'>
					<div className='flex flex-col items-center space-y-2'>
						<Rating
							value={review.cleanliness}
							onChange={(e, newValue) => {
								handleReview('cleanliness', newValue);
							}}
						/>
						<p>Cleanliness</p>
					</div>
					<div className='flex flex-col items-center space-y-2'>
						<Rating
							value={review.accuracy}
							onChange={(e, newValue) => {
								handleReview('accuracy', newValue);
							}}
						/>
						<p>Accuracy</p>
					</div>
					<div className='flex flex-col items-center space-y-2'>
						<Rating
							value={review.communication}
							onChange={(e, newValue) => {
								handleReview('communication', newValue);
							}}
						/>
						<p>Communication</p>
					</div>
					<div className='flex flex-col items-center space-y-2'>
						<Rating
							value={review.location}
							onChange={(e, newValue) => {
								handleReview('location', newValue);
							}}
						/>
						<p>Location</p>
					</div>
				</div>
			</div>
			<button className='px-5 py-2 bg-brand text-white rounded-3xl'>
				Update review
			</button>
		</div>
	);
};

export default PlaceDetailWriteReview;
