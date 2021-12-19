import React from 'react';
import { HiOutlineClock } from 'react-icons/hi';
import {
	MdPets,
	MdGrass,
	MdSafetyDivider,
	MdOutlineAlarmOn,
	MdAddAlarm,
} from 'react-icons/md';

const PlaceDetailThingsToKnow = () => {
	return (
		<div className='space-y-4'>
			<h2 className='text-2xl font-medium'>Things to know</h2>
			<div className='text-para grid grid-cols-2 gap-4'>
				{/* house rules */}
				<div className='space-y-2'>
					<h4 className='font-medium'>House rules</h4>
					<div className='flex items-center space-x-2'>
						<HiOutlineClock />
						<p>Check-in: 12:00 AM - 11:00 PM</p>
					</div>
					<div className='flex items-center space-x-2'>
						<HiOutlineClock />
						<p>Check-out: 11:00 AM</p>
					</div>
					<div className='flex items-center space-x-2'>
						<MdPets />
						<p>Pets are allowed</p>
					</div>
				</div>
				{/* health & safety */}
				<div className='space-y-2'>
					<h4 className='font-medium'>Health & Safety</h4>
					<div className='flex items-center space-x-2'>
						<MdGrass />
						<p>This host is committed to our cleanliness terms.</p>
					</div>
					<div className='flex items-center space-x-2'>
						<MdSafetyDivider />
						<p>Social distancing and COVID-19 guidelines apply.</p>
					</div>
					<div className='flex items-center space-x-2'>
						<MdAddAlarm />
						<p>Carbon monoxide alarm.</p>
					</div>
					<div className='flex items-center space-x-2'>
						<MdOutlineAlarmOn />
						<p>Smoke alarm.</p>
					</div>
				</div>
				<div className='space-y-2'></div>
			</div>
		</div>
	);
};

export default PlaceDetailThingsToKnow;
