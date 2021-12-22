import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';

import { BiLogInCircle } from 'react-icons/bi';

const Header = () => {
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
      md:flex md:justify-between md:items-center
    '
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
					<div className='flex'>
						<div>
							<span>
								<button class='bg-white hover:bg-black hover:text-white  text-black border border-black py-1 px-6 rounded-lg my-0 mr-4 '>
									Become a Host
								</button>
							</span>
						</div>
						<div className='  md:block mr-5 '>
							<button
								className='text-white bg-dark hover:bg-white hover:text-black
							hover:border-black border flex items-center px-4 rounded-lg py-1'
							>
								<span>Sign in</span>
								<BiLogInCircle className=' hover:text-black display-inline ml-2' />
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
