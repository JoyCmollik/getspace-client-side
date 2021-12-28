import React from 'react';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import { Link } from 'react-router-dom';
import { hostPlaceAmenitiesData } from '../../../utilities/hostData';
import useHostProvider from '../../../../hooks/useHostProvider';

const HostPlaceAmenities = () => {
	const { placeAmenityList, handlePlaceAmenityList } = useHostProvider();
	const isEmpty =
		placeAmenityList.standoutAmenitiesList.length ||
		placeAmenityList.guestFavoritesAmenitiesList.length ||
		placeAmenityList.guestSafetyAmenitiesList.length;

	const AmenityContainer = ({ title, amenityArray, category }) => {
		return (
			<div className='space-y-4'>
				<h4 className='text-2xl font-medium'>{title}</h4>
				<div className='grid grid-cols-3 gap-4'>
					{amenityArray.map((amenity) => (
						<button
							key={amenity.id}
							onClick={() =>
								handlePlaceAmenityList(amenity.id, category)
							}
							className={`p-4 flex flex-col justify-center items-center space-y-2 text-center rounded-lg border hover:border-para h-40 ${
								placeAmenityList[category] &&
								placeAmenityList[category].includes(amenity.id)
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
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/pZRJ2Wy/10-Mindaro.png) center/cover`,
				}}
			>
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
								amenityArray={
									hostPlaceAmenitiesData.standoutAmenitiesList
								}
								category='standoutAmenitiesList'
							/>
							{/* Guest favorite amenities list */}
							<AmenityContainer
								title='What about these guest favorites?'
								amenityArray={
									hostPlaceAmenitiesData.guestFavoritesAmenitiesList
								}
								category='guestFavoritesAmenitiesList'
							/>
							{/* Guest safety amenities list */}
							<AmenityContainer
								title='Have any of these safety items?'
								amenityArray={
									hostPlaceAmenitiesData.guestSafetyAmenitiesList
								}
								category='guestSafetyAmenitiesList'
							/>
						</div>
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/images'>
						<button
							className={`${
								!isEmpty
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={!isEmpty}
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
