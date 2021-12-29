import React, { useState } from 'react';
import PlaceDetailReserveDateRange from './PlaceDetailReserveDateRange';
import moment from 'moment';
import CustomPopper from '../../../shared/CustomPopper/CustomPopper';
import PlaceDetailGuestCount from '../PlaceDetailGuestCount/PlaceDetailGuestCount';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import CustomModal from '../../../shared/CustomModal/CustomModal';
import useFirebase from '../../../../hooks/useFirebase';
import PlaceDetailConfirmReserve from './PlaceDetailConfirmReserve';

const initialGuestCount = {
	adults: 1,
	children: 0,
	infants: 1,
	pets: 1,
};

const PlaceDetailReserve = (props) => {
	const {
		dateRange,
		getDiffInNights,
		setDateRange,
		handleClearDates,
		place,
	} = props;
	const { placePrice, placeImageList } = place;
	const [reservation, setReservation] = useState({});
	const [anchorEl, setAnchorEl] = useState(null);
	const [popperAnchor, setPopperAnchor] = useState(null);
	const [guestCount, setGuestCount] = useState(initialGuestCount);
	const [modalOpen, setModalOpen] = useState(false);
	const { user } = useFirebase();
	const [isReserveLoading, setIsReserveLoading] = useState(false);

	// control for reserve modal
	const handleModalOpen = () => setModalOpen(true);
	const handleModalClose = () => setModalOpen(false);

	// control functions of reserve date selection popover
	const handleReserveDatePopover = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(() => null);
	};

	// control functions of guest count
	const handleReserveGuestPopper = (event) => {
		setPopperAnchor(popperAnchor ? null : event.currentTarget);
	};

	const handleGuestCount = (key, operation) => {
		setGuestCount((prevGuestCount) => {
			let keyCount = prevGuestCount[key];

			if (operation === 'increase') keyCount++;
			else if (operation === 'decrease') keyCount--;

			const newGuestCount = { ...prevGuestCount };
			newGuestCount[key] = keyCount;

			return newGuestCount;
		});
	};

	// calculations regarding date range
	const nights = dateRange[1]
		? getDiffInNights(
				new Date(dateRange[0]?._d),
				new Date(dateRange[1]?._d)
		  )
		: 1;

	const costings = {
		nightStayCost: nights * Number(placePrice.price),
		serviceFee: nights * Number(placePrice.price) * 0.05,
		taxFees: nights * Number(placePrice.price) * 0.1,
	};
	const grandTotal =
		costings.nightStayCost + costings.serviceFee + costings.taxFees;

	// control for placing reservation
	const handleReserveConfirmDialog = () => {
		const newReservation = {
			check_in: dateRange[0]._d,
			check_out: dateRange[1]._d,
			total_cost: grandTotal,
			client_name: user?.displayName,
			client_email: user?.email,
			client_avatar: user?.photoURL,
			client_uid: user?.uid,
			host_uid: place.host.host_id,
			place_guest_count: guestCount,
			place_id: place._id,
			place_image: placeImageList[0],
			place_price: placePrice.price,
			place_title: place.placeTitle,
			reservation_status: 'pending',
		};
		setReservation(newReservation);
		handleModalOpen();
	};

	return (
		<div className='sticky top-10 py-8'>
			<div className='border box-shadow rounded-3xl p-8 space-y-4'>
				{/* price & reviews */}
				<div className='flex justify-between items-center'>
					<h4 className='text-lg'>
						<span className='text-2xl font-medium'>
							${placePrice.price}
						</span>{' '}
						/ night
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
				<button
					onClick={handleReserveConfirmDialog}
					className='btn-primary py-4 text-xl w-full'
					disable={dateRange[1] ? 'false' : 'true'}
				>
					{!dateRange[1] ? 'Select a date' : 'Reserve'}
				</button>
				{/* calculations */}
				{dateRange[1] && (
					<ul className='space-y-2'>
						<li className='flex justify-between items-center'>
							<span>
								${placePrice.price} x {nights} nights
							</span>
							<span>${costings.nightStayCost}</span>
						</li>
						<li className='flex justify-between items-center'>
							<span>Service fee</span>
							<span>${costings.serviceFee.toPrecision(4)}</span>
						</li>
						<li className='flex justify-between items-center'>
							<span>Occupancy taxes and fees</span>
							<span>${costings.taxFees.toPrecision(4)}</span>
						</li>
						<hr />
						<li className='flex justify-between items-center font-medium'>
							<span>Total</span>
							<span>${grandTotal.toPrecision(4)}</span>
						</li>
					</ul>
				)}
			</div>
			<CustomModal
				modalOpen={modalOpen}
				handleModalClose={handleModalClose}
			>
				<PlaceDetailConfirmReserve
					reservation={reservation}
					nights={nights}
					costings={costings}
					isReserveLoading={isReserveLoading}
					setIsReserveLoading={setIsReserveLoading}
					setDateRange={setDateRange}
					handleModalClose={handleModalClose}
				/>
			</CustomModal>
		</div>
	);
};

export default PlaceDetailReserve;
