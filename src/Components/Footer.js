import React, { useState } from 'react'
import Diretion from './FooterComponents/Diretion';
import Arrow from './svg/Arrow';
import FooterNavLink from './FooterComponents/FooterNavLink';
import TrackList from './FooterComponents/TrackList';
import CustomerCare from './FooterComponents/CustomerCare';
import SignUp from './FooterComponents/SignUp';
const Footer = () => {
    const [storeOpen, setStoreOpen] = useState(false);
    const [customerOpen, setCustomerOpen] = useState(false);
    const [signOpen, setSignOpen] = useState(false);

    const opentab = (condition) => {
        if (condition === 'store') {
            setStoreOpen(!storeOpen);
        } else if (condition === 'customer') {
            setCustomerOpen(!customerOpen);
        } else if (condition === 'signup') {
            setSignOpen(!signOpen);
        }
    }
    return (
        <div className='py-3 sm:py-4 md:py-8 lg:py-14 border-t border-t-slate-200'>
            <div className='page-padding page-container'>
                <div className='block sm:block md:hidden'>
                    <div className=' border-t-slate-200 border-b'>
                        <div className='py-1'>
                            <div onClick={() => opentab('store')} className='text-center uppercase tracking-wider text-[13px] py-3 sm:py-4 cursor-pointer mb-2 flex justify-center relative'>
                                Visit Store
                                <span className={`absolute top-1/2 right-2 -translate-y-1/2 w-[12px] transition-all duration-300 ${storeOpen ? " rotate-180" : ""}`}><Arrow /></span>
                            </div>
                                <div className={`${storeOpen ? 'slide-down-open pb-4' : 'slide-down pb-0'}`}>
                                    <Diretion parent_class="flex justify-center items-center  gap-x-2" />
                                </div>
                        </div>
                    </div>
                    <div className='py-4 sm:py-5 text-center text-[13px] border-t-slate-200 border-b'>
                        <FooterNavLink />
                    </div>
                    <div className='py-4 sm:py-5 text-center text-[13px] border-t-slate-200 border-b'>
                        <TrackList />
                    </div>
                    <div className=' border-t-slate-200 border-b'>
                        <div className='py-1'>
                            <div onClick={() => opentab('customer')} className='text-center uppercase tracking-wider text-[13px] py-3 sm:py-4 cursor-pointer mb-2 flex justify-center relative'>
                                CUSTOMER CARE
                                <span className={`absolute top-1/2 right-2 -translate-y-1/2 w-[12px] transition-all duration-300 ${customerOpen ? " rotate-180" : ""}`}><Arrow /></span>
                            </div>
                            <div className={`${customerOpen ? 'slide-down-open pb-4 ' : 'slide-down pb-0'}`}>
                                <CustomerCare this_class="items-center" />
                            </div>
                        </div>
                    </div>
                    <div className=' border-t-slate-200 border-b'>
                        <div className='py-1'>
                            <div onClick={() => opentab('signup')} className='text-center uppercase tracking-wider text-[13px] py-3 sm:py-4 cursor-pointer mb-2 flex justify-center relative'>
                                Sign up and save
                                <span className={`absolute top-1/2 right-2 -translate-y-1/2 w-[12px] transition-all duration-300 ${signOpen ? " rotate-180" : ""}`}><Arrow /></span>
                            </div>

                            <div className={`${signOpen ? 'slide-down-open pb-4 ' : 'slide-down pb-0'}`}>
                                <SignUp this_class="items-center" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='hidden sm:hidden md:block'>
                    <div className=' grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-y-12'>
                        <div>
                            <span className='uppercase tracking-wider text-[13px]'> Visit Store</span>
                            <div className="pt-4">
                                <Diretion parent_class="flex justify-start items-center  gap-x-2" />
                            </div>
                        </div>
                        <div className=' text-xs'>
                            <FooterNavLink />
                        </div>
                        <div className=' text-xs'>
                            <TrackList />
                        </div>
                        <div className=' text-sm'>
                            <span className='uppercase tracking-wider text-[13px]'> CUSTOMER CARE</span>
                            <div className='pt-5'>
                                <CustomerCare this_class="items-baseline" />
                            </div>
                        </div>
                    </div>
                    <div className=' pt-7'>
                        <span className='uppercase tracking-wider text-[13px]'> Sign up and save</span>
                        <SignUp this_class="items-baseline" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer