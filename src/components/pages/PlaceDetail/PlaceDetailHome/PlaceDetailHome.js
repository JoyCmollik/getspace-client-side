import React, { useEffect, useState } from 'react';
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
import useAxios from '../../../../hooks/useAxios';

const PlaceDetailHome = () => {
	const { _id } = useParams();
	const [place, setPlace] = useState(null);
	const [dateRange, setDateRange] = useState([null, null]);
	const { client } = useAxios();

	useEffect(() => {
		client
			.get(`place/${_id}`)
			.then((response) => {
				setPlace(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
			{place && (
				<PlaceDetailImages placeImageList={place.placeImageList} />
			)}
			<div className='container mx-auto space-y-8 pb-10'>
				{/* place detail and reserve */}
				<div className='grid grid-cols-12 gap-x-28 relative'>
					<div className='col-span-8 space-y-8'>
						{place && <PlaceDetailInformation place={place} />}
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
					{place && <PlaceDetailHostInfo host={place.host} />}
					<PlaceDetailThingsToKnow />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PlaceDetailHome;
