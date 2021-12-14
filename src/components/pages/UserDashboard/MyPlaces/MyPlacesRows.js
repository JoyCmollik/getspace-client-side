import React from 'react';
import { BsStar } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const MyPlacesRows = () => {
	return (
		<div>
			<div className='py-10 items-center'>
				<tbody className='h-28 p-4 grid grid-rows-3 grid-flow-col  text-xl  border-2 border-gray-200 '>
					<tr className='flex justify-around'>
						<td className='py-5'>4505</td>
						<td>
							<img
								className='w-full h-20'
								src='https://wp.getgolo.com/country-guide/wp-content/uploads/sites/6/2021/06/0-lokk1-150x150.jpeg'
								alt=''
							/>
						</td>
						<td className='py-5 hover:text-blue-600'>fffff</td>
						<td className='py-5'>---</td>
						<td className='py-5 hover:text-blue-600'>See & Do</td>
						<td className='py-5'>
							<i className='text-2xl'>
								<BsStar />
							</i>
						</td>
						<td className='py-5 font-bold text-yellow-400'>
							Pending
						</td>
						<td className='py-5 flex gap-4 '>
							<i className='text-2xl hover:text-blue-600'>
								<FiEdit />
							</i>
							<i className='text-2xl hover:text-blue-600'>
								<RiDeleteBinLine />
							</i>
						</td>
					</tr>
				</tbody>
			</div>
		</div>
	);
};

export default MyPlacesRows;
