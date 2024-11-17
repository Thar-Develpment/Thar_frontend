import React from 'react'
import CommonImageGrid from '../CommonImageGrid/CommonImageGrid'

const MostTrending = () => {
    return (
        <div className='py-2 sm:py-3'>
            <div className='page-container page-padding'>
                <h3 className='common_header uppercase'>Most Trending</h3>
                <CommonImageGrid />
            </div>
        </div>
    )
}

export default MostTrending