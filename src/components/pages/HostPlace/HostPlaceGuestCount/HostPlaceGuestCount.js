import React from 'react';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import { BsPlus, BsDash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useHostProvider from '../../../../hooks/useHostProvider';

const HostPlaceGuestCount = () => {
	const { placeGuestCount, handlePlaceGuestCount } = useHostProvider();

	const GuestCountItem = ({ guestCountKey }) => {
		return (
			<div className='flex justify-between items-center'>
				<h4 className='capitalize text-xl font-medium'>
					{guestCountKey}
				</h4>
				<div className='flex items-center space-x-4'>
					<button
						onClick={() =>
							handlePlaceGuestCount(guestCountKey, 'decrease')
						}
						className={`p-1 rounded-full border text-2xl ${
							placeGuestCount[guestCountKey] === 1
								? 'border-gray-200 text-gray-200'
								: 'border-para text-para'
						}`}
						disabled={placeGuestCount[guestCountKey] === 1}
					>
						<BsDash />
					</button>
					<p className='text-lg'>{placeGuestCount[guestCountKey]}</p>
					<button
						onClick={() =>
							handlePlaceGuestCount(guestCountKey, 'increase')
						}
						className={`p-1 rounded-full border text-2xl ${
							placeGuestCount[guestCountKey] >= 16
								? 'border-gray-200 text-gray-200'
								: 'border-para text-para'
						}`}
						disabled={placeGuestCount[guestCountKey] >= 16}
					>
						<BsPlus />
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className='h-screen grid grid-cols-2'>
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/ZXv7C4w/01-Royal-Heath.png) center/cover`,
				}}
			>
				<h1 className='text-5xl text-white font-semibold'>
					How many guests would you like to welcome?
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='flex-grow flex flex-col justify-center items-center'>
					<div className='w-7/12 space-y-8'>
						<GuestCountItem guestCountKey='guests' />
						<GuestCountItem guestCountKey='beds' />
						<GuestCountItem guestCountKey='bedrooms' />
						<GuestCountItem guestCountKey='bathrooms' />
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/amenities'>
						<button className='bg-brand text-white font-semibold px-5 py-2 rounded-3xl'>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceGuestCount;
