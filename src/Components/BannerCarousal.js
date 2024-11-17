import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from "../assets/images/banner1.jpg";
import banner2 from '../assets/images/banner2.jpg';
const BannerCarousal = () => {

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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
        <div className='h-[60%] sm:h-[60%] md:h-[70%] lg:h-screen '>
            <Slider {...carouselSettings} className='banner_carousal'>
                <img src={banner1} alt="banner_image" className='w-full cursor-pointer h-[60%] sm:h-[60%] md:h-[70%] lg:h-screen object-cover' />
                <img src={banner2} alt="banner_image" className='w-full cursor-pointer h-[60%] sm:h-[60%] md:h-[70%] lg:h-screen object-cover' />
            </Slider>
        </div>
    )
}

export default BannerCarousal