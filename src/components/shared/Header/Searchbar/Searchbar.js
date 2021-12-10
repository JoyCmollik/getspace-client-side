import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
	return (
		<div>
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
				</div>
			</form>
		</div>
	);
};

export default Searchbar;
