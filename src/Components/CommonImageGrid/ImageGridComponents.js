import React from 'react'
import model1 from "../../assets/images/model1.jpg";
import model1hover from '../../assets/images/model1hover.jpg';

const ImageGridComponents = () => {
    return (
        <div className=''>
            <div className='shadow-md group relative transition-all'>
                <img src={model1} alt="model" className=' group-hover:opacity-0 object-cover transition-all duration-500' />
                <img src={model1hover} alt="model" className='block group-hover:opacity-100 opacity-0 absolute top-0 left-0 w-full h-full object-cover transition-all duration-500' />
            </div>
            <div className='py-3 sm:py-3 md:py-4'>
                <div className=' text-base text-center font-light'>Masai Lion Black Shirt</div>
                <div className='pt-2'>
                    <div className='flex items-center justify-center text-[12px] gap-x-2 sm:gap-x-3 md:gap-x-3 flex-wrap sm:flex-nowrap gap-y-1'>
                        <span><s>Rs. 1,199</s></span>
                        <span>Rs. 799</span>
                        <span className='text-[#C20000]'>Save 33%</span>
                    </div>
                </div>
                <div className='pt-2'>
                    <div className=' flex justify-center gap-x-1 sm:gap-x-2 gap-y-1 text-[12px] sm:text-[12px] md:text-[13px] flex-wrap sm:flex-nowrap'>
                        <span className='px-2 md:px-3 py-1 border-[#ebf0f7] border'>30</span>
                        <span className='px-2 md:px-3 py-1 border-[#ebf0f7] border'>30</span>
                        <span className='px-2 md:px-3 py-1 border-[#ebf0f7] border'>30</span>
                        <span className='px-2 md:px-3 py-1 border-[#ebf0f7] border'>30</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ImageGridComponents