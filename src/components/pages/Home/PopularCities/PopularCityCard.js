import React from 'react';

const PopularCityCard = () => {
	return (
		<article
			style={{
				height: 370,
				width: 280,
				background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.25)), url(https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60) no-repeat center/cover`,
			}}
			className='w-full h-full text-white rounded-2xl flex flex-col justify-between text-left p-7 transform hover:scale-105 overflow-hidden transition duration-500 cursor-pointer'
		>
			<h4 className='uppercase  top-5 left-5 font-bold text-sm'>
				france
			</h4>
			<div className=' font-medium bottom-5 left-5 text-left'>
				<h2 className='text-2xl'>Paris</h2>
				<h5 className='text-base'>7 places</h5>
			</div>
		</article>
	);
};

export default PopularCityCard;
