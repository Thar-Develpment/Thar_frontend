import React from 'react'
import { Link } from 'react-router-dom'

const TrackList = () => {
    return (
        <div className=' flex flex-col'>
            <Link to='/'>PLACE RETURN/EXCHANGE REQUEST</Link>
            <Link to='/' className='pt-3'>RETURNS/EXCHANGE POLICY</Link>
            <Link to='/' className='pt-3'>TRACK YOUR ORDER</Link>
        </div>
    )
}

export default TrackList