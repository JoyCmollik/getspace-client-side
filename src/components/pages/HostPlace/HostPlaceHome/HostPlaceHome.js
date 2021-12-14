import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

const hostData = [
	{
		id: 0,
		type: 'Apartment',
		image: 'https://images.unsplash.com/photo-1595524362625-fcbe45feafa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
			{
				id: 1,
				title: 'Condominium (Condo)',
				desc: 'A place within a multi-unit building or complex owned by the residents.',
			},
			{
				id: 2,
				title: 'Loft',
				desc: 'An open layout apartment or condo, which may have short interior walls',
			},
			{
				id: 3,
				title: 'Serviced apartment',
				desc: 'An apartment with hotel-like amenities serviced by a professional management company',
			},
			{
				id: 4,
				title: 'Casa particular',
				desc: 'A private room in a home that feels like a bed and breakfast in Cuba',
			},
			{
				id: 5,
				title: 'Vacation home',
				desc: 'A furnished rental property that includes a kitchen and bathroom and may offer some guest services, like a reception desk',
			},
		],
	},
	{
		id: 1,
		type: 'House',
		image: 'https://images.unsplash.com/photo-1630698388852-b8a06a8c560c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 2,
		type: 'Secondary unit',
		image: 'https://images.unsplash.com/photo-1515121124382-33ae0bf9417c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjB1bml0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 3,
		type: 'Unique space',
		image: 'https://images.unsplash.com/photo-1605127943669-7733ab15d636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dW5pcXVlJTIwcGxhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 4,
		type: 'Bed and breakfast',
		image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
	{
		id: 5,
		type: 'Boutique hotel',
		image: 'https://images.unsplash.com/photo-1563206100-c1495de14c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdXRpcXVlJTIwaG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		describe: [
			{
				id: 0,
				title: 'Rental unit',
				desc: 'A rented place within a multi-unit-residential building or complex.',
			},
		],
	},
];

const HostPlaceHome = () => {
	return (
		<>
			<Routes>
				<Route
					path='place'
					element={<HostPlaceType hostData={hostData} />}
				/>
				<Route
					path='describe'
					element={<HostPlaceDescribe hostData={hostData} />}
				/>
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
		</>
	);
};

export default HostPlaceHome;
