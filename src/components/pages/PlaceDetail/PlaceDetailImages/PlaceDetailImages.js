import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

const PlaceDetailImages = ({ placeImageList }) => {
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
				{placeImageList.length &&
					placeImageList.map((placeImage, placeIdx) => (
						<SwiperSlide>
							<img
								key={placeIdx}
								className='object-cover w-full inline-block'
								style={{ height: '400px' }}
								src={placeImage}
								alt='place showcasing'
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default PlaceDetailImages;
