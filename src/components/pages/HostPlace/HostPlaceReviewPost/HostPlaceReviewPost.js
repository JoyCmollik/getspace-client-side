import React from 'react';
import { Avatar } from '@mui/material';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import { useNavigate } from 'react-router-dom';
import useHostProvider from '../../../../hooks/useHostProvider';
import useFirebase from '../../../../hooks/useFirebase';
import { getAmenities } from '../../../utilities/hostData';

const HostPlaceReviewPost = () => {
	const { hostPlace, placeImageFiles, handlePlaceStore } = useHostProvider();
	const { user } = useFirebase();
	const amenitiesList = getAmenities(hostPlace.placeAmenityList);
	const navigate = useNavigate();

	// making the first image viewable
	Object.assign(placeImageFiles[0], {
		preview: URL.createObjectURL(placeImageFiles[0]),
	});
	return (
		<div className='h-screen grid grid-cols-2'>
			{/* first column */}
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/gDpMwvN/17-Dark-Salmon.png) center/cover`,
				}}
			>
				<h1 className='text-5xl text-white font-semibold'>
					Check out your listing!
				</h1>
			</div>
			{/* second column */}
			<div className='bg-white p-10 flex flex-col justify-between overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='my-5 overflow-y-auto scroll-hide flex flex-col space-y-4 w-8/12 mx-auto border rounded-lg box-shadow'>
					{/* review card */}
					<article className='flex flex-col space-y-4'>
						<img
							className='object-cover w-full h-64 rounded-t-lg'
							src={placeImageFiles[0].preview}
							alt='pics'
						/>
						<div className='p-4 space-y-4'>
							<h2 className='text-xl font-semibold'>
								{hostPlace.placeTitle}
							</h2>
							<hr />
							<div className='flex justify-between items-center'>
								<h4 className='text-lg font-medium w-8/12'>
									{hostPlace.placeDesc.desc}
								</h4>
								<Avatar src={user?.photoURL} />
							</div>
							<hr />
							<p className='flex items-center space-x-1'>
								<span>
									{hostPlace.placeGuestCount.guests} guests
								</span>
								<span className='p-0.5 rounded-full bg-para ring-1' />
								<span>Studio</span>
								<span className='p-0.5 rounded-full bg-para ring-1' />
								<span>
									{hostPlace.placeGuestCount.beds} bed
								</span>
								<span className='p-0.5 rounded-full bg-para ring-1' />
								<span>
									{hostPlace.placeGuestCount.bathrooms} bath
								</span>
							</p>
							<hr />
							<p className='leading-tight'>
								{hostPlace.placeDescription}
							</p>
							<hr />
							{/* Amenities */}
							<div className='space-y-4'>
								<h4 className='text-xl font-medium'>
									Amenities
								</h4>
								<div className='grid grid-cols-2 gap-x-8'>
									{amenitiesList.map((amenity) => (
										<div
											key={amenity.id}
											className='py-2 flex justify-between items-center border-b'
										>
											<p className='text-base leading-none'>
												{amenity.text}
											</p>
											<div className='text-xl'>
												{amenity.iconCode ? (
													<lord-icon
														src={`https://cdn.lordicon.com/${amenity.iconCode}.json`}
														trigger='hover'
														colors='primary:#121331,secondary:#FF385C'
														style={{
															width: 40,
															height: 40,
														}}
													/>
												) : (
													<img
														src={amenity.icon}
														alt='icon'
														style={{
															width: 40,
															height: 40,
														}}
													/>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</article>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<button
						onClick={() => handlePlaceStore(navigate)}
						className='bg-brand text-white font-semibold px-5 py-2 rounded-3xl'
					>
						Save your listing
					</button>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceReviewPost;
