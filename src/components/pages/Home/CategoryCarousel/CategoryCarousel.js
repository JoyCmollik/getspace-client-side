import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import BannerCard from './BannerCard';
// import {MdOutlineBeachAccess} from "react-icons/md";

import CategoryCarouselCard from './CategoryCarouselCard/CategoryCarouselCard';

const CategoryCarousel = () => {
	return (
		<div>
			<section className='container py-20 mx-auto'>
				<SectionTitle title='Explore by' />
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
					<CategoryCarouselCard />
					<CategoryCarouselCard />
					<CategoryCarouselCard />
				</div>
			</section>
			<section className='container py-48 mx-auto'>
				<BannerCard />
			</section>
		</div>
	);
};

export default CategoryCarousel;
