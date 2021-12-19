import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

const PlaceDetailImages = () => {
	return (
		<div>
			<Swiper
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				slidesPerView={4}
				centeredSlides={true}
				spaceBetween={0}
			>
				<SwiperSlide>
					<img
						className='object-cover w-full inline-block'
						style={{ height: '400px' }}
						src='https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1440&q=60'
						alt='nice images'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover w-full inline-block'
						style={{ height: '400px' }}
						src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1440&q=60'
						alt='nice images'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover w-full inline-block'
						style={{ height: '400px' }}
						src='https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1440&q=60'
						alt='nice images'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover w-full inline-block'
						style={{ height: '400px' }}
						src='https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1440&q=60'
						alt='nice images'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover w-full inline-block'
						style={{ height: '400px' }}
						src='https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1440&q=60'
						alt='nice images'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover w-full inline-block'
						style={{ height: '400px' }}
						src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1440&q=60'
						alt='nice images'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover w-full inline-block'
						style={{ height: '400px' }}
						src='https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1440&q=60'
						alt='nice images'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default PlaceDetailImages;
