import React, { useState } from 'react';
import PlaceDetailReserveDateRange from './PlaceDetailReserveDateRange';
import moment from 'moment';
import CustomPopper from '../../../shared/CustomPopper/CustomPopper';
import PlaceDetailGuestCount from '../PlaceDetailGuestCount/PlaceDetailGuestCount';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const initialGuestCount = {
	adults: 1,
	children: 0,
	infants: 1,
	pets: 1,
};

const PlaceDetailReserve = ({
	dateRange,
	getDiffInNights,
	setDateRange,
	handleClearDates,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [popperAnchor, setPopperAnchor] = useState(null);
	const [guestCount, setGuestCount] = useState(initialGuestCount);

	// control functions of reserve date selection popover
	const handleReserveDatePopover = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(() => null);
	};

	// control functions of guest count
	const handleReserveGuestPopper = (event) => {
		console.log('click');
		setPopperAnchor(popperAnchor ? null : event.currentTarget);
	};

	const handleGuestCount = (key, operation) => {
		setGuestCount((prevGuestCount) => {
			let keyCount = prevGuestCount[key];

			if (operation === 'increase') keyCount++;
			else keyCount--;

			const newGuestCount = { ...prevGuestCount };
			newGuestCount[key] = keyCount;

			return newGuestCount;
		});
	};

	return (
		<div className='sticky top-10 py-8'>
			<div className='border box-shadow rounded-3xl p-8 space-y-4'>
				{/* price & reviews */}
				<div className='flex justify-between items-center'>
					<h4 className='text-lg'>
						<span className='text-2xl font-medium'>$86</span> /
						night
					</h4>
					<div className='flex items-center space-x-1 text-sm'>
						<lord-icon
							src='https://cdn.lordicon.com/mdgrhyca.json'
							trigger='loop'
							delay='4000'
							colors='primary:#ff385c,secondary:#ff385c'
							style={{ width: 18, height: 18 }}
						/>
						<p>4.93</p>
						<p className='text-para'>(146 reviews)</p>
					</div>
				</div>
				{/* date picker */}
				<div>
					<div className='grid grid-cols-2 border border-para rounded-lg cursor-pointer'>
						{/* check-in check-out wrapper */}
						<div
							onClick={handleReserveDatePopover}
							className='col-span-2 grid grid-cols-2'
						>
							<div className='text-xs p-2 border-r border-para'>
								<h4 className='font-medium'>CHECK-IN</h4>
								<div className='text-sm'>
									{!dateRange[0] ? (
										<p className='text-para'>Add date</p>
									) : (
										<p className='text-black'>
											{moment(dateRange[0]).format('L')}
										</p>
									)}
								</div>
							</div>
							<div className='text-xs p-2'>
								<h4 className='font-medium'>CHECKOUT</h4>
								<div className='text-sm'>
									{!dateRange[1] ? (
										<p className='text-para'>Add date</p>
									) : (
										<p className='text-black'>
											{moment(dateRange[1]).format('L')}
										</p>
									)}
								</div>
							</div>
						</div>
						{/* date range pop over */}
						<PlaceDetailReserveDateRange
							anchorEl={anchorEl}
							handleClose={handleClose}
							getDiffInNights={getDiffInNights}
							dateRange={dateRange}
							setDateRange={setDateRange}
							handleClearDates={handleClearDates}
						/>
						{/* guests count details wrapper */}
						<div
							onClick={handleReserveGuestPopper}
							className='col-span-2 border-t border-para text-xs p-2 flex justify-between items-center'
						>
							{/* guest counts dynamic info */}
							<div>
								<h4 className='font-medium'>GUESTS</h4>
								<p className='text-sm'>
									{Boolean(guestCount.adults) && (
										<span>
											{guestCount.adults +
												guestCount.children}{' '}
											guests,
										</span>
									)}
									{Boolean(guestCount.infants) && (
										<span>
											{guestCount.infants} infants,
										</span>
									)}
									{Boolean(guestCount.pets) && (
										<span>{guestCount.pets} pets</span>
									)}
								</p>
							</div>
							{/* icons */}
							<div className='text-xl'>
								{!popperAnchor ? (
									<BsChevronDown />
								) : (
									<BsChevronUp />
								)}
							</div>
						</div>
						{/* Popper for guest count selection */}
						<CustomPopper
							popperAnchor={popperAnchor}
							setPopperAnchor={setPopperAnchor}
						>
							<PlaceDetailGuestCount
								guestCount={guestCount}
								handleGuestCount={handleGuestCount}
							/>
						</CustomPopper>
					</div>
				</div>
				{/* reserve */}
				<button className='btn-primary py-4 text-xl w-full'>
					Reserve
				</button>
				{/* calculations */}
				<ul className='space-y-2'>
					<li className='flex justify-between items-center'>
						<span>
							$86 x{' '}
							{getDiffInNights(
								new Date(dateRange[0]?._d),
								new Date(dateRange[1]?._d)
							)}{' '}
							nights
						</span>
						<span>$86</span>
					</li>
					<li className='flex justify-between items-center'>
						<span>Service fee</span>
						<span>$12</span>
					</li>
					<li className='flex justify-between items-center'>
						<span>Occupancy taxes and fees</span>
						<span>$10</span>
					</li>
					<hr />
					<li className='flex justify-between items-center font-medium'>
						<span>Total</span>
						<span>$108</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PlaceDetailReserve;
