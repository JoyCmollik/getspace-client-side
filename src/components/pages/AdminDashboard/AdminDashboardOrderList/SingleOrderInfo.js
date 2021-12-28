import React from 'react';

const SingleOrderInfo = () => {
	return (
		<div className='container flex'>
			<div className='flex items-center py-5 '>
				<div className='px-1'>
					<img
						className='rounded-full h-10 w-10'
						src='https://i.ibb.co/q7J67Gp/irene-strong-v2a-Knj-Mb-P-k-unsplash.jpg'
						alt=''
					/>
				</div>
				<div className='items-center'>
					<h2 className='text-xs pb-3 font-bold hover:text-red-400'>
						Adam
					</h2>
				</div>
			</div>

			<div className='px-7 items-center py-5  '>
				<h2 className='text-xs pb-3 hover:text-red-400'>
					2 Guests, 1 pet
				</h2>
				<p className='text-xs font-thin text-gray-400 hover:text-yellow-400 '>
					4 nights
				</p>
			</div>
			<div className='pl-11 items-center py-5 hover:text-red-400 '>
				<h2 className='text-xs pb-3'>Dream Home</h2>
			</div>
			<div className='pl-8 items-center py-5 hover:text-red-400 '>
				<h2 className='text-xs pb-3'>12.12.2021</h2>
			</div>
			<div className='pl-16 items-center py-5 hover:text-red-400'>
				<h2 className='text-xs pb-3'>15.12.2021</h2>
			</div>
			<div className='pl-20 items-center py-5 hover:text-red-400'>
				<h2 className='text-xs pb-3'>$200</h2>
			</div>
			<div className='pl-24 items-center py-4 '>
				<button className='text-xs font-black text-black px-3 rounded-lg bg-red-300 hover:bg-yellow-200'>
					visited
				</button>
			</div>
		</div>
	);
};

export default SingleOrderInfo;
