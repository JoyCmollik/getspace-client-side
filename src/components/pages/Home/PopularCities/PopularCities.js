import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import PopularCityCard from './PopularCityCard';

const image =
	'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

const PopularCities = () => {
	return (
		<div className='bg-dark py-20'>
			<div className='container mx-auto'>
				<SectionTitle title='popular city' mode='dark' />
				{/* content */}
				<div
					className='grid grid-cols-3 gap-5'
					style={{ minHeight: '70vh' }}
				>
					{/* first column */}
					<div className='grid grid-rows-2 gap-5'>
						{/* first row */}
						<div className='space-y-4'>
							<h4 className='text-7xl font-medium capitalize text-white'>
								Best <br /> cities
							</h4>
							<p className='text-para text-xl w-10/12'>
								Grab your chance to experience a complete new
								venture.
							</p>
						</div>
						{/* second row */}
						<div
							className='rounded-2xl flex items-end text-white p-4'
							style={{
								background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fEJlYXV0aWZ1bCUyMHBsYWNlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60) no-repeat center/cover`,
							}}
						>
							<div className='space-y-1'>
								<h4 className='font-semibold text-xl'>
									Most affordable premium locations
								</h4>
								<h5 className='text-lg'>
									London, United Kingdom
								</h5>
							</div>
						</div>
					</div>
					{/* second column */}
					<div
						className='rounded-2xl flex items-end text-white p-4'
						style={{
							background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60) no-repeat center/cover`,
						}}
					>
						<div className='space-y-1'>
							<h4 className='font-semibold text-xl'>
								World's top most loving places covered
							</h4>
							<h5 className='text-lg'>Paris, France</h5>
						</div>
					</div>
					{/* third column */}
					<div className='grid grid-rows-2 gap-5'>
						{/* first row */}
						<div
							className='rounded-2xl flex items-end text-white p-4'
							style={{
								background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEJlYXV0aWZ1bCUyMGNpdGllc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60) no-repeat center/cover`,
							}}
						>
							<div className='space-y-1'>
								<h4 className='font-semibold text-xl'>
									Colorful destinations with astonishing sites
								</h4>
								<h5 className='text-lg'>Brussels, Belgium</h5>
							</div>
						</div>
						{/* second row */}
						<div
							className='rounded-2xl flex items-end text-white p-4'
							style={{
								background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1552944903-418e6165209c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fEJlYXV0aWZ1bCUyMGNpdGllc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60) no-repeat center/cover`,
							}}
						>
							<div className='space-y-1'>
								<h4 className='font-semibold text-xl'>
									Top notch cities with eye catching prices
								</h4>
								<h5 className='text-lg'>
									New York, The United States of America
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularCities;
