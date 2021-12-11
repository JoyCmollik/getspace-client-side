import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Header from '../../../shared/Header/Header';
import DashboardNav from '../DashboardNav/DashboardNav';
import UserDashboardHome from '../UserDashboardHome/UserDashboardHome';

const UserDashboard = () => {
	return (
		<div>
			<Header />
			<DashboardNav />
			<UserDashboardHome />
			<Footer />
		</div>
	);
};

export default UserDashboard;
