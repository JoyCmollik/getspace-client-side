import React from 'react';

const TravelInspiration = () => {
	return (
		
		<section className="container px-48 py-24 mx-auto">
			<h2 className="text-center font-medium text-3xl pb-14">Travel Inspiration</h2>
			
			
			<div className="mb-12 grid grid-cols-3 gap-8">
				<div className="">
					<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-72 md:h-48 w-full object-cover object-center rounded-2xl"/><br/>
				<h6 className="inline underline pr-4 font-medium text-base">ROAD TRIPS</h6>
				<h6 className="inline underline font-medium text-base">TIPS & TRICKS</h6>
				<h2 className="py-2.5 font-medium text-xl">Why You Should Visit France</h2>
				</div>
				<div className="">
					<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-72 md:h-48 w-full object-cover object-center rounded-2xl"/><br/>
				<h6 className="inline pr-4 underline font-medium text-base">BEACHES</h6>
				<h6 className="inline underline font-medium text-base">TAKE A BREAK</h6>
				<h2 className=" py-2.5 font-medium  text-xl">The Magic of Letting a Souvenir Find You</h2>
				</div>
				<div className="">
					<img src="https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2019/10/photo-1583475020839-105dddecc00a-1024x683.jpeg" alt="image" className="lg:h-72 md:h-48 w-full object-cover object-center rounded-2xl"/><br/>
				<h6 className="inline underline  font-medium text-base">TIPS & TRICKS</h6>
				<h2 className=" py-2.5 font-medium text-xl">The New Nomads Are Here</h2>
				
				</div>

			</div>

		</section>
	);
};

export default TravelInspiration;
