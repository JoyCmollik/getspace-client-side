import React from 'react';
import { FaTimes } from 'react-icons/fa';

const AdminDashboardPlaceCard = () => {
	return (
		<div>
			<div className='grid grid-cols-12 gap-2 bg-darklight rounded-lg '>
				<div className='col-span-4'>
					<img
						src='https://image.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg'
						alt=''
						srcset=''
						className='rounded-lg h-36  object-cover'
					/>
				</div>
				<div className='col-span-4'>
					<h1 className='text-2xl font-medium ml-6 '>Rose view</h1>
					<div className='flex items-center space-x-2 mt-14 '>
						{' '}
						<img
							src='https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
							alt=''
							srcset=''
							className='rounded-full h-6'
						/>
						<p>Hosted by Asfia </p>
					</div>
					<div className='ml-8'>Email@email.com</div>
				</div>
				<div className='col-span-4 p-2'>
					<div className=''>
						<button className=' btn-primary h-8 p-2 ml-28'>
							<FaTimes />
						</button>
						<div className='mt-12 ml-12'>
							<p className=''>Created At</p>
							<p>{new Date().toLocaleDateString()}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboardPlaceCard;
