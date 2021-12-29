import moment from 'moment';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PlaceDetailConfirmReserve = (props) => {
	const {
		reservation,
		nights,
		isReserveLoading,
		setIsReserveLoading,
		costings,
	} = props;

	console.log(reservation);

	return (
		<div>
			<div className='grid grid-cols-2 px-5'>
				{/* first column */}
				<div className=''>
					<div className='grid grid-cols-2'>
						<img
							className='rounded-lg object-cover h-28'
							src={reservation.place_image}
							alt='place'
						/>
					</div>
				</div>
				<div className=''>
					{/* second column */}
					<div className=''>
						<div className='border box-shadow rounded-3xl p-8 space-y-4'>
							{/* price & reviews */}
							<div className='flex justify-start items-center'>
								<h4 className='text-lg'>
									<span className='text-2xl font-medium'>
										${reservation.place_price}
									</span>{' '}
									/ night
								</h4>
							</div>
							<div>
								<div className='grid grid-cols-2 border border-para rounded-lg cursor-pointer'>
									{/* check-in check-out wrapper */}
									<div className='col-span-2 grid grid-cols-2'>
										<div className='text-xs p-2'>
											<h4 className='font-medium'>
												CHECK-IN
											</h4>
											<div className='text-sm'>
												<p className='text-black'>
													{moment(
														reservation.check_in
													).format('L')}
												</p>
											</div>
										</div>
										<div className='text-xs p-2'>
											<h4 className='font-medium'>
												CHECKOUT
											</h4>
											<div className='text-sm'>
												<p className='text-black'>
													{moment(
														reservation.check_out
													).format('L')}
												</p>
											</div>
										</div>
									</div>
									{/* guests count details wrapper */}
									<div className='col-span-2 text-xs p-2 flex justify-between items-center'>
										{/* guest counts dynamic info */}
										<div>
											<h4 className='font-medium'>
												GUESTS
											</h4>
											<p className='text-sm'>
												<span>
													{reservation
														.place_guest_count
														.adults +
														reservation
															.place_guest_count
															.children}{' '}
													guests,
												</span>

												<span>
													{
														reservation
															.place_guest_count
															.infants
													}{' '}
													infants,
												</span>

												<span>
													{
														reservation
															.place_guest_count
															.pets
													}{' '}
													pets
												</span>
											</p>
										</div>
										{/* icons */}
										<div className='text-para'>
											<FaCheckCircle />
										</div>
									</div>
								</div>
							</div>
							{/* calculations */}

							<ul className='space-y-2'>
								<li className='flex justify-between items-center'>
									<span>
										${reservation.place_price} x {nights}{' '}
										nights
									</span>
									<span>${costings.nightStayCost}</span>
								</li>
								<li className='flex justify-between items-center'>
									<span>Service fee</span>
									<span>${costings.serviceFee}</span>
								</li>
								<li className='flex justify-between items-center'>
									<span>Occupancy taxes and fees</span>
									<span>${costings.taxFees}</span>
								</li>
								<hr />
								<li className='flex justify-between items-center font-medium'>
									<span>Total</span>
									<span>${reservation.total_cost}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='pb-4 flex justify-end space-x-4'>
				{/* reserve */}
				<button className='btn-primary px-5 py-2'>
					Confirm Reserve
				</button>
				<button className='text-red-400 border border-red-400 rounded-lg px-5 py-2'>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default PlaceDetailConfirmReserve;
