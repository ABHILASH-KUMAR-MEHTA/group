import Link from "next/link";
export default function ProcessSectionCards() {
    return (
        <>
            <section className="process" id="process">
                {/*===============spacing==============*/}
                <div className="pd_top_40" />
                {/*===============spacing==============*/}
                <div className="choose-image"><img src="/assets/images/choose.png" /></div>
                <div className="pd_top_80" />
                <div className="choose-container">
                    <div className="container" style={{ color: '#EFEFEF' }}>
                        <div className="row" >
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <h2 style={{ color: '#EFEFEF' }}>Why Choose Us?</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_30" />
                                <div className="pd_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="container d-flex choose-cards">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="process_box style_two dark_color">
                                        <div className="process_box_outer_two">
                                            <div className="content_box clearfix ">
                                                <div className="icon">
                                                    <div className="img">
                                                        <img src="/assets/images/blog/light.png" style={{ filter: 'brightness(0) invert(1)' }} className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                </div>
                                                <h2>
                                                    <Link href="#" style={{ color: '#EFEFEF' }}>Tailored Solutions <br /> for Every Need</Link>
                                                </h2>
                                            </div>
                                            <div className="pd_top_20"></div>
                                            <p style={{ fontWeight: '300', fontSize: '16px' }}>At Nidham, we understand that every business is unique. We provide customized strategies and solutions that align perfectly with your specific goals, ensuring maximum efficiency and growth.</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_30" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="process_box style_two dark_color">
                                        <div className="process_box_outer_two">
                                            <div className="content_box clearfix ">
                                                <div className="icon">
                                                    <div className="img">
                                                        <img src="/assets/images/blog/politics.png" style={{ filter: 'brightness(0) invert(1)' }} className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                </div>
                                                <h2 className="second_heading">
                                                    <Link href="#" style={{ color: '#EFEFEF' }}>Expertise Across <br />Diverse Domains</Link>
                                                </h2>
                                            </div>
                                            <div className="pd_top_20"></div>
                                            <p style={{ fontWeight: '300', fontSize: '16px' }}>With a team of seasoned professionals specializing in IT, finance, creative services, and event management, Nidham delivers comprehensive expertise that guarantees exceptional results across industries.</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_30" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                    <div className="process_box style_two dark_color">
                                        <div className="process_box_outer_two">
                                            <div className="content_box clearfix">
                                                <div className="icon">
                                                    <div className="img">
                                                        <img src="/assets/images/chooseIcon3.png" className="img-fluid svg_image" alt="icon png" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="second_heading">
                                                        <Link href="#" style={{ color: '#EFEFEF' }}>Commitment to <br />Excellence</Link>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="pd_top_20"></div>
                                            <p style={{ fontWeight: '300', fontSize: '16px' }}>We prioritize client satisfaction and long-term success by adopting a results-driven approach, ensuring that every project exceeds expectations and delivers measurable impact.</p>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_60" />
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
            </section>
        </>
    );
}
