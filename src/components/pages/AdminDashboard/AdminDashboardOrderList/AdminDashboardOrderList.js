import React from 'react';
import SingleOrderInfo from './SingleOrderInfo';
import SingleOrderTable from './SingleOrderTable';

const AdminDashboardOrderList = () => {
	return (
		<div className='container p-8 '>
			<h4 className='text-base font-bold py-6'>Total Orders</h4>
			<SingleOrderTable></SingleOrderTable>
			<hr></hr>
			<SingleOrderInfo></SingleOrderInfo>
			<hr></hr>
			<SingleOrderInfo></SingleOrderInfo>
			<hr></hr>
			<SingleOrderInfo></SingleOrderInfo>
			<hr></hr>
		</div>
	);
};

export default AdminDashboardOrderList;
