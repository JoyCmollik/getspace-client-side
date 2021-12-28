import React from 'react';

const SingleOrderTable = () => {
	return (
		<div className='container bg-darklight flex p-4'>
			<div className=''>
				<h4>Client</h4>
			</div>
			<div className=' px-12'>
				<h4>Guest Info</h4>
			</div>
			<div className=' px-8'>
				<h4>Place</h4>
			</div>
			<div className=' px-8'>
				<h4>Check in</h4>
			</div>
			<div className=' px-8'>
				<h4>Check out</h4>
			</div>
			<div className=' px-8'>
				<h4>Total Price</h4>
			</div>
			<div className=' px-8'>
				<h4>Status</h4>
			</div>
		</div>
	);
};

export default SingleOrderTable;
