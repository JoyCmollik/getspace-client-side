import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import FeaturedPlaceCard from './FeaturedPlaceCard';

const FeaturedPlaces = () => {
	return (
		<div className='py-20 container mx-auto'>
			<SectionTitle title='highlights in france' />
			<div className='grid grid-cols-4 gap-4'>
				<FeaturedPlaceCard />
				<FeaturedPlaceCard />
				<FeaturedPlaceCard />
				<FeaturedPlaceCard />
			</div>
		</div>
	);
};

export default FeaturedPlaces;
