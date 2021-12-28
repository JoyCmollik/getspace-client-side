import React from 'react';
import AdminDashboardPlaceCard from './AdminDashboardPlaceCard';

const AdminDashboardPlaceList = () => {
	return (
		<div className='p-2'>
			<div className='grid grid-cols-2 gap-4 '>
				<AdminDashboardPlaceCard />
				<AdminDashboardPlaceCard />
				<AdminDashboardPlaceCard />
				<AdminDashboardPlaceCard />
				<AdminDashboardPlaceCard />
				<AdminDashboardPlaceCard />
			</div>
		</div>
	);
};

export default AdminDashboardPlaceList;
