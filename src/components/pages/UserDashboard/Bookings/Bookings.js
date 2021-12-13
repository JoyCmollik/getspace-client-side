import React from 'react';
import { MdCancel, MdOutlineDelete } from 'react-icons/md';

const Bookings = () => {
	return (
		<div>
			<div className='overflow-x-auto'>
				<div className='min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden'>
					<div className='w-full lg:w-5/6'>
						<span className='text-4xl text-gray-700 mt-32'>
							List of Bookings
						</span>
						<div className='bg-white shadow-md rounded my-6'>
							<table className='min-w-max w-full table-auto'>
								<thead>
									<tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
										<th className='py-3 px-6 text-left'>
											Property
										</th>
										<th className='py-3 px-6 text-left'>
											Name
										</th>
										<th className='py-3 px-6 text-left'>
											Guest
										</th>
										<th className='py-3 px-6 text-center'>
											Date
										</th>
										<th className='py-3 px-6 text-center'>
											Status
										</th>
										<th className='py-3 px-6 text-center'>
											Actions
										</th>
									</tr>
								</thead>
								<tbody className='text-gray-600 text-sm font-light'>
									<tr className='border-b border-gray-200 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Grand House
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												28-12-2021
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
												Active
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
									<tr className='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span className='font-medium'>
													ABC Apartment
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												<p>25-12-2021</p>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs'>
												Completed
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
									<tr className='border-b border-gray-200 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Kushiara Apartment
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												<p>29-12-2021</p>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs'>
												Scheduled
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
									<tr className='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Rose view Apartment
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												<p>27-12-2021</p>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs'>
												Pending
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
									<tr className='border-b border-gray-200 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Saint martin house
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												<p>29-12-2021</p>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
												Active
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
									<tr className='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Abc Apartment
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												<p>23-12-2021</p>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs'>
												Scheduled
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
									<tr className='border-b border-gray-200 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span className='font-medium'>
													cba Apartment
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												<p>24-12-2021</p>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs'>
												Pending
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
									<tr className='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Surma House
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left whitespace-nowrap'>
											<div className='flex items-center'>
												<span className='font-medium'>
													Asfia Khan
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-left'>
											<div className='flex items-center'>
												<span>
													1 adult - 0 children
												</span>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex items-center justify-center'>
												<p>25-12-2021</p>
											</div>
										</td>
										<td className='py-3 px-6 text-center'>
											<span className='bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs'>
												Completed
											</span>
										</td>
										<td className='py-3 px-6 text-center'>
											<div className='flex item-center justify-center'>
												<button className='bg-green-500 hover:bg-green-700 text-white text-center  rounded mr-4 px-2'>
													Approve
												</button>
												<button className='bg-red-500 hover:bg-red-700 text-white text-center  rounded mr-2 px-2'>
													Cancel
												</button>
												<div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110 text-2xl'>
													<MdOutlineDelete />
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bookings;
