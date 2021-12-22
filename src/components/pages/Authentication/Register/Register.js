import React from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowRight, HiLockClosed, HiMail } from 'react-icons/hi';
import { FaUserEdit } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase';

const Register = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { handleRegisterUser } = useFirebase();
	const history = useHistory();

	const onSubmit = (data) => console.log(data);
	return (
		<div
			className='h-screen text-white flex justify-center items-center'
			style={{ background: '#161616' }}
		>
			<div className='space-y-10  container mx-auto'>
				{/* content */}
				<div className=''>
					<div className='grid grid-cols-2 gap-x-10'>
						{/* title */}
						<div className='text-center space-y-4'>
							<h2 className='text-5xl font-bold'>
								Create new account
							</h2>
							<p className='text-2xl text-para font-medium w-10/12 mx-auto'>
								Get yourself registered today and start your
								journey
							</p>
						</div>
						<form
							className='grid grid-cols-2 gap-4'
							onSubmit={handleSubmit(onSubmit)}
							autoComplete='off'
						>
							{/* first name */}
							<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg  group'>
								<div className='flex-grow flex flex-col space-y-1'>
									<label
										className='text-xs group-hover:text-brand'
										htmlFor='first-name'
									>
										First name
									</label>
									<input
										id='first-name'
										className='bg-transparent outline-none'
										{...register('first_name', {
											required: true,
										})}
										placeholder='John'
									/>
									{errors.first_name?.type === 'required' && (
										<p className='text-red-700 text-xs'>
											First name is required
										</p>
									)}
								</div>
								<FaUserEdit style={{ fontSize: 19 }} />
							</div>
							{/* last name */}
							<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg  group'>
								<div className='flex-grow flex flex-col space-y-1'>
									<label
										className='text-xs group-hover:text-brand'
										htmlFor='last-name'
									>
										Last name
									</label>
									<input
										id='last-name'
										type='text'
										className='bg-transparent outline-none'
										{...register('last_name', {
											required: true,
										})}
										placeholder='Smith'
									/>
									{errors.lastName?.type === 'required' && (
										<p className='text-red-700 text-xs'>
											Last name is required
										</p>
									)}
								</div>
								<FaUserEdit style={{ fontSize: 19 }} />
							</div>
							{/* email */}
							<div className='col-span-2 flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg  group'>
								<div className='flex-grow flex flex-col space-y-1'>
									<label
										className='text-xs group-hover:text-brand'
										htmlFor='email'
									>
										Email
									</label>
									<input
										id='email'
										type='email'
										className='bg-transparent outline-none'
										{...register('email', {
											required: true,
										})}
										placeholder='john@gmail.com'
									/>
									{errors.email?.type === 'required' && (
										<p className='text-red-700 text-xs'>
											Email is required
										</p>
									)}
								</div>
								<HiMail style={{ fontSize: 19 }} />
							</div>
							{/* password */}
							<div className='col-span-2 flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg  group'>
								<div className='flex-grow flex flex-col space-y-1'>
									<label
										className='text-xs group-hover:text-brand'
										htmlFor='password'
									>
										Password
									</label>
									<input
										id='password'
										type='password'
										className='bg-transparent outline-none'
										{...register('password', {
											required: true,
										})}
										autoComplete='new-password'
										placeholder='your password'
									/>
									{errors.password?.type === 'required' && (
										<p className='text-red-700 text-xs'>
											Password is required
										</p>
									)}
								</div>
								<HiLockClosed style={{ fontSize: 19 }} />
							</div>

							<button
								type='submit'
								className='col-span-2 btn-primary px-5 py-5 flex justify-between items-center'
							>
								<span>Create Account</span>
								<HiArrowRight />
							</button>

							{/* new user button */}
							<Link to='/authenticate'>
								<button>Already A Member? Log In</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
