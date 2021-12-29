import React from 'react';
import { Route, Routes } from 'react-router';
import Footer from '../../../shared/Footer/Footer';
import Header from '../../../shared/Header/Header';
import Bookings from '../Bookings/Bookings';
import DashboardNav from '../DashboardNav/DashboardNav';
import MyBookings from '../MyBookings/MyBookings';
import MyPlaces from '../MyPlaces/MyPlaces';
import Profile from '../Profile/Profile';
import UserDashboardHome from '../UserDashboardHome/UserDashboardHome';

const UserDashboard = () => {
	return (
		<div>
			<Header />
			<DashboardNav />

			<div className='container mx-auto'>
				<Routes>
					<Route path='profile' element={<Profile />} />
					<Route path='bookings' element={<Bookings />} />
					<Route path='mybookings' element={<MyBookings />} />
					<Route path='places' element={<MyPlaces />} />
					<Route index element={<UserDashboardHome />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default UserDashboard;
