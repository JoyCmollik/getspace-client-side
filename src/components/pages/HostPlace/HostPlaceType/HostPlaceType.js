import React from 'react';
import { Link } from 'react-router-dom';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import { hostPlaceCategoryData } from '../../../utilities/hostData';
import useHostProvider from '../../../../hooks/useHostProvider';

const HostPlaceType = () => {
	const { placeType, handlePlaceType } = useHostProvider();

	return (
		<div className='h-screen grid grid-cols-2'>
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/ZXv7C4w/01-Royal-Heath.png) center/cover`,
				}}
			>
				<h1 className='text-5xl text-white font-semibold'>
					Tell us about your place?
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col'>
				<HostPlaceHeader />
				{/* content */}
				<div className='flex-grow flex flex-col space-y-4 justify-center items-center'>
					{hostPlaceCategoryData.map(({ id, type, image }) => (
						<button
							key={id}
							onClick={() =>
								handlePlaceType(hostPlaceCategoryData[id])
							}
							className={`p-4 flex justify-between items-center w-8/12 rounded-lg border hover:border-para ${
								placeType && placeType.id === id
									? 'border-para'
									: 'border-gray-200'
							}`}
						>
							<h4 className='text-xl font-semibold'>{type}</h4>
							<img
								className='object-cover h-14 rounded-lg'
								src={image}
								alt='type'
							/>
						</button>
					))}
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/describe'>
						<button
							className={`${
								!placeType
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={placeType ? false : true}
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceType;
