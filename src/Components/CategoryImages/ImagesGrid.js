import React from 'react'
import CategoryImageGridComponents from './CategoryImageGridComponents'

const ImagesGrid = () => {
    return (
        <div className='py-4 sm:py-5 lg:py-6'>
            <div className=' grid common_image_grid_col gap-y-0'>
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
                <CategoryImageGridComponents />
            </div>
        </div>
    )
}

export default ImagesGrid