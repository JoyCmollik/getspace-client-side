import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { Avatar } from '@mui/material';

const Header = () => {
	const { user } = useFirebase();

	return (
		<div>
			{/* navbar */}
			<nav className='bg-white  '>
				<div
					className='
      					container
      					px-6
      					py-3
      					mx-auto
      					md:flex md:justify-between md:items-center'
				>
					<div className=''>
						<div>
							<p
								className='
            text-xl
            font-bold
            text-dark
            flex items-center justify-between
           
          '
							>
								<FaUmbrellaBeach className=' text-brand text-4xl mb-4' />
								&nbsp; <span>GetSpace</span>
							</p>
						</div>
					</div>

					<div className='items-center md:flex my-2'>
						<div className='flex flex-col md:flex-row md:mx-6 '>
							<p
								className='
            my-1
            text-dark
         
            md:mx-4 md:my-0
          '
							>
								Places to stay
							</p>
							<p
								className='
            my-1
            text-dark
            md:mx-4 md:my-0
          '
							>
								Experiences
							</p>
							<p
								className='
            my-1
            text-dark
            md:mx-4 md:my-0
          '
							>
								Online Experiences
							</p>
						</div>
					</div>
					<div className='flex items-center space-x-4'>
						{user && (
							<Link to='/host'>
								<button class='bg-white hover:bg-black hover:text-white  text-black border border-black py-1 px-6 rounded-lg'>
									Become a Host
								</button>
							</Link>
						)}
						<div className='  md:block mr-5 '>
							{!user ? (
								<Link to='/authenticate'>
									<button
										className='text-white bg-dark hover:bg-white hover:text-black
										hover:border-black border flex items-center px-4 rounded-lg py-1'
									>
										<span>Sign in</span>
										<BiLogInCircle className=' hover:text-black display-inline ml-2' />
									</button>
								</Link>
							) : (
								<div className='flex items-center space-x-4 px-4 py-1 border box-shadow rounded-lg'>
									<p>{user?.displayName?.split(' ', 1)[0]}</p>
									<Avatar
										src={user.photoURL}
										style={{ width: 28, height: 28 }}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
