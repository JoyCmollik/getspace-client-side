import React from 'react';
import Login from '../Login/Login';

const AuthenticationHome = () => {
	return (
		<div
			className='h-screen text-white flex justify-center items-center'
			style={{ background: '#161616' }}
		>
			<div className='space-y-10'>
				{/* title */}
				<div className='text-center space-y-4'>
					<h2 className='text-5xl font-bold'>
						Login to Your Account
					</h2>
					<p className='text-2xl text-para font-medium w-10/12 mx-auto'>
						Choose from more than 1000+ places with new posts being
						published every split of seconds
					</p>
				</div>
				{/* content */}
				<div className=''>
					<Login />
				</div>
			</div>
		</div>
	);
};

export default AuthenticationHome;
