import { Avatar } from '@mui/material';
import React from 'react';

const PlaceDetailReviews = () => {
	return (
		<div className='space-y-4'>
			<div className='grid grid-cols-2 gap-x-20 gap-y-4'>
				<div className='space-y-4'>
					<div className='flex items-center space-x-4'>
						<Avatar sx={{ width: 54, height: 54 }} />
						<div className=''>
							<h4 className='font-medium'>Rahul</h4>
							<p className='text-para'>November 2021</p>
						</div>
					</div>
					<p className='text-para'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Dolorum, odio nam! Perspiciatis accusamus
						exercitationem, itaque voluptatibus aspernatur eligendi
						perferendis quos natus, doloremque unde asperiores nisi
						ipsum alias debitis nihil tempora commodi nulla earum
						aut mollitia a? Repellat, et. Distinctio, aliquam?
					</p>
				</div>
				<div className='space-y-4'>
					<div className='flex items-center space-x-4'>
						<Avatar sx={{ width: 54, height: 54 }} />
						<div className=''>
							<h4 className='font-medium'>Rahul</h4>
							<p className='text-para'>November 2021</p>
						</div>
					</div>
					<p className='text-para'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Dolorum, odio nam! Perspiciatis accusamus
						exercitationem, itaque voluptatibus aspernatur eligendi
						perferendis quos natus, doloremque unde asperiores nisi
						ipsum alias debitis nihil tempora commodi nulla earum
						aut mollitia a? Repellat, et. Distinctio, aliquam?
					</p>
				</div>
				<div className='space-y-4'>
					<div className='flex items-center space-x-4'>
						<Avatar sx={{ width: 54, height: 54 }} />
						<div className=''>
							<h4 className='font-medium'>Rahul</h4>
							<p className='text-para'>November 2021</p>
						</div>
					</div>
					<p className='text-para'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Dolorum, odio nam! Perspiciatis accusamus
						exercitationem, itaque voluptatibus aspernatur eligendi
						perferendis quos natus, doloremque unde asperiores nisi
						ipsum alias debitis nihil tempora commodi nulla earum
						aut mollitia a? Repellat, et. Distinctio, aliquam?
					</p>
				</div>
				<div className='space-y-4'>
					<div className='flex items-center space-x-4'>
						<Avatar sx={{ width: 54, height: 54 }} />
						<div className=''>
							<h4 className='font-medium'>Rahul</h4>
							<p className='text-para'>November 2021</p>
						</div>
					</div>
					<p className='text-para'>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Dolorum, odio nam! Perspiciatis accusamus
						exercitationem, itaque voluptatibus aspernatur eligendi
						perferendis quos natus, doloremque unde asperiores nisi
						ipsum alias debitis nihil tempora commodi nulla earum
						aut mollitia a? Repellat, et. Distinctio, aliquam?
					</p>
				</div>
			</div>
			<button className='px-5 py-2 rounded-3xl border border-para underline block mx-auto'>
				Show all 10 reviews
			</button>
		</div>
	);
};

export default PlaceDetailReviews;
