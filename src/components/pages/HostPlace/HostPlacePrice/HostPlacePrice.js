import React, { useState } from 'react';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import { BsPlus, BsDash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HostPlacePrice = () => {
	const [hostPlacePrice, setHostPlacePrice] = useState({
		priceType: '$',
		price: 45,
	});

	const handleHostPlacePrice = (operation) => {
		setHostPlacePrice((prevPrice) => {
			const currPrice = Number(prevPrice.price);
			if (operation === 'increase')
				return { ...prevPrice, price: currPrice + 1 };
			return { ...prevPrice, price: currPrice - 1 };
		});
	};

	return (
		<div className='h-screen grid grid-cols-2'>
			<div className='bg-brand flex justify-center items-center p-10'>
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
							onClick={() => handleHostPlacePrice('decrease')}
							className={`p-1 rounded-full border text-4xl ${
								hostPlacePrice.price < 1
									? 'border-gray-200 text-gray-200'
									: 'border-para text-para'
							}`}
							disabled={hostPlacePrice.price <= 0}
						>
							<BsDash />
						</button>
						<input
							className='outline-none p-1 text-5xl text-center border border-para rounded-lg'
							type='text'
							value={'$' + hostPlacePrice.price}
							onChange={(e) =>
								setHostPlacePrice({
									...hostPlacePrice,
									price: Number(e.target.value.slice(1)),
								})
							}
						/>
						<button
							onClick={() => handleHostPlacePrice('increase')}
							className={`p-1 rounded-full border text-4xl ${
								hostPlacePrice.price >= 1000
									? 'border-gray-200 text-gray-200'
									: 'border-para text-para'
							}`}
							disabled={hostPlacePrice.price >= 1000}
						>
							<BsPlus />
						</button>
					</div>
					<p>per night</p>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/review'>
						<button
							className={`${
								hostPlacePrice.price < 1 ||
								hostPlacePrice.price > 1000
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={
								hostPlacePrice.price > 0 &&
								hostPlacePrice.price < 1000
									? false
									: true
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

export default HostPlacePrice;
