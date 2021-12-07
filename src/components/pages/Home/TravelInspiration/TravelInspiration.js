import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle'

const TravelInspiration = () => {
	return (
		<section className="py-20 bg-blue-200">
			<div className='container mx-auto'>
				<SectionTitle title='Travel Inspiration'  />
			
			
			
			<div className="mb-12 grid grid-cols-3 gap-8">
				<div className="">
					<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-72 md:h-48 w-full object-cover object-center rounded-2xl"/><br/>
				<h6 className="inline underline pr-4 font-medium text-base">ROAD TRIPS</h6>
				<h6 className="inline underline font-medium text-base">TIPS & TRICKS</h6>
				<h2 className="py-2.5 font-medium text-xl">Why You Should Visit France</h2>
				</div>
				<div>
					<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1482049016688-2d3e1b311543.jpeg" alt="image" className="lg:h-72 md:h-48 w-full object-cover object-center rounded-2xl"/><br/>
				<h6 className="inline pr-4 underline font-medium text-base">BEACHES</h6>
				<h6 className="inline underline font-medium text-base">TAKE A BREAK</h6>
				<h2 className=" py-2.5 font-medium  text-xl">The Magic of Letting a Souvenir Find You</h2>
				</div>
				<div>
					<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/11/The-Serras__2018_Lobby-Details-II-1.jpg" alt="image" className="lg:h-72 md:h-48 w-full object-cover object-center rounded-2xl"/><br/>
				<h6 className="inline underline  font-medium text-base">TIPS & TRICKS</h6>
				<h2 className=" py-2.5 font-medium text-xl">The New Nomads Are Here</h2>
				
				</div>

			</div>
			<div className="text-center ">
			<button className="px-4 border-2 rounded-3xl h-10 "><a href="/#" >View More</a></button>
			</div>
			</div>
		</section>
	);
};

export default TravelInspiration;
