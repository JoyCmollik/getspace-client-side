import React from 'react';
import { Avatar } from '@mui/material';
import { MdVerifiedUser } from 'react-icons/md';

const PlaceDetailHostInfo = () => {
	return (
		<div className='space-y-4 border-r'>
			{/* host name */}
			<div className='flex items-center space-x-4'>
				<Avatar sx={{ width: 54, height: 54 }} />
				<div className=''>
					<h2 className='text-2xl font-medium'>Hosted by Daleep</h2>
					<p className='text-para'>Joined in March 2018</p>
				</div>
			</div>
			{/* host bio */}
			<div className='flex items-center space-x-4'>
				<div className='flex items-center space-x-2'>
					<lord-icon
						src='https://cdn.lordicon.com/mdgrhyca.json'
						trigger='loop'
						delay='4000'
						colors='primary:#ff385c,secondary:#ff385c'
						style={{ width: 18, height: 18 }}
					/>
					<p>568 reviews</p>
				</div>
				<div className='flex items-center space-x-2'>
					<MdVerifiedUser className='text-brand' />
					<p>Identity verified</p>
				</div>
			</div>
			<p className='text-para'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ducimus commodi quia sed non molestiae ipsam modi nisi totam
				omnis quo nostrum, dignissimos iste similique expedita.
			</p>
			{/* other information */}
			<div className='space-y-4'>
				<p>Language: Hindi</p>
				<p>Response rate: 100%</p>
				<p>Response time: within an hour</p>
				<button className='px-5 py-2 border border-black rounded-lg'>
					Contact Host
				</button>
			</div>
		</div>
	);
};

export default PlaceDetailHostInfo;
