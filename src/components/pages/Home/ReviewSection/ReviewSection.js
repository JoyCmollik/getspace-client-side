import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import ReviewSectionCard from './ReviewSectionCard';

const ReviewSection = () => {
	return (
		<div className='container mx-auto py-20'>
			<SectionTitle title='loved by travellers' />
			<div className='w-2/4 mx-auto'>
				<ReviewSectionCard />
			</div>
		</div>
	);
};

export default ReviewSection;
