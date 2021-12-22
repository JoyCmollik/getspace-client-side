import React from 'react';
import './Banner.css';

const Banner = () => {
	return (
		<div className='banner-container container mx-auto rounded-3xl mt-4'>
			<div>
				<h1 className='text-6xl text-gray-300 mb-16'>
					Not sure where to go?&nbsp;Perfect.
				</h1>
				<button className='btn-primary py-3 px-8 rounded-lg text-white font-medium ml-80'>
					Explore
				</button>
			</div>
		</div>
	);
};

export default Banner;
