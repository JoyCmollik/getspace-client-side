import React from 'react';
import moment from 'moment';
import Popover from '@mui/material/Popover';
import DateRangePicker from '../../../shared/DateRangePicker/DateRangePicker';

const PlaceDetailReserveDateRange = (props) => {
	const { anchorEl, handleClose, dateRange, setDateRange, handleClearDates } =
		props;
	const open = Boolean(anchorEl);

	return (
		<Popover
			open={open}
			onClose={handleClose}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			style={{ marginLeft: '16px', marginTop: '-16px' }}
		>
			<div className='p-5 space-y-4'>
				<div className='flex justify-between items-center'>
					{/* dynamic dates */}
					<div>
						{!dateRange[0] ? (
							<p>Please select your travel dates</p>
						) : (
							<>
								<h4 className='text-xl font-medium'>1 night</h4>
								<p className='text-para space-x-1'>
									<span>
										{moment(dateRange[0]).format('ll')}
									</span>
									<span>-</span>
									{!dateRange[1] ? (
										<span>Add date</span>
									) : (
										<span>
											{moment(dateRange[1]).format('ll')}
										</span>
									)}
								</p>
							</>
						)}
					</div>

					{/* selected dates */}
					<div className='w-6/12 grid grid-cols-2 border border-para rounded-lg'>
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
				</div>

				{/* date picker */}
				<div
					className='flex justify-center items-center'
					style={{ width: 700, height: 400 }}
				>
					<DateRangePicker
						dateRange={dateRange}
						setDateRange={setDateRange}
					/>
				</div>
				<div className='flex justify-end space-x-4'>
					<button onClick={handleClearDates} className='underline'>
						Clear dates
					</button>
					<button
						className='px-4 py-1 bg-black text-white rounded-lg'
						onClick={() => handleClose()}
					>
						Close
					</button>
				</div>
			</div>
		</Popover>
	);
};

export default PlaceDetailReserveDateRange;
