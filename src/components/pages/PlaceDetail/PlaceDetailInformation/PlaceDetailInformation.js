import React from 'react';
import { Avatar } from '@mui/material';
import { BiBed } from 'react-icons/bi';
import firepit from '../../../../images/icons/fire-pit.svg';
import poolball from '../../../../images/icons/pool-ball.svg';
import indoorFirebase from '../../../../images/icons/indoor-firebase.svg';
import dine from '../../../../images/icons/dine.svg';

const standoutAmenitiesList = [
	{
		id: 0,
		text: 'Pool',
		iconCode: 'jlpgasyu',
	},
	{ id: 1, text: 'Hot tub', iconCode: 'wfroncyf' },
	{ id: 2, text: 'BBQ grill', iconCode: 'coqbeapw' },
	{
		id: 3,
		text: 'Fire pit',
		icon: firepit,
	},
	{ id: 4, text: 'Pool table', icon: poolball },
	{ id: 5, text: 'Indoor fireplace', icon: indoorFirebase },
	{ id: 6, text: 'Outdoor dining area', icon: dine },
	{ id: 7, text: 'Exercise equipment', iconCode: 'ouvpilty' },
];

const PlaceDetailInformation = () => {
	return (
		<div className='space-y-8 py-8'>
			{/* title */}
			<div className='flex justify-between items-center'>
				<div className='space-y-2'>
					<h2 className='text-2xl font-semibold'>
						Treehouse hosted by Daleep
					</h2>
					<p className='flex items-center space-x-1'>
						<span>15 guests</span>
						<span
							className='rounded-full bg-para'
							style={{ padding: 1 }}
						/>
						<span>Studio</span>
						<span
							className='rounded-full bg-para'
							style={{ padding: 1 }}
						/>
						<span>1 bed</span>
						<span
							className='rounded-full bg-para'
							style={{ padding: 1 }}
						/>
						<span>1 bath</span>
					</p>
				</div>
				<Avatar />
			</div>
			<hr />
			{/* place information */}
			<div className='space-y-4'>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/gmzxduhd.json'
						trigger='hover'
						stroke='90'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>Entire Home</h4>
						<p className='text-para text-base'>
							You'll have the treehouse to yourself.
						</p>
					</div>
				</div>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/ycjlxmbw.json'
						trigger='hover'
						stroke='50'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>Enhanced Clean</h4>
						<p className='text-para text-base'>
							This Host committed to Airbnb's 5-step enhanced
							cleaning process.
						</p>
					</div>
				</div>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/zzcjjxew.json'
						trigger='hover'
						stroke='90'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>Great Location</h4>
						<p className='text-para text-base'>
							100% of recent guests gave the location a 5-star
							rating.
						</p>
					</div>
				</div>
				<div className='flex items-start space-x-4'>
					<lord-icon
						src='https://cdn.lordicon.com/kbtmbyzy.json'
						trigger='hover'
						stroke='90'
						colors='primary:#121331,secondary:#ff385c'
						style={{ width: 40, height: 40 }}
					/>
					<div>
						<h4 className='text-lg font-medium'>
							Free Cancellation before one week of reservation.
						</h4>
						<p className='text-para text-base'>
							This host will allow you the flexibility of
							cancelling as you wish.
						</p>
					</div>
				</div>
			</div>
			<hr />
			{/* description */}
			<p className='text-para'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Molestias, sed! Voluptas dolorem, nisi inventore vero harum
				autem pariatur voluptatibus quisquam asperiores ipsam, eius,
				aliquam quod quibusdam molestiae ullam aut iste. Sapiente a
				eaque illo ratione temporibus in optio quos et inventore dolorum
				neque suscipit, vero tempore modi facilis labore quia aspernatur
				ipsam rem ipsum? Illo quasi libero quae minus earum, asperiores
				accusantium tenetur, dignissimos beatae quisquam sit. Possimus
				cumque doloremque culpa ad fuga? Maxime nam distinctio placeat
				doloremque iusto dolores culpa tenetur pariatur non eius rerum
				earum est exercitationem perferendis sunt omnis amet,
				consectetur, illum ipsum! Aliquam hic voluptatem dicta?
			</p>
			<hr />
			{/* bed information */}
			<div className='space-y-4'>
				<h2 className='text-2xl font-semibold'>Where you'll sleep</h2>
				<div className='w-52 border rounded-lg p-4 space-y-2'>
					<BiBed style={{ fontSize: 25 }} />
					<h4 className='text-lg font-medium'>Bedroom</h4>
					<p>1 double bed</p>
				</div>
			</div>
			<hr />
			{/* place offers */}
			<div className='space-y-4'>
				<h2 className='text-2xl font-semibold'>
					What this place offers
				</h2>
				<div className='grid grid-cols-2 gap-4 xl:w-4/5'>
					{standoutAmenitiesList.map((amenity) => (
						<div
							key={amenity.id}
							className='flex items-center space-x-4'
						>
							{amenity?.iconCode ? (
								<lord-icon
									src={`https://cdn.lordicon.com/${amenity.iconCode}.json`}
									trigger='hover'
									colors='primary:#121331,secondary:#ff385c'
									style={{ width: 50, height: 50 }}
								/>
							) : (
								<img
									src={amenity.icon}
									alt='icon'
									style={{ width: 50, height: 40 }}
								/>
							)}
							<p>{amenity.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PlaceDetailInformation;
