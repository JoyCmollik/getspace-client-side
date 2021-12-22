import React from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowRight, HiLockClosed, HiMail } from 'react-icons/hi';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<div
			className='h-screen text-white flex justify-center items-center'
			style={{ background: '#161616' }}
		>
			<div className='space-y-10  container mx-auto'>
				{/* title */}
				<div className='text-center space-y-4'>
					<h2 className='text-5xl font-bold'>
						Login to Your Account
					</h2>
					<p className='text-2xl text-para font-medium w-10/12 mx-auto'>
						Choose from more than 1000+ places with new posts being
						published every split of seconds
					</p>
				</div>
				{/* content */}
				<div className=''>
					<div className='grid grid-cols-2 gap-x-10'>
						<form
							className='flex flex-col space-y-4'
							onSubmit={handleSubmit(onSubmit)}
							autoComplete='off'
						>
							{/* email */}
							<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg  group'>
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
										autoComplete='false'
										placeholder='john@gmail.com'
									/>
									{errors.firstName?.type === 'required' && (
										<p className='text-red-700 text-xs'>
											Email name is required
										</p>
									)}
								</div>
								<HiMail style={{ fontSize: 19 }} />
							</div>
							{/* password */}
							<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg  group'>
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
										{...register('email', {
											required: true,
										})}
										autoComplete='new-password'
									/>
									{errors.firstName?.type === 'required' && (
										<p className='text-red-700 text-xs'>
											Password is required
										</p>
									)}
								</div>
								<HiLockClosed style={{ fontSize: 19 }} />
							</div>

							<button
								type='submit'
								className='btn-primary px-5 py-5 flex justify-between items-center'
							>
								<span>Login To Your Account</span>
								<HiArrowRight />
							</button>

							{/* new user button */}
							<Link to='/authenticate/register'>
								<button>
									New user? Please register yourself.
								</button>
							</Link>
						</form>
						<div className='space-y-4'>
							{/* google */}
							<button
								className='w-full btn-primary'
								style={{ padding: '1px' }}
							>
								<div
									className='rounded-lg'
									style={{ background: '#161616' }}
								>
									<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg'>
										<div className='flex-grow flex items-start flex-col space-y-1'>
											<p className='text-xs'>Sign In</p>
											<p>With Google</p>
										</div>
										<FaGoogle style={{ fontSize: 19 }} />
									</div>
								</div>
							</button>
							{/* facebook */}
							<button
								className='w-full btn-primary'
								style={{ padding: '1px' }}
							>
								<div
									className='rounded-lg'
									style={{ background: '#161616' }}
								>
									<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-2 rounded-lg'>
										<div className='flex-grow flex items-start flex-col space-y-1'>
											<p className='text-xs'>Sign In</p>
											<p>With Facebook</p>
										</div>
										<FaFacebook style={{ fontSize: 19 }} />
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
