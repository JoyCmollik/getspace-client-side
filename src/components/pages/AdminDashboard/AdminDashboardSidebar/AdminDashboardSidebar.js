import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardSidebar = () => {
	return (
		<div className='flex flex-col space-y-4 p-10'>
			<Link
				to='/dashboard/admin'
				className='border border-white rounded-lg text-center py-2 text-lg bg-black'
			>
				Profile
			</Link>
			<Link
				to='users'
				className='border border-white rounded-lg text-center py-2 text-lg bg-black'
			>
				Users
			</Link>
			<Link
				to='admins'
				className='border border-white rounded-lg text-center py-2 text-lg bg-black'
			>
				Admins
			</Link>
			<Link
				to='places'
				className='border border-white rounded-lg text-center py-2 text-lg bg-black'
			>
				Places
			</Link>
			<Link
				to='orders'
				className='border border-white rounded-lg text-center py-2 text-lg bg-black'
			>
				Orders
			</Link>
		</div>
	);
};

export default AdminDashboardSidebar;
