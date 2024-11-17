import React from 'react'
import cat1 from '../../assets/images/shirt.jpg';
const CategoryImageGridComponents = () => {
    return (
        <div className='pt-3 sm:pt-4 lg:pt-5 xl:pt-6 group'>
            <div className='shadow-md relative overflow-hidden'>
                <img src={cat1} alt="category" className=' group-hover:scale-105 object-cover transition-all duration-500' />
            </div>
            <div className='pt-3 sm:pt-3 md:pt-4 text-center'>
                <div className='text-base font-medium'>Shirts</div>
            </div>
        </div>
    )
}

export default CategoryImageGridComponents