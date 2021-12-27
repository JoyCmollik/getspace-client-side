import React from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

const PlaceDetailGuestCount = ({ guestCount, handleGuestCount }) => {
	const GuestCountItem = ({ guestCountKey, subtitle }) => {
		return (
			<div className='flex justify-between items-center'>
				<div className='space-y-1'>
					<h4 className='capitalize text-lg font-medium'>
						{guestCountKey}
					</h4>
					<p className='text-para text-sm leading-none'>{subtitle}</p>
				</div>
				<div className='flex items-center space-x-4'>
					{/* decreasing button */}
					<button
						onClick={() =>
							handleGuestCount(guestCountKey, 'decrease')
						}
						className={`p-1 rounded-full border text-2xl ${
							guestCount[guestCountKey] === 0
								? 'border-gray-200 text-gray-200'
								: 'border-para text-para'
						}`}
						disabled={guestCount[guestCountKey] === 0}
					>
						<BsDash />
					</button>
					<p className='text-lg'>{guestCount[guestCountKey]}</p>
					{/* increasing button */}
					<button
						onClick={() =>
							handleGuestCount(guestCountKey, 'increase')
						}
						className={`p-1 rounded-full border text-2xl ${
							guestCount[guestCountKey] >= 16
								? 'border-gray-200 text-gray-200'
								: 'border-para text-para'
						}`}
						disabled={guestCount[guestCountKey] >= 16}
					>
						<BsPlus />
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className='space-y-4'>
			<GuestCountItem guestCountKey='adults' subtitle='Age 13+' />
			<GuestCountItem guestCountKey='children' subtitle='Ages 2-12' />
			<GuestCountItem guestCountKey='infants' subtitle='Under 2' />
			<GuestCountItem
				guestCountKey='pets'
				subtitle='Your assistance animal'
			/>
		</div>
	);
};

export default PlaceDetailGuestCount;
