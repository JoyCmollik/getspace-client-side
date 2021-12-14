import React from 'react';
import PlaceDetailReviews from './PlaceDetailReviews';
import PlaceDetailReviewsRating from './PlaceDetailReviewsRating';
import PlaceDetailWriteReview from './PlaceDetailWriteReview';

const PlaceDetailReviewsContainer = () => {
	return (
		<div className='space-y-8'>
			{/* Rating statistics */}
			<div className='flex items-center space-x-1 text-xl font-semibold'>
				<lord-icon
					src='https://cdn.lordicon.com/mdgrhyca.json'
					trigger='loop'
					delay='4000'
					colors='primary:#ff385c,secondary:#ff385c'
					style={{ width: 25, height: 25 }}
				/>
				<p>4.93</p>
				<p className='text-para'>(146 reviews)</p>
			</div>
			{/* Rating statistics */}
			<div className='grid grid-cols-2 gap-x-20 gap-y-4'>
				<PlaceDetailReviewsRating
					title='Cleanliness'
					rating={Number('4.9')}
				/>
				<PlaceDetailReviewsRating
					title='Accuracy'
					rating={Number('4.8')}
				/>
				<PlaceDetailReviewsRating
					title='Communication'
					rating={Number('4.7')}
				/>
				<PlaceDetailReviewsRating
					title='Location'
					rating={Number('4.5')}
				/>
			</div>
			{/* Reviews collection */}
			<PlaceDetailReviews />
			<hr />
			{/* Review write */}
			<PlaceDetailWriteReview />
		</div>
	);
};

export default PlaceDetailReviewsContainer;
