import React from 'react';
import moment from 'moment';
import DateRangePicker from '../../../shared/DateRangePicker/DateRangePicker';

const PlaceDetailRangePicker = ({
	dateRange,
	setDateRange,
	handleClearDates,
	getDiffInNights,
}) => {
	return (
		<div className='space-y-2'>
			<h2 className='text-2xl font-semibold'>Select check-in date</h2>
			{/* dynamic dates */}
			<div className='text-para text-sm'>
				{!dateRange[0] ? (
					<p>Have your travel dates for price estimations.</p>
				) : (
					<>
						<h4 className='font-medium'>
							{dateRange[1]
								? getDiffInNights(
										new Date(dateRange[0]?._d),
										new Date(dateRange[1]?._d)
								  )
								: '1'}{' '}
							nights
						</h4>
						<p className='space-x-1'>
							<span>{moment(dateRange[0]).format('ll')}</span>
							<span>-</span>
							{!dateRange[1] ? (
								<span>Add date</span>
							) : (
								<span>{moment(dateRange[1]).format('ll')}</span>
							)}
						</p>
					</>
				)}
			</div>
			<DateRangePicker
				dateRange={dateRange}
				setDateRange={setDateRange}
				handleClearDates={handleClearDates}
			/>
			<button onClick={handleClearDates} className='underline'>
				Clear dates
			</button>
		</div>
	);
};

export default PlaceDetailRangePicker;
