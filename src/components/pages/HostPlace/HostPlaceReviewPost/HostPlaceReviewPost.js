import { Avatar } from '@mui/material';
import React from 'react';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import firepit from '../../../../images/icons/fire-pit.svg';
import poolball from '../../../../images/icons/pool-ball.svg';
import indoorFirebase from '../../../../images/icons/indoor-firebase.svg';
import dine from '../../../../images/icons/dine.svg';

const standoutAmenitiesList = [
	{
		id: 0,
		text: 'Pool',
		iconCode: 'jlpgasyu',
	},
	{ id: 1, text: 'Hot tub', iconCode: 'wfroncyf' },
	{ id: 2, text: 'BBQ grill', iconCode: 'coqbeapw' },
	{
		id: 3,
		text: 'Fire pit',
		icon: firepit,
	},
	{ id: 4, text: 'Pool table', icon: poolball },
	{ id: 5, text: 'Indoor fireplace', icon: indoorFirebase },
	{ id: 6, text: 'Outdoor dining area', icon: dine },
	{ id: 7, text: 'Exercise equipment', iconCode: 'ouvpilty' },
];

const HostPlaceReviewPost = () => {
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
							src='https://images.unsplash.com/photo-1586782023764-6774bd4df3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdXRpcXVlJTIwaG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
							alt='pics'
						/>
						<div className='p-4 space-y-4'>
							<h2 className='text-xl font-semibold'>Cheerful</h2>
							<hr />
							<div className='flex justify-between items-center'>
								<h4 className='text-lg font-medium w-8/12'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Maiores, esse!
								</h4>
								<Avatar />
							</div>
							<hr />
							<p className='flex items-center space-x-1'>
								<span>15 guests</span>
								<span className='p-0.5 rounded-full bg-para ring-1' />
								<span>Studio</span>
								<span className='p-0.5 rounded-full bg-para ring-1' />
								<span>1 bed</span>
								<span className='p-0.5 rounded-full bg-para ring-1' />
								<span>1 bath</span>
							</p>
							<hr />
							<p className='leading-tight'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Repudiandae voluptatem quod,
								accusamus voluptatum rem cumque. Delectus,
								voluptatum exercitationem ad mollitia repellat
								perspiciatis numquam eveniet enim error sapiente
								quo esse beatae eos et provident veritatis amet
								aliquid perferendis, sunt laboriosam inventore
								harum pariatur quibusdam! Cumque, quidem
								dignissimos dolor sapiente deserunt
								reprehenderit.
							</p>
							<hr />
							{/* Amenities */}
							<div className='space-y-4'>
								<h4 className='text-xl font-medium'>
									Amenities
								</h4>
								<div className='grid grid-cols-2 gap-x-8'>
									{standoutAmenitiesList.map((amenity) => (
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
					<button className='bg-brand text-white font-semibold px-5 py-2 rounded-3xl'>
						Save your listing
					</button>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceReviewPost;
