import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const AdminDashboardSidebar = () => {
	return (
		<div className='flex flex-col space-y-4 p-10'>
			<Link to='profile'>profile</Link>
			<Link to='users'>users</Link>
			<Link to='admins'>admins</Link>
			<Link to='places'>places</Link>
			<Link to='orders'>orders</Link>
		</div>
	);
};

export default AdminDashboardSidebar;
