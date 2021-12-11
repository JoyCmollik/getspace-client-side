import React, { useState } from 'react';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import { FaSwimmingPool } from 'react-icons/fa';
import firepit from '../../../../images/icons/fire-pit.svg';
import poolball from '../../../../images/icons/pool-ball.svg';
import indoorFirebase from '../../../../images/icons/indoor-firebase.svg';
import dine from '../../../../images/icons/dine.svg';
import { Link } from 'react-router-dom';

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

const guestFavoritesAmenitiesList = [
	{ id: 8, text: 'Wifi', icon: <FaSwimmingPool /> },
	{ id: 9, text: 'TV', icon: <FaSwimmingPool /> },
	{ id: 10, text: 'Kitchen', icon: <FaSwimmingPool /> },
	{ id: 11, text: 'Washer', icon: <FaSwimmingPool /> },
	{ id: 12, text: 'Free parking on premises', icon: <FaSwimmingPool /> },
	{ id: 13, text: 'Paid parking on premises', icon: <FaSwimmingPool /> },
	{ id: 14, text: 'Air conditioning', icon: <FaSwimmingPool /> },
	{ id: 15, text: 'Dedicated workspace', icon: <FaSwimmingPool /> },
	{ id: 16, text: 'Outdoor shower', icon: <FaSwimmingPool /> },
];

const guestSafetyAmenitiesList = [
	{ id: 17, text: 'Smoke alarm', icon: <FaSwimmingPool /> },
	{ id: 18, text: 'First aid kit', icon: <FaSwimmingPool /> },
	{ id: 19, text: 'Carbon monoxide alarm', icon: <FaSwimmingPool /> },
	{ id: 20, text: 'Fire extinguisher', icon: <FaSwimmingPool /> },
];

const HostPlaceAmenities = () => {
	const [amenityList, setAmenityList] = useState([0, 1, 2, 3]);

	const handleAmenityList = (id) => {
		setAmenityList((prevAmenityList) => {
			let newAmenityList = [];
			if (prevAmenityList.includes(id)) {
				newAmenityList = prevAmenityList.filter(
					(existingId) => id !== existingId
				);
			} else {
				newAmenityList = [...prevAmenityList, id];
			}
			return newAmenityList;
		});
	};

	const AmenityContainer = ({ title, amenityArray }) => {
		return (
			<div className='space-y-4'>
				<h4 className='text-2xl font-medium'>{title}</h4>
				<div className='grid grid-cols-3 gap-4'>
					{amenityArray.map((amenity) => (
						<button
							key={amenity.id}
							onClick={() => handleAmenityList(amenity.id)}
							className={`p-4 flex flex-col justify-center items-center space-y-2 text-center rounded-lg border hover:border-para h-40 ${
								amenityList && amenityList.includes(amenity.id)
									? 'border-para'
									: 'border-gray-200'
							}`}
						>
							<p className='text-4xl'>
								{amenity.iconCode ? (
									<lord-icon
										src={`https://cdn.lordicon.com/${amenity.iconCode}.json`}
										trigger='hover'
										colors='primary:#121331,secondary:#FF385C'
										style={{
											width: 54,
											height: 54,
										}}
									/>
								) : (
									<img
										src={amenity.icon}
										alt='icon'
										style={{ width: 54, height: 54 }}
									/>
								)}
							</p>
							<h4 className='text-lg leading-none'>
								{amenity.text}
							</h4>
						</button>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className='h-screen grid grid-cols-2'>
			<div className='bg-brand flex justify-center items-center p-10'>
				<h1 className='text-5xl text-white font-semibold'>
					Let guests know what your place has to offer?
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col justify-between overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='overflow-y-auto py-5 scroll-hide'>
					<div className='flex flex-col space-y-4 w-8/12 mx-auto'>
						<div className='space-y-8'>
							{/* Standout amenities */}
							<AmenityContainer
								title='Do you have any standout amenities?'
								amenityArray={standoutAmenitiesList}
							/>
							{/* Guest favorite amenities list */}
							<AmenityContainer
								title='What about these guest favorites?'
								amenityArray={guestFavoritesAmenitiesList}
							/>
							{/* Guest safety amenities list */}
							<AmenityContainer
								title='Have any of these safety items?'
								amenityArray={guestSafetyAmenitiesList}
							/>
						</div>
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/images'>
						<button
							className={`${
								!amenityList.length
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={amenityList.length ? false : true}
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceAmenities;
