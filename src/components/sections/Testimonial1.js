
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial1() {
    const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-single-one",
            prevEl: ".prev-single-one",
        },
        pagination: {
            el: ".number-pagination",
            clickable: true,
            type: "fraction",
        },
        modules: [Autoplay, Pagination, Navigation],
    };
    return (
        <>
            <section className="testimonial">
                <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                        <div className="image">
                            <div className="testi-layer height_560px img-fluid" style={{
                                backgroundColor: '#00000033',
                                position: 'absolute',
                                zIndex: '1',
                                width: '100%'
                            }}>
                            </div>
                            <img src="/assets/images/testimonial.png" style={{ position: 'relative', height: '579px', width: '100%' }} className="object-fit-cover img-fluid" alt="image" />
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-11 pd_zero" style={{ zIndex: '2' }}>
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                        <div className="testimonial_sec_wrapper pd_left_70">
                            <div className="title_all_box style_one light_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Client's Feedbacks
                                    </div>
                                    <h2>Hear from those we’ve inspired</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="testimonial_sec light_color style_one">
                                <div className="icon_quotes">
                                    <i className="icon-quote" />
                                </div>
                                <div className="col-xxl-8 col-xl-6 col-lg-5 col-md-12">
                                    <div className="swiper-container">

                                        <Swiper {...swiperOptions} navigation={{
                                            prevEl: '.prev-single-one', // Selector for the previous button
                                            nextEl: '.next-single-one', // Selector for the next button
                                        }} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="testimonial_box">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="authour_details  image_yes ">
                                                        <div className="image">
                                                            <img src="/assets/images/testi-3.png" alt="image" />
                                                        </div>
                                                        <div className="details">
                                                            <h2>Jacob Leonardo</h2>
                                                            <span>Senior Manager of Excel Solution</span>
                                                        </div>
                                                    </div>
                                                    <div className="comment">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Nidham.
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial_box">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="authour_details  image_yes ">
                                                        <div className="image">
                                                            <img src="/assets/images/testi-2.png" alt="image" />
                                                        </div>
                                                        <div className="details">
                                                            <h2>Jacob Leonardo</h2>
                                                            <span>Senior Manager of Excel Solution</span>
                                                        </div>
                                                    </div>
                                                    <div className="comment">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Nidham.
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial_box">
                                                    <div className="rating">
                                                        <ul>
                                                            <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="authour_details  image_yes ">
                                                        <div className="image">
                                                            <img src="/assets/images/testi-1.png" alt="image" />
                                                        </div>
                                                        <div className="details">
                                                            <h2>Jacob Leonardo</h2>
                                                            <span>Senior Manager of Excel Solution</span>
                                                        </div>
                                                    </div>
                                                    <div className="comment">
                                                        While running an early stage startup everything feels
                                                        hard, that’s why it’s been so nice to have our accounting
                                                        feel easy. We recommed Nidham.
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </div>
                    {/*-empty column-*/}
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12">
                    </div>
                    {/*-empty column-*/}
                </div>
            </section>

        </>
    )
}
