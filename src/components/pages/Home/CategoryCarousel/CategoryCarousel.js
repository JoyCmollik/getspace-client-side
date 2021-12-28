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
								src='https://i.ibb.co/G51QDZZ/Beautiful-landscape-of-beach-sea-ocean-with-empty-chair-deck-and-umbrella-nearly-coconut-palm-tree-w.jpg'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white  p-8 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<p className='text-xs text-gray-400 py-1'>
								B<span className='p-1'>E</span>A
								<span className='p-1'>C</span>H
							</p>
							<h2 className='text-2xl font-medium text-gray-700'>
								Unawatuna Beach
							</h2>
							<p className='text-sm pr-4 py-4'>
								<span className='font-extrabold text-gray-500'>
									Feeling stressed? There’s a beach for that.
								</span>{' '}
							</p>
						</div>
					</div>
					<div className='relative '>
						<div>
							<img
								src='https://i.ibb.co/JmzHMRH/kunal-shinde-f0-YLss50-Bs-unsplash.jpg'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-8 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<p className='text-xs text-gray-400 py-1'>
								M<span className='p-1'>A</span>Z
								<span className='p-1'>E</span>
							</p>
							<h2 className='text-2xl font-medium text-gray-700'>
								Wilderness
							</h2>
							<p className='text-sm pr-4 py-4'>
								<span className='font-extrabold text-gray-500'>
									Drink the silence of God from a spring in
									the woods.
								</span>{' '}
							</p>
						</div>
					</div>
					<div className='relative '>
						<div>
							<img
								src='https://i.ibb.co/0GvMmw1/alejandra-cifre-gonzalez-TJm-Yu-PTWmi4-unsplash.jpg'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-8 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<p className='text-xs text-gray-400 py-1'>
								W<span className='p-1'>A</span>T
								<span className='p-1'>E</span>R
								<span className='p-1'>W</span>A
								<span className='p-1'>Y</span>
							</p>
							<h2 className='text-2xl font-medium text-gray-700'>
								Radovna River
							</h2>
							<p className='text-sm pr-4 py-4'>
								<span className='font-extrabold text-gray-500'>
									A river doesn't just carry water, it carries
									life.
								</span>{' '}
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
