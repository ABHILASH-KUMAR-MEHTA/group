import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from 'next/head'

export default function AboutUs() {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

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
        centeredSlides: true,

        // Navigation
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
            <Head>
                <title>Nidham - About Us</title>
            </Head>

            <Layout breadcrumbTitle="About Us">
                {/*-about-*/}
                <section className="about-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 ">
                                <div className="about_content position-relative z_99">
                                    <div className="title_all_box style_one text-left  dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">We are</div>
                                            <h2>Pioneers of Digital Excellence</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_15" />
                                    {/*===============spacing==============*/}
                                    <div className="extra_content image_with_content dark_color">
                                        <div className="simple_image">
                                            <img src="/assets/images/global.png" alt="img" />
                                            <h2> Since 2022, <br /> Operating globally</h2>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                    <div className="description_box">
                                        <p>Nidham Consultancy LLC, rooted in the United States and now thriving in the UAE, specializes in IT consultancy, cybersecurity, and digital transformation. We empower businesses with innovative strategies to drive growth, enhance security, and achieve lasting success. </p>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_25" />
                                    {/*===============spacing==============*/}
                                    <div className="row gutter_15px">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all  style_two">
                                                <div className="icon_content  icon_imgs ">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-1.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" >Expert IT Consultancy</Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icon_box_all  style_two">
                                                <div className="icon_content  icon_imgs ">
                                                    <div className="icon">
                                                        <img src="/assets/images/icon-img-n-2.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                    <div className="txt_content">
                                                        <h3><Link href="#" >Secure Digital Transformation</Link></h3>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme_btn_all color_one">
                                        <Link href="#" className="theme-btn five">Contact us<i className="icon-right-arrow" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="image_boxes style_two">
                                    <img src="/assets/images/shape-1.png" className="background_image" alt="image" />
                                    <div className="image one">
                                        <img src="/assets/images/about/about-6.png" className="img-fluid" alt="image" />
                                    </div>
                                    <div className="image two">
                                        <img src="/assets/images/about/about-7.png" className="img-fluid" alt="image" />
                                        <div className="video_box">
                                            <VideoBox />
                                        </div>
                                    </div>
                                    <div className="authour_quotes">
                                        <i className="icon-quote" />
                                        <h6>Driving innovation, security, and lasting success globally</h6>
                                        <p>/ Manjula Venugopal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_70" />
                    {/*===============spacing==============*/}
                </section>
                {/*-about end-*/}
                {/*-service-*/}
                <section className="service-icon-section bg_light_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="before_title">Our Business</div>
                                        <h2 className="title">Driving Excellence in IT Solutions</h2>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="simple_image_boxes parallax_cover height_264px">
                                    <img src="/assets/images/icon-img-ab-1.jpg" className="simp_img cover-parallax" alt="image" />
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-bow-and-arrow" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Mission</Link></h3>
                                            <p>To provide innovative IT, cybersecurity, and digital solutions that simplify business challenges, safeguard operations, and drive sustainable growth for our clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-growth" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Core Values</Link></h3>
                                            <p>At the core of Nidham Consultancy LLC are the principles that define who we are and guide everything we do. These values inspire trust, foster innovation, and drive excellence:</p>
                                            <ul>
                                                <li>Integrity</li>
                                                <li>Innovation</li>
                                                <li>Client-Centricity</li>
                                                <li>Excellence</li>
                                                <li>Collaboration</li>
                                            </ul>
                                            <div className="btn_left">
                                                <Link href="#" className="theme-btn one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-binoculars" />
                                        </div>
                                        <div className="txt_content">
                                            <h3><Link href="#" >Our Vision</Link></h3>
                                            <p>To be a globally trusted partner for IT consultancy and digital transformation, enabling businesses to thrive in a rapidly evolving digital world.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="simple_image_boxes  height_264px">
                                    <img src="/assets/images/icon-img-ab-2.jpg" className="simp_img img-fluid" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_top_90" />
                    {/*===============spacing==============*/}
                </section>
                {/*-service end-*/}
                {/*-tab--*/}
                <section className="tab-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/tab-sec-bg.jpg)' }}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_100" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="tabs_all_box  tabs_all_box_start type_one">
                                <div className="tab_over_all_box">
                                    <div className="tabs_header clearfix">
                                        <ul className="showcase_tabs_btns nav-pills nav   clearfix">
                                            <li className="nav-item">
                                                <a className={activeIndex === 1 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(1)}>01. Proven Expertise</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 2 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(2)}>02. Cutting-Edge Innovation</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 3 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(3)}>03. Client-Centric Approach</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 4 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(4)}>04. Global Perspective</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={activeIndex === 5 ? "s_tab_btn nav-link active" : "s_tab_btn nav-link"} onClick={() => handleOnClick(5)}>05. Commitment to Excellence</a>
                                            </li>
                                        </ul>
                                        <div className="toll_free">
                                            <Link href="tel:180667586677"> <i className="icon-phone-call" />Call For Free
                                                Consultation</Link>
                                        </div>
                                    </div>
                                    <div className="s_tab_wrapper">
                                        <div className="s_tabs_content">
                                            <div className={activeIndex === 1 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/tab-image.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Nidham</h6>
                                                        <h2>Proven Expertise</h2>
                                                        <p>With years of experience in IT consultancy, we deliver tailored solutions that drive impactful results.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/blog/blog-image-8.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Nidham</h6>
                                                        <h2>Cutting-Edge Innovation</h2>
                                                        <p>
                                                        We leverage the latest technologies to provide advanced cybersecurity and digital transformation services.
                                                        </p>
                                                        <Link href="#" className="rd_more">
                                                            Read More
                                                            <i className="icon-right-arrow" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/banner-five-bg.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Nidham</h6>
                                                        <h2>Client-Centric Approach</h2>
                                                        <p>Your success is our priority, and we customize strategies to meet your unique needs.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/home-4-about-1.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Nidham</h6>
                                                        <h2>Global Perspective</h2>
                                                        <p>Rooted in the United States and thriving in the UAE, we bring a global outlook to every project.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 5 ? "s_tab fade active-tab show" : "s_tab fade"}>
                                                <div className="tab_content one" style={{ backgroundImage: 'url(/assets/images/image-about-ls.jpg)' }}>
                                                    <div className="content_image">
                                                        <h6>Why Nidham</h6>
                                                        <h2>Commitment to Excellence</h2>
                                                        <p>Our dedication to quality ensures sustainable growth and long-term success for your business.</p>
                                                        <Link href="#" className="rd_more">Read More <i className="icon-right-arrow" /></Link>
                                                    </div>
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
                {/*-tab-end-*/}
                {/*-team-*/}
                <section className="team-section">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="title_all_box style_one  dark_color">
                                    <div className="title_sections">
                                        <div className="before_title"> Dedicated Team</div>
                                        <h2>Professional Individuals</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="description_box">
                                    <p>Our power of choice is untrammelled and when nothing prevents being able to do what we
                                        like best every pleasure.</p>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_one">
                                    <div className="team_box_outer">
                                        <div className="member_image">
                                            <img src="/assets/images/team/team-1.jpg" alt="team image" />
                                        </div>
                                        <div className="about_member">
                                            <div className="share_media">
                                                <ul className="first">
                                                    <li className="text">Share</li>
                                                    <li><i className="fa fa-share-alt" /></li>
                                                </ul>
                                                <ul>
                                                    <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                    <li><Link href="#"> <i className="fa fa-facebook"> </i></Link></li>
                                                    <li><Link href="#"> <i className="fa fa-twitter"> </i></Link></li>
                                                    <li><Link href="#"> <i className="fa fa-skype"> </i></Link></li>
                                                    <li><Link href="#"> <i className="fa fa-instagram"> </i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="authour_details">
                                                <span>Founder &amp; CEO</span>
                                                <h6>Manjula Venugopal</h6>
                                                <div className="button_view">
                                                    <Link href="#" className="theme-btn one"> View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_one">
                                    <div className="team_box_outer">
                                        <div className="member_image">
                                            <img src="/assets/images/team/team-2.jpg" alt="team image" />
                                        </div>
                                        <div className="about_member">
                                            <div className="share_media">
                                                <ul className="first">
                                                    <li className="text">Share</li>
                                                    <li><i className="fa fa-share-alt" /></li>
                                                </ul>
                                                <ul>
                                                    <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                    <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-skype"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link></li>
                                                </ul>
                                            </div>
                                            <div className="authour_details">
                                                <span>Team Leader </span>
                                                <h6>Andrew Cameron</h6>
                                                <div className="button_view">
                                                    <Link href="#" className="theme-btn one"> View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_one">
                                    <div className="team_box_outer">
                                        <div className="member_image">
                                            <img src="/assets/images/team/team-3.png" alt="team image" />
                                        </div>
                                        <div className="about_member">
                                            <div className="share_media">
                                                <ul className="first">
                                                    <li className="text">Share</li>
                                                    <li><i className="fa fa-share-alt" /></li>
                                                </ul>
                                                <ul>
                                                    <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                    <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-skype"> </i> </Link></li>
                                                    <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link></li>
                                                </ul>
                                            </div>
                                            <div className="authour_details">
                                                <span>Manager </span>
                                                <h6>Sofia Charlotte</h6>
                                                <div className="button_view">
                                                    <Link href="#" className="theme-btn one"> View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_60" />
                    {/*===============spacing==============*/}
                </section>
                {/*-team-end-*/}
                {/*-newsteller-*/}
                <section className="newsteller style_one bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_40" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h2>Join Our Mailing List</h2>
                                    <p>For receiving our news and updates in your inbox directly. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="item_scubscribe">
                                    <div className="input_group">
                                        <form className="mc4wp-form" method="post" data-name="Subscibe">
                                            <div className="mc4wp-form-fields">
                                                <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                <input type="submit" defaultValue="Sign up" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </section>
                {/*-newsteller end-*/}

            </Layout>
        </>
    )
}