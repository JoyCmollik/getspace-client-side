import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import MyPlacesRows from './MyPlacesRows';

const MyPlaces = () => {
	return (
		<div className='container mx-auto py-10'>
			<h2 className='font-medium text-4xl'>Places</h2>
			<br />
			<br />
			<div className='flex justify-between'>
				<div className='w-3/12 flex text-lg outline-none border-0 gap-8'>
					<select
						name='pets'
						className='w-full border-b-2 text-xl border-gray-900 '
						id='pet-select'
					>
						<option value=''>All Cities </option>
						<option value='dog'>Bordeaux</option>
						<option value='cat'>Lyon</option>
						<option value='hamster'>Marseille</option>
						<option value='parrot'>Nice</option>
						<option value='spider'>Paris</option>
					</select>

					<select
						name='pets'
						className='w-full border-b-2 text-xl border-gray-900'
						id='pet-select'
					>
						<option value=''>All Categories</option>
						<option value='dog'>Eat & Drink</option>
						<option value='cat'>Festival</option>
						<option value='hamster'>See & Do</option>
						<option value='parrot'>Shopping</option>
						<option value='spider'>Stay</option>
					</select>
				</div>
				<div className='flex'>
					<div className=' inline border-b-2 border-gray-900 '>
						<i className='text-2xl'>
							<VscSearch />
						</i>
					</div>
					<div>
						<input
							type='search'
							className='form-control text-xl p-1 border-b-2 border-gray-900 w-full outline-none'
							id='inputNumber'
							placeholder='Search'
						/>
					</div>
				</div>
			</div>

			<div>
				<div className='pt-10 text-gray-600 '>
					<thead className='h-16 p-4 grid grid-rows-3 grid-flow-col gap-4 text-xl  border-2 border-gray-200'>
						<tr className='flex justify-around'>
							<th>ID</th>
							<th>THUMB</th>
							<th>PLACE NAME</th>
							<th>CITY</th>
							<th>CATEGORY</th>
							<th>FEATURED</th>
							<th>STATUS</th>
							<th>ACTION</th>
						</tr>
					</thead>
				</div>
			</div>
			<MyPlacesRows />
			<MyPlacesRows />
			<MyPlacesRows />
			<MyPlacesRows />
		</div>
	);
};

export default MyPlaces;
