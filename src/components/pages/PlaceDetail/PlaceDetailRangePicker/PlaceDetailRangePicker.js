import React from 'react';
import DateRangePicker from '../../../shared/DateRangePicker/DateRangePicker';

const PlaceDetailRangePicker = () => {
	return (
		<div className='space-y-2'>
			<h2 className='text-2xl font-semibold'>Select check-in date</h2>
			<p>You can add dates for the estimation price of your travel</p>
			<DateRangePicker />
		</div>
	);
};

export default PlaceDetailRangePicker;
