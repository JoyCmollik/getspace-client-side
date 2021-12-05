import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { BiBed, BiBath } from 'react-icons/bi';

const FeaturedPlaceCard = () => {
	return (
		<div className='rounded-2xl box-shadow overflow-hidden'>
			<img
				className='object-cover'
				src='https://images.unsplash.com/photo-1559910369-3924e235c1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
				alt='place'
			/>
			<div className='p-4 space-y-4'>
				<h4 className='space-x-1 flex items-center font-medium'>
					<FaLocationArrow />
					<span>Sydney, Australia</span>
				</h4>
				<div className='flex justify-between items-center'>
					<h4 className='text-brand font-bold'>$400/day</h4>
					<div className='flex items-center space-x-2'>
						<p className='space-x-1 flex items-center'>
							<BiBed />
							<span>4 Bed</span>
						</p>
						<p className='space-x-1 flex items-center'>
							<BiBath />
							<span>1 Bath</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedPlaceCard;
