import React from 'react';

const PlaceDetailReserve = () => {
	return (
		<div className='sticky top-0 py-8'>
			<div className='border box-shadow rounded-3xl p-8 space-y-4'>
				{/* price & reviews */}
				<div className='flex justify-between items-center'>
					<h4 className='text-lg'>
						<span className='text-2xl font-medium'>$86</span> /
						night
					</h4>
					<div className='flex items-center space-x-1 text-sm'>
						<lord-icon
							src='https://cdn.lordicon.com/mdgrhyca.json'
							trigger='loop'
							delay='4000'
							colors='primary:#ff385c,secondary:#ff385c'
							style={{ width: 18, height: 18 }}
						/>
						<p>4.93</p>
						<p className='text-para'>(146 reviews)</p>
					</div>
				</div>
				{/* date picker */}
				<div>
					<form className='grid grid-cols-2 border border-para rounded-lg'>
						<div className='text-xs p-2 border-r border-para'>
							<h4 className='font-medium'>CHECK-IN</h4>
							<p className='text-sm'>
								{new Date().toLocaleDateString()}
							</p>
						</div>
						<div className='text-xs p-2'>
							<h4 className='font-medium'>CHECKOUT</h4>
							<p className='text-sm'>
								{new Date(
									new Date().setDate(new Date().getDate() + 1)
								).toLocaleDateString()}
							</p>
						</div>
						<div className='col-span-2 border-t border-para text-xs p-2'>
							<h4 className='font-medium'>GUESTS</h4>
							<p className='text-sm'>1 guest, 5 infants, 1 pet</p>
						</div>
					</form>
				</div>
				{/* reserve */}
				<button className='text-xl w-full p-2 bg-brand rounded-lg text-white'>
					Reserve
				</button>
				{/* calculations */}
				<ul className='space-y-2'>
					<li className='flex justify-between items-center'>
						<span>$86 x 1 night</span>
						<span>$86</span>
					</li>
					<li className='flex justify-between items-center'>
						<span>Service fee</span>
						<span>$12</span>
					</li>
					<li className='flex justify-between items-center'>
						<span>Occupancy taxes and fees</span>
						<span>$10</span>
					</li>
					<hr />
					<li className='flex justify-between items-center font-medium'>
						<span>Total</span>
						<span>$108</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PlaceDetailReserve;
