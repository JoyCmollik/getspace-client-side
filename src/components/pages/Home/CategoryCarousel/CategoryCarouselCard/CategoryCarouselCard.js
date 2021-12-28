import React from 'react';
// import {MdOutlineBeachAccess} from "react-icons/md";

const CategoryCarouselCard = () => {
	return (
		<div className='relative '>
			<div>
				<img
					src='https://i.ibb.co/G51QDZZ/Beautiful-landscape-of-beach-sea-ocean-with-empty-chair-deck-and-umbrella-nearly-coconut-palm-tree-w.jpg'
					alt='category'
					className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
				/>
			</div>

			<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
				<p className='text-sm text-gray-400 py-1'>Adventure</p>
				<h2 className='text-4xl font-medium text-gray-700'>
					Cox's Bazar
				</h2>
				<p className='text-sm pr-4 py-4'>
					<span className='font-extrabold text-gray-500'>5.0</span>{' '}
					<span className='text-gray-500'>(12 Reviews)</span>
				</p>
			</div>
		</div>
	);
};

export default CategoryCarouselCard;
