import React from 'react';

const BannerCard = () => {
	return (
		<div className=' bg-darklight p-28 text-center rounded-3xl'>
			<h2 className='hover:text-red-300 text-4xl font-semibold text-white'>
				A journey of a thousand miles begins with a single step.
			</h2>
			<p className='hover:text-yellow-200 text-xl text-white text-center p-5'>
				Let's spend your money and release your stress by going around
				the world.
			</p>
			<div className='text-center '>
				<br />
				<button className='font-extrabold text-white px-4 border-2 rounded-3xl h-10 btn-primary  '>
					<a href='/#'>Register Now</a>
				</button>
			</div>
		</div>
	);
};

export default BannerCard;
