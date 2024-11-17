import React from 'react'
import CommonImageGrid from './CommonImageGrid/CommonImageGrid'

const NewlyAdded = () => {
  return (
    <div className='pb-2 sm:pb-3'>
        <div className='page-container page-padding'>
            <h3 className='common_header pt-3'>NEWLY ADDED</h3>
            <CommonImageGrid />
        </div>
    </div>
  )
}

export default NewlyAdded