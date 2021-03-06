import React from 'react';
import DateAdapter from '@mui/lab/AdapterMoment';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

const DateRangePicker = ({ dateRange, setDateRange }) => {
	// function getDaysAfter(date, amount) {
	// 	maxDate={getDaysAfter(dateRange[0], 4)} // add in the StaticDateRangePicker
	// 	return date ? moment(date).add(amount, 'days') : undefined;
	// }

	return (
		<LocalizationProvider dateAdapter={DateAdapter}>
			<div>
				<StaticDateRangePicker
					disablePast
					displayStaticWrapperAs='desktop'
					value={dateRange}
					onChange={(newValue) => {
						setDateRange(newValue);
					}}
					renderInput={(startProps, endProps) => (
						<React.Fragment>
							<TextField {...startProps} />
							<Box
								sx={{
									mx: 8,
								}}
							>
								to
							</Box>
							<TextField {...endProps} />
						</React.Fragment>
					)}
				/>
			</div>
		</LocalizationProvider>
	);
};

export default DateRangePicker;
