import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import BannerCard from './BannerCard';
// import {MdOutlineBeachAccess} from "react-icons/md";

const CategoryCarousel = () => {
	return (
		<div>
			<section className='container py-20 mx-auto'>
				<SectionTitle title='Explore by' />
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
					<div className='relative '>
						<div>
							<img
								src='https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZGFyYmFuJTJDJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&w=1000&q=80'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<p className='text-sm text-gray-400 py-1'>
								M O U N T A I N
							</p>
							<h2 className='text-2xl font-medium text-gray-700'>
								Bandarban
							</h2>
							<p className='text-sm pr-4 py-4'>
								<span className='font-extrabold text-gray-500'>
									4.6
								</span>{' '}
								<span className='text-gray-500'>
									(17 Reviews)
								</span>
							</p>
						</div>
					</div>
					<div className='relative '>
						<div>
							<img
								src='https://gecexchanges.com/wp-content/uploads/teach-english-in-thailand-banner.jpg'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<p className='text-sm text-gray-400 py-1'>
								B E A C H
							</p>
							<h2 className='text-2xl font-medium text-gray-700'>
								PATTAYA
							</h2>
							<p className='text-sm pr-4 py-4'>
								<span className='font-extrabold text-gray-500'>
									5.0
								</span>{' '}
								<span className='text-gray-500'>
									(12 Reviews)
								</span>
							</p>
						</div>
					</div>
					<div className='relative '>
						<div>
							<img
								src='https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<p className='text-sm text-gray-400 py-1'>
								A D V E N T U R E
							</p>
							<h2 className='text-2xl font-medium text-gray-700'>
								Surf in Cox's Bazar
							</h2>
							<p className='text-sm pr-4 py-4'>
								<span className='font-extrabold text-gray-500'>
									5.0
								</span>{' '}
								<span className='text-gray-500'>
									(34 Reviews)
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='container py-48 mx-auto'>
				<BannerCard />
			</section>
		</div>
	);
};

export default CategoryCarousel;
