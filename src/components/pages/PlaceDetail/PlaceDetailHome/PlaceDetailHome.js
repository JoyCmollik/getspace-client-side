import React, { useState } from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import PlaceDetailImages from '../PlaceDetailImages/PlaceDetailImages';
import PlaceDetailInformation from '../PlaceDetailInformation/PlaceDetailInformation';
import PlaceDetailReserve from '../PlaceDetailReserve/PlaceDetailReserve';
import PlaceDetailLocationMap from '../PlaceDetailLocationMap/PlaceDetailLocationMap';
import PlaceDetailRangePicker from '../PlaceDetailRangePicker/PlaceDetailRangePicker';
import PlaceDetailReviewsContainer from '../PlaceDetailReviews/PlaceDetailReviewsContainer';
import PlaceDetailHostInfo from '../PlaceDetailHostInfo/PlaceDetailHostInfo';
import PlaceDetailThingsToKnow from '../PlaceDetailThingsToKnow/PlaceDetailThingsToKnow';
import { useParams } from 'react-router-dom';

const PlaceDetailHome = () => {
	const { id } = useParams();
	console.log(id);
	const [dateRange, setDateRange] = useState([null, null]);

	const handleClearDates = () => {
		setDateRange([null, null]);
	};

	const getDiffInNights = (date1, date2) => {
		const diffInMs = Math.abs(date2 - date1);
		const nights = diffInMs / (1000 * 60 * 60 * 24);

		return nights;
	};

	return (
		<div className='min-h-screen flex-col justify-between'>
			<Header />
			<PlaceDetailImages />
			<div className='container mx-auto space-y-8 pb-10'>
				{/* place detail and reserve */}
				<div className='grid grid-cols-12 gap-x-28 relative'>
					<div className='col-span-8 space-y-8'>
						<PlaceDetailInformation />
						<hr />
						<PlaceDetailRangePicker
							dateRange={dateRange}
							setDateRange={setDateRange}
							handleClearDates={handleClearDates}
							getDiffInNights={getDiffInNights}
						/>
					</div>
					<div className='col-span-4'>
						<PlaceDetailReserve
							dateRange={dateRange}
							setDateRange={setDateRange}
							handleClearDates={handleClearDates}
							getDiffInNights={getDiffInNights}
						/>
					</div>
				</div>
				<hr />
				<PlaceDetailReviewsContainer />
				<hr />
				<PlaceDetailLocationMap />
				<hr />
				<div className='grid grid-cols-2 gap-x-20'>
					<PlaceDetailHostInfo />
					<PlaceDetailThingsToKnow />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PlaceDetailHome;
