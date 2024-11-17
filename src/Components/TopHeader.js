import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopHeader = () => {
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2800,
        prevArrow: <></>,
        nextArrow: <></>,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     },
        //     {
        //         breakpoint: 770,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    };

    return (
        <div className='bg-black py-2 sm:py-2 md:py-3'>
            <div className='page-container page-padding text-xs sm:text-base'>
                <Slider {...carouselSettings}>
                    <span className='text-white text-center cursor-pointer'>BUY 2 GET 10% OFF USE CODE: DEAL20</span>
                    <span className='text-white text-center cursor-pointer'>BUY 2 GET 10% OFF USE CODE: DEAL20</span>
                    <span className='text-white text-center cursor-pointer'>BUY 2 GET 10% OFF USE CODE: DEAL20</span>
                </Slider>
            </div>
        </div>
    )
}

export default TopHeader