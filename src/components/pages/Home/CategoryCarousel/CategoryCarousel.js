import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';




const CategoryCarousel = () => {

	return (
		<section className="container py-20 mx-auto">
			<SectionTitle title='Explore by' />
			
			<div className="mb-12 grid grid-cols-4 gap-8">
				<div>
					<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-50 md:h-48 w-full object-cover object-center rounded-2xl"/>
				</div>
				<div>
				<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-50 md:h-48 w-full object-cover object-center rounded-2xl"/>
				</div>
				<div>
				<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-50 md:h-48 w-full object-cover object-center rounded-2xl"/>
				</div>
				<div>
				<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-50 md:h-48 w-full object-cover object-center rounded-2xl"/>
				</div>

			</div>
			</section>
	);
};

export default CategoryCarousel;
