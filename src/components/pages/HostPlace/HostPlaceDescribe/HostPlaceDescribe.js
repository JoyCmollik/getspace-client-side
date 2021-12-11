import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';

const HostPlaceDescribe = ({ hostData }) => {
	const [placeDesc, setPlaceDesc] = useState(null);

	return (
		<div className='h-screen grid grid-cols-2'>
			<div className='bg-brand flex justify-center items-center p-10'>
				<h1 className='text-5xl text-white font-semibold'>
					Which of these best describes your place?
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='overflow-y-auto py-5 scroll-hide'>
					<div className='flex-grow flex flex-col space-y-4 justify-center items-center'>
						{/* list */}
						{hostData[0].describe.map((desc) => (
							<button
								key={desc.id}
								onClick={() => setPlaceDesc(() => desc)}
								className={`p-4 flex flex-col items-start text-left w-8/12 rounded-lg border hover:border-para space-y-2  ${
									placeDesc && placeDesc.id === desc.id
										? 'border-para'
										: 'border-gray-200'
								}`}
							>
								<h4 className='text-xl font-semibold'>
									{desc.title}
								</h4>
								<p className='text-para leading-none'>
									{desc.desc}
								</p>
							</button>
						))}
					</div>
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/info'>
						<button
							className={`${
								!placeDesc
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={placeDesc ? false : true}
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceDescribe;
