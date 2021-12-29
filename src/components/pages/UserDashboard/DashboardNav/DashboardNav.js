import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardNav = () => {
	return (
		<div>
			<nav className='bg-gray-600'>
				<div className='container mx-auto'>
					<div className='relative flex items-center justify-between h-16'>
						<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
							<div className='hidden sm:block sm:ml-6'>
								<div className='flex space-x-4'>
									<NavLink
										to='/dashboard/user'
										className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
										aria-current='page'
									>
										Dashboard
									</NavLink>
									<NavLink
										to='/dashboard/user/profile'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										Profile
									</NavLink>
									<NavLink
										to='/dashboard/user/places'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										My Places
									</NavLink>
									<NavLink
										to='/dashboard/user/bookings'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										Bookings
									</NavLink>
									<NavLink
										to='/dashboard/user/mybookings'
										className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										My Bookings
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='sm:hidden' id='mobile-menu'>
					<div className='px-2 pt-2 pb-3 space-y-1'>
						<NavLink
							to=''
							className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
							aria-current='page'
						>
							Dashboard
						</NavLink>
						<NavLink
							to=''
							className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
						>
							Profile
						</NavLink>
						<NavLink
							to=''
							className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
						>
							My Places
						</NavLink>
						<NavLink
							to=''
							className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
						>
							Bookings
						</NavLink>
						<NavLink
							to=''
							className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
						>
							My Bookings
						</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default DashboardNav;
