import React from 'react'
import sw from '../../assets/images/showcase1.jpg';
const ShowcaseComponents = () => {
    return (
        <div className='p-[10px] sm:p-[10px] md:p-[15px]'>
            <div className=' shadow-md'>
                <img src={sw} alt="showcase"/>
            </div>
            <div className='py-3 sm:py-3 md:py-4 text-center'>
                <div className='text-base uppercase font-semibold'>POP PRINTS</div>
                <div className='pt-1'>Threads of Art</div>
            </div>
        </div>
    )
}

export default ShowcaseComponents