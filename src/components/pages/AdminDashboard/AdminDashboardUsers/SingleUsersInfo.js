import React from 'react';

const SingleUsersInfo = () => {
	return (
		<div className='container bg-darklight px-8 py-5 flex items-center'>
			<div>
				<h2 className='text-sm pb-3'>3:30 PM</h2>
				<h5 className='text-xs text-gray-400'>3.10.2021</h5>
			</div>
			<div className='flex px-16 items-center'>
				<div>
					<img
						className='rounded-full h-24 w-24'
						src='https://i.ibb.co/q7J67Gp/irene-strong-v2a-Knj-Mb-P-k-unsplash.jpg'
						alt=''
					/>
				</div>
				<div className='px-5'>
					<h2 className='text-sm pb-3'>Adam Smith</h2>
					<p className='text-xs font-thin text-gray-400'>
						adamsmith@gmail.com
					</p>
				</div>
			</div>
			<div className='px-16 items-center'>
				<h2 className='text-sm pb-3'>Role</h2>
				<h5 className='text-xs text-gray-400'>User/Host</h5>
			</div>
			<div className=' pl-10 items-center'>
				<h2 className='text-sm pb-3'>Total Hosing Places</h2>
				<h5 className='text-xs text-gray-400'>2</h5>
			</div>
		</div>
	);
};

export default SingleUsersInfo;
