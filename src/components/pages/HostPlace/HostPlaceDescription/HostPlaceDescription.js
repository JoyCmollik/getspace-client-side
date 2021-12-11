import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';

const HostPlaceDescription = () => {
	const [hostPlaceDescription, setHostPlaceDescription] = useState('');

	return (
		<div className='h-screen grid grid-cols-2'>
			<div className='bg-brand flex justify-center items-center p-10'>
				<h1 className='text-5xl text-white font-semibold'>
					Now, let's describe your place
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col justify-between overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='overflow-y-auto py-5 scroll-hide'>
					<div className='flex flex-col space-y-4 w-8/12 mx-auto'>
						<div className='space-y-4'>
							<h4 className='text-2xl font-medium'>
								Create your description
							</h4>
							<textarea
								onChange={(e) =>
									setHostPlaceDescription(e.target.value)
								}
								className={`w-full h-64 border rounded-lg outline-none p-4 text-lg scroll-hide ${
									hostPlaceDescription.length > 500
										? 'text-red-900 border-red-400'
										: 'border-para'
								}`}
								style={{ resize: 'none' }}
							/>
							<p
								className={`text-base text-para font-bold ${
									hostPlaceDescription.length > 500 &&
									'text-red-900'
								}`}
							>
								{hostPlaceDescription.length}/500
							</p>
						</div>
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/price'>
						<button
							className={`${
								!hostPlaceDescription.length ||
								hostPlaceDescription.length > 500
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={
								hostPlaceDescription.length ? false : true
							}
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceDescription;
