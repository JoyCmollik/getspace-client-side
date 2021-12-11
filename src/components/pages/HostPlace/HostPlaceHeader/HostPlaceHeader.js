import React from 'react';
import { Link } from 'react-router-dom';

const HostPlaceHeader = ({ mode }) => {
	return (
		<div className='flex py-4 justify-end items-center'>
			<div className='space-x-4'>
				<Link to='/'>
					<button
						className={`px-5 py-1 rounded-3xl ${
							mode === 'dark'
								? 'bg-white bg-opacity-20 text-white'
								: 'bg-gray-100 text-para'
						}`}
					>
						Exit
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HostPlaceHeader;
