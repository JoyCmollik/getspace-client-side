import React from 'react';
import {MdOutlineBeachAccess} from "react-icons/md";

const CategoryCarouselCard = () => {
    return (
        <div className='w-72'>
            <div className='m-5 p-5 border-2 flex justify-between rounded-2xl'>
				
                
				<div>
                <br/>
                <br/>
                <br/>
					<i className='text-3xl text-gray-700'><MdOutlineBeachAccess/></i>
					<h2 className='font-semibold text-gray-700'>Beach Activity</h2>
					<p className='font-semibold text-xs text-gray-300'>196 Activities</p>
				</div>
                <div>
					<button className='w-8 text-xs bg-red-50 rounded-2xl text-yellow-400 '>4.2</button>
                <br/>
                <br/>
                <br/>
				</div>
			</div>
        </div>
    );
};

export default CategoryCarouselCard;