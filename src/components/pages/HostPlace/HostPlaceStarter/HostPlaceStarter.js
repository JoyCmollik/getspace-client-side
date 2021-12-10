import React from 'react';
import PrimaryBtn from '../../../shared/PrimaryBtn/PrimaryBtn';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';

const HostPlaceStarter = () => {
	return (
		<div className='h-screen grid grid-cols-2'>
			<div className='bg-para p-10'></div>
			<div className='bg-dark p-10 flex flex-col'>
				<HostPlaceHeader mode='dark' />
				<div className='flex-grow flex flex-col space-y-4 justify-center items-center'>
					<h1 className='text-5xl text-white font-semibold'>
						Host your place in simple steps
					</h1>
					<p className='text-para text-xl'>
						Provide us with information so that we can make your
						place stand out!
					</p>
				</div>
				<div className='border-t border-para py-4 flex justify-end'>
					<PrimaryBtn text="Let's go!" />
				</div>
			</div>
		</div>
	);
};

export default HostPlaceStarter;
