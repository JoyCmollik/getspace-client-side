import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

const AdminDashboardProfile = () => {
	return (
		<div className='p-8 '>
			<div className='bg-darklight rounded-lg  pb-5'>
				<div className='  flex items-center justify-center space-x-6'>
					<img
						src='https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
						alt=''
						className='h-44 rounded-full '
					/>
					<button className='flex items-center justify-center space-x-2 mt-32'>
						<BsFillPencilFill />
						<span>Edit</span>
					</button>
				</div>
				<div>
					<div className='flex items-center justify-center space-x-24 mt-12'>
						<div>
							<p className=' text-gray-400 '>
								<span>Name</span>
							</p>
							<div className='flex items-center space-x-2 '>
								<p className=''>Jaden Smith</p>
								<button>
									<BsFillPencilFill />
								</button>
							</div>
						</div>
						<div>
							<p className=' text-gray-400 '>
								<span>Email</span>
							</p>
							<div className='flex items-center space-x-2 '>
								<p>jadensmith@gmail.com</p>{' '}
								<button>
									<BsFillPencilFill />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='flex items-center justify-center  mt-12'>
						<div className='mr-40'>
							<p className=' text-gray-400 '>
								<span>Role</span>
							</p>
							<div>
								<p className=''>Admin</p>
							</div>
						</div>
						<div className='mr-24'>
							<p className=' text-gray-400 '>
								<span>Join Date</span>
							</p>
							<div className=' '>
								<p>{new Date().toLocaleDateString()}</p>{' '}
							</div>
						</div>
					</div>
				</div>
				<div className='mt-16 h-56 p-10 bg-black rounded-lg mx-5 '>
					<h1 className='text-lg text-center'>Make New Admin</h1>
					<form action=''>
						<div className='flex items-center justify-center space-x-4 mt-8'>
							<input
								type='email'
								placeholder='Enter Email'
								className='placeholder-white px-4 py-2 bg-transparent border  border-white rounded-lg'
							/>
							<button className='btn-primary px-4 py-2'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboardProfile;
