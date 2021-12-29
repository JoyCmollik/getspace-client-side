import React from 'react';
import { Avatar } from '@mui/material';
import { BiBed } from 'react-icons/bi';
import firepit from '../../../../images/icons/fire-pit.svg';
import poolball from '../../../../images/icons/pool-ball.svg';
import indoorFirebase from '../../../../images/icons/indoor-firebase.svg';
import dine from '../../../../images/icons/dine.svg';
import { getAmenities } from '../../../utilities/hostData';

const PlaceDetailInformation = ({ place }) => {
	const {
		placeTitle,
		placeGuestCount,
		placeDesc,
		placeSpaceInfo,
		host,
		placeDescription,
		placeAmenityList,
	} = place;
	const amenitiesList = getAmenities(placeAmenityList);

	return (
		<div className='space-y-8 py-8'>
			{/* title */}
			<div className='flex justify-between items-center'>
				<div className='space-y-2'>
					<h2 className='text-2xl font-semibold'>
						{placeTitle} Hosted By {host?.host_name}
					</h2>
					<p className='flex items-center space-x-1'>
						<span>{placeGuestCount.guests} guests</span>
						<span
							className='rounded-full bg-para'
							style={{ padding: 1 }}
						/>
						<span>{placeSpaceInfo.text}</span>
						<span
							className='rounded-full bg-para'
							style={{ padding: 1 }}
						/>
						<span>{placeGuestCount.beds} bed</span>
						<span
							className='rounded-full bg-para'
							style={{ padding: 1 }}
						/>
						<span>{placeGuestCount.bathrooms} bath</span>
					</p>
				</div>
				<Avatar
					sx={{ width: 45, height: 45 }}
					src={host.host_avatar}
					alt={host.host_name}
				/>
			</div>
			<hr />
			{/* place information */}
			<div className='space-y-4'>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/gmzxduhd.json'
						trigger='hover'
						stroke='90'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>
							{placeDesc.title}
						</h4>
						<p className='text-para text-base'>{placeDesc.desc}</p>
					</div>
				</div>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/ycjlxmbw.json'
						trigger='hover'
						stroke='50'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>Enhanced Clean</h4>
						<p className='text-para text-base'>
							This Host committed to Airbnb's 5-step enhanced
							cleaning process.
						</p>
					</div>
				</div>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/zzcjjxew.json'
						trigger='hover'
						stroke='90'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>Great Location</h4>
						<p className='text-para text-base'>
							Most of recent guests gave the location a 5-star
							rating.
						</p>
					</div>
				</div>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/kbtmbyzy.json'
						trigger='hover'
						stroke='90'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>
							Free Cancellation before one week of reservation.
						</h4>
						<p className='text-para text-base'>
							This host will allow you the flexibility of
							cancelling as you wish.
						</p>
					</div>
				</div>
			</div>
			<hr />
			{/* description */}
			<p className='text-para'>{placeDescription}</p>
			<hr />
			{/* bed information */}
			<div className='space-y-4'>
				<h2 className='text-2xl font-semibold'>Where you'll sleep</h2>
				<div className='w-52 border rounded-lg p-4 space-y-2'>
					<BiBed style={{ fontSize: 25 }} />
					<h4 className='text-lg font-medium'>
						{placeGuestCount.bedrooms} Bedroom
					</h4>
					<p>Total {placeGuestCount.beds} bed available</p>
				</div>
			</div>
			<hr />
			{/* place offers */}
			<div className='space-y-4'>
				<h2 className='text-2xl font-semibold'>
					What this place offers
				</h2>
				<div className='grid grid-cols-2 gap-4 xl:w-4/5'>
					{amenitiesList.map((amenity) => (
						<div
							key={amenity.id}
							className='flex items-center space-x-4'
						>
							{amenity?.iconCode ? (
								<lord-icon
									src={`https://cdn.lordicon.com/${amenity.iconCode}.json`}
									trigger='hover'
									colors='primary:#121331,secondary:#ff385c'
									style={{ width: 50, height: 50 }}
								/>
							) : (
								<img
									src={amenity.icon}
									alt='icon'
									style={{ width: 50, height: 40 }}
								/>
							)}
							<p>{amenity.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PlaceDetailInformation;
