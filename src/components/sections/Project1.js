import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Project1() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    };
    return (
        <>
            <section className="project-carousel" id="projects">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="title_all_box style_one text-left blog-btn dark_color">
                            <div className="title_sections">
                                <div className="before_title">Blogs</div>
                                <h2>Blog & Articles</h2>
                            </div>
                            <Link href="#" className="theme-btn two">Read more</Link >
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project_caro_section carousel style_one ">
                                <div className="container">
                                    <div className="swiper-container">
                                        <div className="row justify-content-between">
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="blog__two-item page">
                                                    <div className="blog__two-item-image">
                                                        <img src="/assets/images/blog1.png" alt="image" />
                                                        <div className="blog__two-item-image-date">
                                                            <span className="text-three">10</span>
                                                            <hr />
                                                            <span className="text-five">APR</span>
                                                        </div>
                                                    </div>
                                                    <div className="blog__two-item-content">
                                                        <h4><Link href={`#`}>Revamp Your Business with
                                                            Expert Consulting</Link></h4>
                                                        <p>Experts say some good first steps in
                                                            starting business are researching</p>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="mr_bottom_30" />
                                                {/*===============spacing==============*/}
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="blog__two-item page">
                                                    <div className="blog__two-item-image">
                                                        <img src="/assets/images/blog2.png" alt="image" />
                                                        <div className="blog__two-item-image-date">
                                                            <span className="text-three">12</span>
                                                            <hr />
                                                            <span className="text-five">APR</span>
                                                        </div>
                                                    </div>
                                                    <div className="blog__two-item-content">
                                                        <h4><Link href={`#`}>Drive Business Growth with
                                                            our Consulting</Link></h4>
                                                        <p>Experts say some good first steps in
                                                            starting business are researching</p>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="mr_bottom_30" />
                                                {/*===============spacing==============*/}
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="blog__two-item page">
                                                    <div className="blog__two-item-image">
                                                        <img src="/assets/images/blog3.png" alt="image" />
                                                        <div className="blog__two-item-image-date">
                                                            <span className="text-three">13</span>
                                                            <hr />
                                                            <span className="text-five">APR</span>
                                                        </div>
                                                    </div>
                                                    <div className="blog__two-item-content">
                                                        <h4><Link href={`#`}>Teaching and training
                                                            employees</Link></h4>
                                                        <p>Experts say some good first steps in
                                                            starting business are researching</p>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="mr_bottom_30" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
