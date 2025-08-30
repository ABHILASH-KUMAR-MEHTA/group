import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useState } from "react";

export default function HeroSlider1() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const swiperOptions = {
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        onSlideChange: (swiper) => {
            setActiveSlideIndex(swiper.realIndex); // Update the active slide index
        },
    };

    const slideImages = [
        '/assets/images/sliders/image1.png',
        '/assets/images/sliders/image2.webp',
        '/assets/images/sliders/image3.jpg',
    ];

    return (
        <section className="slider style_four nav_position_one">
            <div className="bg-layer"></div>
            <img
                className="image-layer"
                src={slideImages[activeSlideIndex]} // Dynamically set the image based on active slide
                alt="Slide Background"
            />
            <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                <SwiperSlide className="slide-item-content">
                    <div className="slide-item content_left">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="slider_content pd_top_180 pd_bottom_200">
                                        <div className="button_all animate_down">
                                            <Link href="#" className="theme-btn one animated d-inline-block bg-transparent">
                                                Request a Quote
                                            </Link>
                                        </div>
                                        <h1 className="animate_left"> Innovating IT, <br /> Driving Growth </h1>
                                        <p className="description animate_right">
                                            Tailored IT consultancy services to streamline operations and unlock new <br /> opportunities.
                                        </p>
                                        <div className="button_all animate_down">
                                            <Link href="#" className="theme-btn slider-two animated">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item-content">
                    <div className="slide-item content_center">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="slider_content pd_top_180 pd_bottom_200">
                                        <div className="button_all animate_down">
                                            <Link href="#" className="theme-btn one animated d-inline-block bg-transparent">
                                                Request a Quote
                                            </Link>
                                        </div>
                                        <h1 className="animate_left"> Securing Your Digital <br /> World </h1>
                                        <p className="description animate_right">
                                            Advanced cybersecurity solutions to protect your business and ensure seamless <br /> operations.
                                        </p>
                                        <div className="button_all animate_down">
                                            <Link href="#" className="theme-btn slider-two animated">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item-content">
                    <div className="slide-item content_right">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="slider_content pd_top_180 pd_bottom_200">
                                        <div className="button_all animate_down">
                                            <Link href="#" className="theme-btn one animated d-inline-block bg-transparent">
                                                Request a Quote
                                            </Link>
                                        </div>
                                        <h1 className="animate_left"> Transforming Businesses <br /> Digitally </h1>
                                        <p className="description animate_right">
                                            Digital transformation strategies to enhance efficiency and drive sustainable <br /> growth.
                                        </p>
                                        <Link href="#" className="theme-btn slider-two animated _zoomIn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="owl-nav">
                    <div className="owl-prev h1p">
                        <span>‹</span>
                    </div>
                    <div className="owl-next h1n">
                        <span>›</span>
                    </div>
                </div>
            </Swiper>
        </section>
    );
}
