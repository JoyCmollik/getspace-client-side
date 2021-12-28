import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HostPlaceProvider from '../../../../contexts/HostPlaceProvider';
import HostPlaceAmenities from '../HostPlaceAmenities/HostPlaceAmenities';
import HostPlaceDescribe from '../HostPlaceDescribe/HostPlaceDescribe';
import HostPlaceDescription from '../HostPlaceDescription/HostPlaceDescription';
import HostPlaceGuestCount from '../HostPlaceGuestCount/HostPlaceGuestCount';
import HostPlaceImages from '../HostPlaceImages/HostPlaceImages';
import HostPlacePrice from '../HostPlacePrice/HostPlacePrice';
import HostPlaceReviewPost from '../HostPlaceReviewPost/HostPlaceReviewPost';
import HostPlaceSpaceInfo from '../HostPlaceSpaceInfo/HostPlaceSpaceInfo';
import HostPlaceStarter from '../HostPlaceStarter/HostPlaceStarter';
import HostPlaceTitle from '../HostPlaceTitle/HostPlaceTitle';
import HostPlaceType from '../HostPlaceType/HostPlaceType';

const HostPlaceHome = () => {
	return (
		<HostPlaceProvider>
			<Routes>
				<Route path='place' element={<HostPlaceType />} />
				<Route path='describe' element={<HostPlaceDescribe />} />
				<Route path='info' element={<HostPlaceSpaceInfo />} />
				<Route path='count' element={<HostPlaceGuestCount />} />
				<Route path='amenities' element={<HostPlaceAmenities />} />
				<Route path='images' element={<HostPlaceImages />} />
				<Route path='title' element={<HostPlaceTitle />} />
				<Route path='description' element={<HostPlaceDescription />} />
				<Route path='price' element={<HostPlacePrice />} />
				<Route path='review' element={<HostPlaceReviewPost />} />
				<Route index element={<HostPlaceStarter />} />
			</Routes>
		</HostPlaceProvider>
	);
};

export default HostPlaceHome;
