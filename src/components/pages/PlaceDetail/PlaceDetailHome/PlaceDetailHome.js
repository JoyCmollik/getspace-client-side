import React from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import PlaceDetailImages from '../PlaceDetailImages/PlaceDetailImages';
import PlaceDetailInformation from '../PlaceDetailInformation/PlaceDetailInformation';
import PlaceDetailReserve from '../PlaceDetailReserve/PlaceDetailReserve';
import PlaceDetailLocationMap from '../PlaceDetailLocationMap/PlaceDetailLocationMap';
import PlaceDetailRangePicker from '../PlaceDetailRangePicker/PlaceDetailRangePicker';
import PlaceDetailReviewsContainer from '../PlaceDetailReviews/PlaceDetailReviewsContainer';

const PlaceDetailHome = () => {
	return (
		<div className='min-h-screen flex-col justify-between'>
			<Header />
			<PlaceDetailImages />
			<div className='container mx-auto space-y-8'>
				{/* place detail and reserve */}
				<div className='grid grid-cols-12 gap-x-28 relative'>
					<div className='col-span-8 space-y-8'>
						<PlaceDetailInformation />
						<hr />
						<PlaceDetailRangePicker />
					</div>
					<div className='col-span-4'>
						<PlaceDetailReserve />
					</div>
				</div>
				<hr />
				<PlaceDetailReviewsContainer />
				<hr />
				<PlaceDetailLocationMap />
			</div>
			<Footer />
		</div>
	);
};

export default PlaceDetailHome;
