import React from 'react'
import Instagram from '../svg/Instagram'
import Fb from '../svg/Fb'
import { Link } from 'react-router-dom'
import Youtube from '../svg/Youtube'
import Pintrest from '../svg/Pintrest'
import LinkedIn from '../svg/LinkedIn'

const SignUp = ({this_class}) => {
  return (
    <div className={`flex flex-col justify-center text-[12px] gap-x-2 ${this_class}`}>
            <div className=' text-center'>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</div>
            <div className=' pt-3 sm:pt-4 max-w-[300px]'>
                <div className=' text-center relative'>
                    <input type="text" placeholder='Enter Your email' className='py-3 pr-20 focus:outline-none border-b-2 border-black placeholder:text-black w-[300px]' />
                    <button className='py-1 px-1 absolute top-1/2 right-2 -translate-y-1/2'>Subscribe</button>
                </div>
            </div>
            <div className='pt-3 sm:pt-4'>
                <div className="flex items-center gap-x-3 sm:gap-x-4">
                    <Link to="/" className=' w-[20px]'><Instagram /></Link>
                    <Link to="/" className=' w-[20px]'><Fb/></Link>
                    <Link to="/" className=' w-[22px]'><Youtube/></Link>
                    <Link to="/" className=' w-[20px]'><Pintrest/></Link>
                    <Link to="/" className=' w-[20px]'><LinkedIn/></Link>
                </div>
            </div>
        </div>
  )
}

export default SignUp