import React from 'react';
import SingleUsersInfo from './SingleUsersInfo';

const AdminDashboardUsers = () => {
	return (
		<div className='container p-8'>
			<h4 className='text-base font-bold py-5'>Users List</h4>
			<SingleUsersInfo></SingleUsersInfo>
			<br />
			<SingleUsersInfo></SingleUsersInfo>
			<br />
			<SingleUsersInfo></SingleUsersInfo>
			<br />
		</div>
	);
};

export default AdminDashboardUsers;
