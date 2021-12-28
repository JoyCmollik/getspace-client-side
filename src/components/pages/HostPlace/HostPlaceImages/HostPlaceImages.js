import React from 'react';
import { Link } from 'react-router-dom';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';
import HostPlaceImagesUploader from './HostPlaceImagesUploader';
import axios from 'axios';
import useHostProvider from '../../../../hooks/useHostProvider';

const HostPlaceImages = () => {
	const { placeImageFiles, setPlaceImageFiles } = useHostProvider();

	const uploadImage = (files) => {
		// files.forEach((img) => {
		// 	let body = new FormData();
		// 	body.set('key', 'd845bc3ffcdbf53e0ef9ccaa71aab9ee');
		// 	body.append('image', img);
		// 	axios({
		// 		method: 'post',
		// 		url: 'https://api.imgbb.com/1/upload',
		// 		data: body,
		// 	}).then((resp) => {
		// 		console.log(resp.data); // I'm aware it's data.data, that is how it returns stuff
		// 	});
		// });
	};

	return (
		<div className='h-screen grid grid-cols-2'>
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/Kb1vN76/11-Fuchsia.png) center/cover`,
				}}
			>
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
								placeImageFiles={placeImageFiles}
								setPlaceImageFiles={setPlaceImageFiles}
							/>
						</div>
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/title'>
						<button
							className={`${
								!placeImageFiles.length
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={placeImageFiles.length ? false : true}
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
