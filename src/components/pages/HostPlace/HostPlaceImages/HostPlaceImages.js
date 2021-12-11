import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import HostPlaceImagesUploader from './HostPlaceImagesUploader';

const HostPlaceImages = () => {
	const [files, setFiles] = useState([]);

	return (
		<div className='h-screen grid grid-cols-2'>
			<div className='bg-brand flex justify-center items-center p-10'>
				<h1 className='text-5xl text-white font-semibold'>
					Next, let's add some photos of your place
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col justify-between overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='overflow-y-auto py-5 scroll-hide'>
					<div className='flex flex-col space-y-4 w-8/12 mx-auto'>
						<div className='space-y-8'>
							<HostPlaceImagesUploader
								files={files}
								setFiles={setFiles}
							/>
						</div>
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/title'>
						<button
							className={`${
								!files.length
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={files.length ? false : true}
						>
							Upload
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceImages;
