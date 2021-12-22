import React from 'react';

const BannerCard = () => {
	return (
		<div className=' bg-blue-300 p-44 text-center rounded-3xl'>
			<h2 className='text-5xl font-semibold text-white'>
				Don't miss the 50% discount if you register today!!
			</h2>
			<p className='text-xl text-white text-center p-5'>
				Let's spend your money and release your stress by going around
				the world.
			</p>
			<div className='text-center '>
				<br />
				<button className='font-extrabold text-white px-4 border-2 rounded-3xl h-10 bg-blue-500 hover:text-gray-900 '>
					<a href='/#'>Register Now</a>
				</button>
			</div>
		</div>
	);
};

export default BannerCard;
