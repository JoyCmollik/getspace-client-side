import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';
import { FaGlobe } from 'react-icons/fa';

const Header = () => {
	return (
		<div>
			{/* navbar */}
			<nav className='bg-dark shadow'>
				<div
					className='
      container
      px-6
      py-3
      mx-auto
      md:flex md:justify-between md:items-center
    '
				>
					<div className='flex items-center justify-between'>
						<div>
							<p
								className='
            text-xl
            font-bold
            text-white
           
          '
							>
								<FaUmbrellaBeach className='fas fa-umbrella-beach text-brand text-4xl mb-4' />
								&nbsp; GetSpace
							</p>
						</div>
					</div>

					<div className='items-center md:flex my-2'>
						<div className='flex flex-col md:flex-row md:mx-6 '>
							<p
								className='
            my-1
            text-white
          
            md:mx-4 md:my-0
          '
								href='#'
							>
								Places to stay
							</p>
							<p
								className='
            my-1
            text-white
            md:mx-4 md:my-0
          '
								href='#'
							>
								Experiences
							</p>
							<p
								className='
            my-1
            text-white
            md:mx-4 md:my-0
          '
								href='#'
							>
								Online Experiences
							</p>
						</div>
						<span>
							<button class='bg-light  text-black py-1 px-6 rounded-full my-0 mr-8 '>
								Become a Host
							</button>
							<button className='text-white mr-8'>
								<FaGlobe />
							</button>
						</span>
						<div className='flex  md:block mr-5 '>
							<button className='text-white'>
								Sign in
								<BiLogInCircle className='text-white display-inline ml-4' />
							</button>
						</div>
					</div>
				</div>
			</nav>
			{/* search bar */}
			<form className=' pb-2 bg-black pt-1'>
				<div className='container w-2/4 mx-auto mt-2 mb-2'>
					<div className=' flex rounded-full    shadow-md py-3 mx-5   bg-white'>
						<input
							type='text'
							placeholder='Where are you going?'
							className=' focus:outline-none mx-5 border-rounded bg-transparent flex-grow placeholder-black text-center'
						/>
						<FiSearch className='bg-brand text-3xl rounded-full mr-5 px-1' />
					</div>
					<div></div>
				</div>
			</form>
		</div>
	);
};

export default Header;
