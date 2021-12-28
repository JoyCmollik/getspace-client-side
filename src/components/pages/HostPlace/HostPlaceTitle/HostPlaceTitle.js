import React from 'react';
import { Link } from 'react-router-dom';
import useHostProvider from '../../../../hooks/useHostProvider';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';

const HostPlaceTitle = () => {
	const { placeTitle, setPlaceTitle } = useHostProvider();

	return (
		<div className='h-screen grid grid-cols-2'>
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/G3nN9TH/16-Medium-Purple.png) center/cover`,
				}}
			>
				<h1 className='text-5xl text-white font-semibold'>
					Let's give your place a name
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col justify-between overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='overflow-y-auto py-5 scroll-hide'>
					<div className='flex flex-col space-y-4 w-8/12 mx-auto'>
						<div className='space-y-4'>
							<h4 className='text-2xl font-medium'>
								Create your title
							</h4>
							<textarea
								onChange={(e) => setPlaceTitle(e.target.value)}
								className={`w-full h-40 border rounded-lg outline-none p-4 text-xl ${
									placeTitle.length > 50
										? 'text-red-900 border-red-400'
										: 'border-para'
								}`}
								style={{ resize: 'none' }}
							/>
							<p
								className={`text-base text-para font-bold ${
									placeTitle.length > 50 && 'text-red-900'
								}`}
							>
								{placeTitle.length}/50
							</p>
						</div>
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/description'>
						<button
							className={`${
								!placeTitle.length || placeTitle.length > 50
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={placeTitle.length ? false : true}
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceTitle;
