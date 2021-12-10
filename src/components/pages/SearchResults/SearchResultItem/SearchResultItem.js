import React from 'react';
import { AiFillStar } from "react-icons/ai";

const SearchResultItem = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 pb-5'>
                <div>
                    <img className='p-2 rounded-2xl lg:h-50 w-full md:h-40 object-cover object-center' src="https://i.ibb.co/tCrHsbz/Modern-studio-apartment-design-with-bedroom-and-living-space-Hotel-room-panoramic-window-king-sized.jpg" alt="" />
                </div>
                <div className='col-span-2 flex justify-between items-start p-2'>
                <div>
                    <div className='flex'>
                    <i className='text-green-400'><AiFillStar/></i>
                    <p className='text-xs'>4.91 <span className='text-gray-400'>(147)</span></p>
                
                    </div>

                    <div>
                    <h2 className='text-base font-semibold '>44th Floor Luxury Apertment</h2>
                    <p className='text-sm text-gray-500 font-medium'>Block-E, Road-05, House-55, Uposhohor</p>
                    </div>
                    <br/><br/>

                    <div className='flex text-gray-400 gap-6 text-xs'>
                        <p>2 badrooms</p>
                        <p>96 &#13217;</p>
                        <p>4+ guests</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-red-500 text-lg font-semibold'>$170</h2>
                    <p className='text-gray-400 text-xs'>per night</p>
                    <br/><br/>
                    <button className='text-xs text-red-400 contained bg-red-100 w-16 p-1 rounded-md'>Book now</button>
                </div>
                </div>
            </div>
            
        
        </div>
    );
};

export default SearchResultItem;