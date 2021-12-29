import React from 'react';
import { BsHouseDoor, BsPerson } from 'react-icons/bs';
import { GiBathtub, GiBed } from 'react-icons/gi';
import moment from 'moment';

const MyBookingItem = (props) => {
	const { place_image, place_title, place_guest_count, check_in, check_out } =
		props.myBooking;

	return (
		<div className='grid grid-cols-12 gap-4 p-2 border rounded-lg'>
			<div className='col-span-3'>
				<img
					src={place_image}
					alt='place'
					className='rounded-lg h-36 w-full object-cover'
				/>
			</div>
			<div className='col-span-6'>
				<p className='flex items-center space-x-2 text-red-700'>
					<span>{moment(check_in).format('LL')}</span>
					<span>-</span>
					<span> {moment(check_out).format('LL')} </span>
				</p>
				<h1 className='text-2xl font-medium '>{place_title}</h1>
				<p className='w-3/4 flex items-center space-x-2'>
					<span>
						<BsPerson />
					</span>
					<span className='border-r-2 pr-2'>
						{place_guest_count.adults} adults{' '}
					</span>
					<span>
						<BsPerson />
					</span>
					<span className='border-r-2 pr-2'>
						{place_guest_count.children} children
					</span>
				</p>
			</div>
			<div className='col-span-3'></div>
		</div>
	);
};

export default MyBookingItem;
