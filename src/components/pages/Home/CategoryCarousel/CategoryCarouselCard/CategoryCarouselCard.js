import React from 'react';
// import {MdOutlineBeachAccess} from "react-icons/md";

const CategoryCarouselCard = () => {
	return (
		<div className=' relative'>
			<div>
				<img
					src='https://i.ibb.co/G51QDZZ/Beautiful-landscape-of-beach-sea-ocean-with-empty-chair-deck-and-umbrella-nearly-coconut-palm-tree-w.jpg'
					alt='image'
					className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
				/>
			</div>

			<div className=''>
				<div
					className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto 
absolute -bottom-1/3'
				>
					<p className='text-sm text-gray-400 py-1'>
						B<span className='p-1'>E</span>A
						<span className='p-1'>C</span>H
					</p>
					<h2 className='text-4xl font-medium text-gray-700'>
						Cox's Bazar
					</h2>
					<p className='text-sm pr-4 py-4'>
						<span className='font-extrabold text-gray-500'>
							5.0
						</span>{' '}
						<span className='text-gray-500'>(12 Reviews)</span>
					</p>
				</div>
			</div>
		</div>
		// <div className='w-72'>
		//     <div className='m-5 p-5 border-2 flex justify-between rounded-2xl'>

		// 		<div>
		//         <br/>
		//         <br/>
		//         <br/>
		// 			<i className='text-3xl text-gray-700'><MdOutlineBeachAccess/></i>
		// 			<h2 className='font-semibold text-gray-700'>Beach Activity</h2>
		// 			<p className='font-semibold text-xs text-gray-300'>196 Activities</p>
		// 		</div>
		//         <div>
		// 			<button className='w-8 text-xs bg-red-50 rounded-2xl text-yellow-400 '>4.2</button>
		//         <br/>
		//         <br/>
		//         <br/>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default CategoryCarouselCard;
