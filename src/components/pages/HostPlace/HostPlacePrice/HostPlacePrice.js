import React from 'react';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import { BsPlus, BsDash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useHostProvider from '../../../../hooks/useHostProvider';

const HostPlacePrice = () => {
	const { placePrice, setPlacePrice, handlePlacePrice, handlePlaceObject } =
		useHostProvider();
	const navigate = useNavigate();

	return (
		<div className='h-screen grid grid-cols-2'>
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/G3nN9TH/16-Medium-Purple.png) center/cover`,
				}}
			>
				<h1 className='text-5xl text-white font-semibold'>
					Now for the fun part ---- set your price
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col justify-between overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='overflow-y-auto py-5 scroll-hide flex flex-col space-y-4 justify-center items-center'>
					<div className='flex justify-center items-center space-x-4 w-8/12'>
						<button
							onClick={() => handlePlacePrice('decrease')}
							className={`p-1 rounded-full border text-4xl ${
								placePrice.price < 1
									? 'border-gray-200 text-gray-200'
									: 'border-para text-para'
							}`}
							disabled={placePrice.price <= 0}
						>
							<BsDash />
						</button>
						<input
							className='outline-none p-1 text-5xl text-center border border-para rounded-lg'
							type='text'
							value={'$' + placePrice.price}
							onChange={(e) =>
								setPlacePrice({
									...placePrice,
									price: Number(e.target.value.slice(1)),
								})
							}
						/>
						<button
							onClick={() => handlePlacePrice('increase')}
							className={`p-1 rounded-full border text-4xl ${
								placePrice.price >= 1000
									? 'border-gray-200 text-gray-200'
									: 'border-para text-para'
							}`}
							disabled={placePrice.price >= 1000}
						>
							<BsPlus />
						</button>
					</div>
					<p>per night</p>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<button
						onClick={() => handlePlaceObject(navigate)}
						className={`${
							placePrice.price < 1 || placePrice.price > 1000
								? 'bg-gray-400 text-black'
								: 'bg-brand text-white'
						} font-semibold px-5 py-2 rounded-3xl`}
						disabled={
							placePrice.price > 0 && placePrice.price < 1000
								? false
								: true
						}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default HostPlacePrice;
