import React from 'react'
import ImagesGrid from './CategoryImages/ImagesGrid'

const AllCategories = () => {
    return (
        <div className='pb-2 sm:pb-3'>
            <div className='page-container page-padding'>
                <h3 className='common_header'>ALL CATEGORIES</h3>
                    <ImagesGrid />
            </div>
        </div>
    )
}

export default AllCategories