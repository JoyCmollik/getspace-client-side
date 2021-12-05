import React from 'react';
import PopularCityCard from './PopularCityCard';

const image =
	'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

const PopularCities = () => {
	return (
		<div className='bg-dark py-20'>
			<div className='container mx-auto'>
				{/* title */}
				<div className='space-y-4 mb-10'>
					<h4 className='text-2xl text-white font-semibold'>
						Popular City
					</h4>
					<p
						className='mx-auto bg-brand'
						style={{ width: 70, height: 1 }}
					/>
				</div>
				{/* content */}
				<div className='flex justify-center items-center space-x-8'>
					<PopularCityCard />
					<PopularCityCard />
					<PopularCityCard />
					<PopularCityCard />
				</div>
			</div>
		</div>
	);
};

export default PopularCities;
