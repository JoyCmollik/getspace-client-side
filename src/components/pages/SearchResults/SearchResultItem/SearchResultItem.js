import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SearchResultItem = (props) => {
	const {
		_id,
		placeImageList,
		placePrice,
		placeGuestCount,
		placeTitle,
		placeDesc,
	} = props.place;
	return (
		<div className='grid grid-cols-3 gap-4 overflow-hidden box-shadow border rounded-lg'>
			<div>
				<img
					className='p-1 rounded-lg lg:h-50 w-full md:h-40 object-cover'
					src={placeImageList[0]}
					alt=''
				/>
			</div>
			<div className='col-span-2 flex justify-between items-start p-4'>
				<div>
					<div className='flex'>
						<i className='text-green-400'>
							<AiFillStar />
						</i>
						<p className='text-xs'>
							4.91 <span className='text-gray-400'>(147)</span>
						</p>
					</div>

					<div>
						<h2 className='text-base font-semibold '>
							{placeTitle}
						</h2>
						<p className='text-sm text-gray-500 font-medium'>
							{placeDesc.desc}
						</p>
					</div>
					<br />
					<br />

					<div className='flex text-gray-400 gap-6 text-xs'>
						<p>{placeGuestCount.guests} guests</p>
						<p>{placeGuestCount.beds} beds</p>
						<p>{placeGuestCount.bedrooms} bedrooms</p>
						<p>{placeGuestCount.bathrooms} bathrooms</p>
					</div>
				</div>
				<div className='h-full flex flex-col justify-between items-end'>
					<div>
						<h2 className='text-red-500 text-lg font-semibold'>
							{placePrice.priceType}
							{placePrice.price}
						</h2>
						<p className='text-gray-400 text-xs'>per night</p>
					</div>
					<Link to={`/place/${_id}`}>
						<button className='px-5 py-2 btn-primary'>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchResultItem;
