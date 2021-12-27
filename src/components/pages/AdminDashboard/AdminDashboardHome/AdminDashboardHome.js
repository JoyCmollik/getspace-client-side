import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashboardSidebar';
import AdminDashboardAdminsList from '../AdminDashboardAdminsList/AdminDashboardAdminsList';
import AdminDashboardOrderList from '../AdminDashboardOrderList/AdminDashboardOrderList';
import AdminDashboardPlaceList from '../AdminDashboardPlaceList/AdminDashboardPlaceList';
import AdminDashboardProfile from '../AdminDashboardProfile/AdminDashboardProfile';
import AdminDashboardUsers from '../AdminDashboardUsers/AdminDashboardUsers';

const AdminDashboardHome = () => {
	return (
		<div className='grid grid-cols-12 h-screen'>
			<div className='col-span-3 bg-pink-400'>
				<AdminDashboardSidebar />
			</div>
			<div className='col-span-9 bg-blue-400'>
				<Routes>
					<Route path='profile' element={<AdminDashboardProfile />} />
					<Route path='users' element={<AdminDashboardUsers />} />
					<Route
						path='admins'
						element={<AdminDashboardAdminsList />}
					/>
					<Route
						path='places'
						element={<AdminDashboardPlaceList />}
					/>
					<Route
						path='orders'
						element={<AdminDashboardOrderList />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default AdminDashboardHome;
