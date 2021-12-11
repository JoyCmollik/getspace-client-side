import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
// import {MdOutlineBeachAccess} from "react-icons/md";

import CategoryCarouselCard from './CategoryCarouselCard/CategoryCarouselCard';




const CategoryCarousel = () => {

	return (
		<section className="container py-20 mx-auto">
			<SectionTitle title='Explore by' />
			<div className='flex justify-between'>
				<CategoryCarouselCard/>
				<CategoryCarouselCard/>
				<CategoryCarouselCard/>
				<CategoryCarouselCard/>
				<CategoryCarouselCard/>

			</div>
			

			
		</section>
	);
};

export default CategoryCarousel;
