import React from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowRight, HiLockClosed, HiMail } from 'react-icons/hi';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase';
import back from '../../../../images/page.png';

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { handleLoginUser, handleSignOut, user } = useFirebase();
	const navigate = useNavigate();
	const location = useLocation();

	const onSubmit = (data) => {
		handleLoginUser(data.email, data.password, location, navigate);
	};
	return (
		<div
			className='h-screen text-white grid grid-cols-2'
			style={{ background: '#161616' }}
		>
			<div className='space-y-10 container mx-auto flex flex-col justify-center items-center'>
				{/* title */}
				<div className='text-center space-y-4'>
					<h2 className='text-5xl font-bold'>
						Login to Your Account
					</h2>
					<p className='text-xl text-para font-medium w-10/12 mx-auto'>
						Choose from more than 1000+ places with new posts being
						published every split of seconds
					</p>
				</div>
				{/* content */}
				<div className='space-y-4 w-full' style={{ maxWidth: 700 }}>
					{/* login form */}
					<div className='w-full'>
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
										{...register('password', {
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
						{user && (
							<button
								onClick={handleSignOut}
								className='btn-primary px-5 py-4'
							>
								Sign Out
							</button>
						)}
					</div>
					<p className='text-xl text-center'>Or</p>
					<div className='w-full grid grid-cols-2 gap-4'>
						{/* google */}
						<button
							className='w-full btn-primary'
							style={{ padding: '1px' }}
						>
							<div
								className='rounded-lg'
								style={{ background: '#161616' }}
							>
								<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-4 rounded-lg'>
									<span className='text-xl'>
										Sign in with google
									</span>
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
								<div className='flex justify-between items-center bg-white bg-opacity-5 px-5 py-4 rounded-lg'>
									<span className='text-xl'>
										Sign in with facebook
									</span>
									<FaFacebook style={{ fontSize: 19 }} />
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<img
					className='object-cover w-8/12'
					src={back}
					alt='shape of different maths'
				/>
			</div>
		</div>
	);
};

export default Login;
