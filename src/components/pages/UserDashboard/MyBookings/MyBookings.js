import React from 'react';
import { BsHouseDoor, BsPerson } from 'react-icons/bs';

import { GiBathtub, GiBed } from 'react-icons/gi';

const MyBookings = () => {
	return (
		<div>
			<div className='grid grid-cols-12'>
				<div className='col-span-3'>
					<img
						src='https://image.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg'
						alt=''
						srcset=''
						className='rounded-lg h-36 ml-10'
					/>
				</div>
				<div className='col-span-6 -ml-8'>
					<p className='flex items-center space-x-2 text-red-700'>
						<span>Fri, Jul 17th 2020</span>
						<span>Sun, Jul 19th 2020</span>
					</p>
					<h1 className='text-2xl font-medium '>
						Rose view apartment
					</h1>
					<p className='w-3/4 flex items-center space-x-2'>
						<span>
							<BsHouseDoor />
						</span>
						<span className='border-r-2 pr-2'>Studio </span>
						<span>
							<BsPerson />
						</span>
						<span className='border-r-2 pr-2'>4 guests</span>
						<span>
							<GiBed />
						</span>
						<span className='border-r-2 pr-2'>2 Bedroom</span>
						<GiBathtub />
						<span>1 Bathroom</span>
					</p>
				</div>
				<div className='col-span-3'></div>
			</div>
		</div>
	);
};

export default MyBookings;
