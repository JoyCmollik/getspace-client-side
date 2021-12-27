import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';

const Searchbar = () => {
	return (
		<div className='-mt-16'>
			{/* search bar */}
			<form className='bg-transparent '>
				<div className='w-2/4 mx-auto mt-2 mb-2'>
					<div className=' grid grid-cols-10 rounded-lg shadow-md py-6 px-10 bg-light'>
						<div className='col-span-3'>
							<label
								htmlFor=''
								className=' text-gray-400 flex space-x-2 items-center'
							>
								<HiOutlineLocationMarker />{' '}
								<span>Location</span>
							</label>
							<input
								type='text'
								placeholder='Where are you going?'
								className=' focus:outline-none   bg-transparent flex-grow placeholder-black'
							/>
						</div>
						<div className='col-span-3'>
							<label
								htmlFor=''
								className='text-gray-400 flex space-x-2 items-center'
							>
								<MdDateRange /> <span>Date</span>
							</label>
							<input
								type='text'
								placeholder='Choose Date'
								className=' focus:outline-none     bg-transparent flex-grow placeholder-black'
							/>
						</div>
						<div className='col-span-3 '>
							<label
								htmlFor=''
								className='text-gray-400 flex space-x-2 items-center '
							>
								<BsPerson /> <span>Guests</span>
							</label>
							<input
								type='text'
								placeholder='Add Guest'
								className=' focus:outline-none  border-rounded bg-transparent flex-grow placeholder-black '
							/>
						</div>
						<button className='btn-primary flex justify-center items-center px-3 text-2xl border w-3/4 justify-self-end'>
							<FiSearch />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Searchbar;
