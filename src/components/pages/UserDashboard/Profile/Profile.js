import React from 'react';

const Profile = () => {
	return (
		<div className='container mx-auto w-full py-10'>
			<h1 className='text-2xl font-bold py-6'>Profile Setting</h1>
			<h3 className='text-base font-medium text-gray-500 py-2'>
				PROFILE INFO
			</h3>
			<p className='text-lg font-semibold'>Avatar</p>
			<img
				className='h-24 w-24 justify-center object-contain'
				src='https://i.ibb.co/7yCKQZk/41559.jpg'
				alt=''
			/>

			<div className='grid grid-cols-2 gap-8'>
				<div className='text-base font-semibold flex flex-col space-y-2'>
					<label className='' htmlFor='inputName'>
						First Name
					</label>
					<input
						type='name'
						className='form-control text-base p-1 border-b-2 border-gray-900 w-full outline-none'
						id='inputName'
						placeholder='Enter Your First Name'
						required
					/>
				</div>
				<div className='text-base font-semibold flex flex-col space-y-2'>
					<label className='' htmlFor='inputNumber'>
						Mobile
					</label>
					<input
						type='number'
						className='form-control text-base p-1 border-b-2 border-gray-900 w-full outline-none'
						id='inputNumber'
						placeholder='Mobile Number'
						required
					/>
				</div>
				<div className='text-base font-semibold flex flex-col space-y-2'>
					<label className='' htmlFor='inputEmail'>
						Email
					</label>
					<input
						type='email'
						className='form-control text-base p-1 border-b-2 border-gray-900 w-full outline-none'
						id='inputName'
						placeholder='Email'
						required
					/>
				</div>
				<div className='text-base font-semibold flex flex-col space-y-2'>
					<label className='' htmlFor='inputName'>
						Facebook URL
					</label>

					<input
						type='text'
						className='form-control text-base p-1 border-b-2 border-gray-900 w-full outline-none'
						id='inputtext'
						placeholder='Enter Your Facebook URL'
						required
					/>
				</div>
				<div className='text-base font-semibold flex flex-col space-y-2'>
					<label className='' htmlFor='inputName'>
						Instagram URL
					</label>

					<input
						type='text'
						className='form-control text-base p-1 border-b-2 border-gray-900 w-full outline-none'
						id='inputtext'
						placeholder='Enter Your Instagram URL'
						required
					/>
				</div>
				<div className='text-base font-semibold flex flex-col space-y-2'>
					<label className='' htmlFor='inputName'>
						Pinterest URL
					</label>

					<input
						type='text'
						className='form-control text-base p-1 border-b-2 border-gray-900 w-full outline-none'
						id='inputtext'
						placeholder='Enter Your Pinterest URL'
						required
					/>
				</div>
				<div className='col-span-2 text-base font-semibold flex flex-col space-y-2'>
					<label className='' htmlFor='inputName'>
						Description
					</label>

					<textarea
						type='text'
						className='form-control text-base p-1 border-2 border-gray-900 w-full h-64 outline-none'
						id='inputtext'
						placeholder='Enter Your Pinterest URL'
						style={{ resize: 'none' }}
						required
					/>
				</div>
			</div>
			<br />
			<br />
			<button className='rounded-full py-3 px-6 font-bold text-sm bg-red-400 text-white rounded-4xl hover:text-gray-900 hover:bg-red-300 '>
				Update Profile
			</button>
			<br />
			<br />

			<h3 className='text-base font-medium text-gray-500 py-6'>
				Change Password
			</h3>

			<div className='text-base font-semibold flex flex-col space-y-2'>
				<label className='' htmlFor='inputName'>
					Old Password
				</label>

				<input
					type='password'
					className='form-control text-base p-1 border-b-2 border-gray-900 w-1/2 outline-none'
					id='inputpassword'
					placeholder='Enter Your Old Password'
					required
				/>
			</div>
			<br />
			<div className='text-base font-semibold flex flex-col space-y-2'>
				<label className='' htmlFor='inputName'>
					New Password
				</label>

				<input
					type='password'
					className='form-control text-xl p-1 border-b-2 border-gray-900 w-1/2 outline-none'
					id='inputpassword'
					placeholder='Enter Your New Password'
					required
				/>
			</div>
			<br />
			<div className='text-base font-semibold flex flex-col space-y-2'>
				<label className='' htmlFor='inputName'>
					Confirm Password
				</label>

				<input
					type='password'
					className='form-control text-base p-1 border-b-2 border-gray-900 w-1/2 outline-none'
					id='inputpassword'
					placeholder='Enter Confirm Password'
					required
				/>
			</div>
			<br />
			<br />
			<button className='rounded-full py-3 px-6 font-bold text-sm bg-red-400 text-white rounded-4xl  hover:text-gray-900 hover:bg-red-300'>
				Update Password
			</button>
			<br />
			<br />
		</div>
	);
};

export default Profile;
