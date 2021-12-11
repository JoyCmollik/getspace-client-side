import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';

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
					<div className=''>
						<div>
							<p
								className='
            text-xl
            font-bold
            text-white
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
            text-white
          
            md:mx-4 md:my-0
          '
							>
								Places to stay
							</p>
							<p
								className='
            my-1
            text-white
            md:mx-4 md:my-0
          '
							>
								Experiences
							</p>
							<p
								className='
            my-1
            text-white
            md:mx-4 md:my-0
          '
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
						<div className='  md:block mr-5 '>
							<button className='text-white flex items-center'>
								<span>Sign in</span>
								<BiLogInCircle className='text-white display-inline ml-4' />
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
