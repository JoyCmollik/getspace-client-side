import React from 'react';

import { MdApartment } from 'react-icons/md';
import {
	BsFillCalendar2CheckFill,
	BsFillPersonCheckFill,
} from 'react-icons/bs';

const UserDashboardHome = () => {
	return (
		<div>
			<p className='text-4xl font-semibold text-gray-800 mt-8 mb-8 text-center'>
				Welcome back! Host
			</p>
			<div className='grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3 m-6'>
				<div
					className='relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out'
					style={{
						backgroundImage:
							'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o")',
					}}
				>
					<div className='absolute inset-0 bg-green-500 bg-opacity-75 transition duration-300 ease-in-out' />
					<div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center'>
						<div>
							<div className='text-white text-lg flex space-x-2 items-center'>
								<div className='bg-white rounded-md p-2 flex items-center'>
									<MdApartment className='text-gray-800' />
								</div>
								<p>Active Places</p>
							</div>
							<h3 className='text-white text-3xl mt-2 font-bold mb-6'>
								12
							</h3>
						</div>
					</div>
				</div>
				<div
					className='relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out'
					style={{
						backgroundImage:
							'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o")',
					}}
				>
					<div className='absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out' />
					<div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center'>
						<div>
							<div className='text-white text-lg flex space-x-2 items-center'>
								<div className='bg-white rounded-md p-2 flex items-center'>
									<BsFillCalendar2CheckFill className='text-gray-800' />
								</div>
								<p>Bookings Made</p>
							</div>
							<h3 className='text-white text-3xl mt-2 font-bold'>
								65
							</h3>
							<h3 className='text-white text-lg mt-2 text-yellow-100 '>
								4 not confirmed
							</h3>
						</div>
					</div>
				</div>
				<div
					className='relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out'
					style={{
						backgroundImage:
							'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o")',
					}}
				>
					<div className='absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out' />
					<div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center'>
						<div>
							<div className='text-white text-lg flex space-x-2 items-center'>
								<div className='bg-white rounded-md p-2 flex items-center'>
									<BsFillPersonCheckFill className='text-gray-800' />
								</div>
								<p>New Reviews</p>
							</div>
							<h3 className='text-white text-3xl mt-2 font-bold'>
								53
							</h3>
							<h3 className='text-white text-lg mt-2 '>
								3.4%{' '}
								<span className='font-semibold text-blue-200'>
									vs last month
								</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div>
				<img
					className='mx-auto'
					src='https://image.freepik.com/free-vector/dashboard-concept-illustration_114360-4351.jpg'
					alt=''
					srcset=''
				/>
			</div>
		</div>
	);
};

export default UserDashboardHome;
