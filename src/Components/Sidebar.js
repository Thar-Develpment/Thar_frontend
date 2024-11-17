import React from 'react';
import { push as Menu } from 'react-burger-menu';
import CircleUser from './svg/CircleUser';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import LinkedIn from './svg/LinkedIn';
import Instagram from './svg/Instagram';
import Fb from './svg/Fb';
import Youtube from './svg/Youtube';
import Twitter from './svg/Twitter';
import Pintrest from './svg/Pintrest';
import { useSelector } from 'react-redux';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const closeNav = () => {
    setIsOpen(false);
  }

  const { isAuthenticated } = useSelector((state) => state.googleAuthState);

  return (
    <div className='sidebar_parent'>
      <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
        <div className='px-3 sm:px-4 md:px-4 lg:px-7 py-2 ms:py-3 md:py-4'>
          <div className=' flex items-center py-3 justify-between pb-5 border-b'>
            <Link className='flex items-center gap-x-3 cursor-pointer' to='/login'>
              <span><CircleUser /></span>
              <span className='text-base'>{isAuthenticated ? "MY ACCCOUNT" : "LOG IN"}</span>
            </Link>
            <div className=' text-md cursor-pointer py-2 px-3' onClick={closeNav}>
              <TfiClose />
            </div>
          </div>
          <ul>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>New Arrivals</Link></li>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>Best Sellers</Link></li>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>New Arrivals</Link></li>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>Track Order</Link></li>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>Place A Return/Exchange Request</Link></li>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>Customer Support</Link></li>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>Visit Store</Link></li>
            <li className=''><Link to="/" className=' pt-2 pb-2 md:py-4 block border-b uppercase tracking-[3px] text-xs sm:text-sm md:text-base'>Relove</Link></li>
          </ul>
        </div>
        <div className=' py-5 px-1'>
          <ul className=' grid grid-cols-2 sm:grid-cols-3 border'>
            <li className=' border-b'><Link to="/" className='flex justify-center py-3 border-r'><span className=' w-[25px] sm:w-[20px]'>< Instagram /></span></Link></li>
            <li className=' border-b'><Link to="/" className='flex justify-center py-3 border-r-0 sm:border-r'><span className=' w-[25px] sm:w-[20px]'><Fb /></span></Link></li>
            <li className=' border-b'><Link to="/" className='flex justify-center py-3 border-r'><span className=' w-[25px] sm:w-[20px]'><Youtube /></span></Link></li>
            <li className=' border-b'><Link to="/" className='flex justify-center py-3 border-r-0 sm:border-r'><span className=' w-[25px] sm:w-[20px] text-black'><Twitter /></span></Link></li>
            <li className=' border-b'><Link to="/" className='flex justify-center py-3 border-r'><span className=' w-[25px] sm:w-[20px]'><Pintrest /></span></Link></li>
            <li ><Link to="/" className='flex justify-center py-3'><span className=' w-[25px] sm:w-[20px]'><LinkedIn /></span></Link></li>
          </ul>
        </div>
      </Menu>
    </div>
  )
}

export default Sidebar