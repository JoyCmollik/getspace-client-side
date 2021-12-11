import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HostPlaceHeader from '../HostPlaceHeader/HostPlaceHeader';

const placeSpaceInfoList = [
	{ id: 0, text: 'An entire place' },
	{ id: 1, text: 'A private room' },
	{ id: 2, text: 'A shared room' },
];

const HostPlaceSpaceInfo = () => {
	const [placeSpaceInfo, setPlaceSpaceInfo] = useState(null);

	return (
		<div className='h-screen grid grid-cols-2'>
			<div
				className='bg-brand flex justify-center items-center p-10'
				style={{
					background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)) ,url(https://i.ibb.co/SQvbrf2/20-Melanie.png) center/cover`,
				}}
			>
				<h1 className='text-5xl text-white font-semibold'>
					What kind of space will guests have?
				</h1>
			</div>
			<div className='bg-white p-10 flex flex-col overflow-hidden'>
				<HostPlaceHeader />
				{/* content */}
				<div className='flex-grow flex flex-col space-y-4 justify-center items-center'>
					{/* list */}
					{placeSpaceInfoList.map(({ id, text }) => (
						<button
							key={id}
							onClick={() =>
								setPlaceSpaceInfo(() => {
									return { id, text };
								})
							}
							className={`p-4 flex flex-col items-start text-left w-8/12 rounded-lg border hover:border-para ${
								placeSpaceInfo && placeSpaceInfo.id === id
									? 'border-para'
									: 'border-gray-200'
							}`}
						>
							<h4 className='text-xl font-semibold'>{text}</h4>
						</button>
					))}
				</div>
				{/* host footer */}
				<div className='border-t border-para py-4 flex justify-end'>
					<Link to='/host/count'>
						<button
							className={`${
								!placeSpaceInfo
									? 'bg-gray-400 text-black'
									: 'bg-brand text-white'
							} font-semibold px-5 py-2 rounded-3xl`}
							disabled={placeSpaceInfo ? false : true}
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HostPlaceSpaceInfo;
