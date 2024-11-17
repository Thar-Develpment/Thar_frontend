import React from 'react'
import ShowcaseComponents from './ShowcaseComponents'

const Showcase = () => {
  return (
    <div className='py-4 sm:py-5 lg:py-6'>
        <div className='page-secondary-container'>
            <div className='grid common_image_grid_col items-center'>
                <ShowcaseComponents />
                <ShowcaseComponents />
                <ShowcaseComponents />
                <ShowcaseComponents />
            </div>
        </div>
    </div>
  )
}

export default Showcase