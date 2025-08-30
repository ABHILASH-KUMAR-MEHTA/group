import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"

export default function ServiceDetails() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <Layout breadcrumbTitle="IT Consultancy & Solutions">
                <div>
                    <div className="auto-container">
                        <div className="row default_row">
                            <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <main id="main" className="site-main" role="main">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_85" />
                                    {/*===============spacing==============*/}
                                    <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
                                        <div className="title_all_box style_one dark_color">
                                            <div className="title_sections left">
                                                <div className="before_title">IT Consultancy & Solutions</div>
                                                {/* <div className="title">Our Service</div> */}
                                                <p>At Nidham Consultancy LLC, we specialize in providing comprehensive IT consultancy services tailored to meet the unique challenges of your business. Our expert team is dedicated to enabling organizations to achieve operational excellence through cutting-edge technology and strategic IT solutions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row no-space">
                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
                                                {/* <div className="description_box">
                                                    <p>Our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty.</p>
                                                </div> */}
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content ">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon png" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#" >Seamless Cloud Integration</Link>
                                                            </h3>
                                                            <p>Enable businesses to transition to secure and scalable cloud environments, enhancing flexibility and reducing operational costs.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="simple_image_boxes">
                                                    <img src="/assets/images/2.jpg" className="object-fit-cover height_570px" style={{ objectPosition: '-200px' }} alt="image" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-0 ps-lg-0 pe-0 pe-lg-0 ps-xl-3">
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content ">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon png" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#" >Strategic IT Planning</Link>
                                                            </h3>
                                                            <p>Develop comprehensive IT strategies that align with business goals, ensuring seamless technology adoption and long-term growth.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="icon_box_all style_one">
                                                    <div className="icon_content ">
                                                        <div className="icon">
                                                            <img src="/assets/images/icon-image-nike.png" className="img-fluid svg_image" alt="icon png" />
                                                        </div>
                                                        <div className="txt_content">
                                                            <h3>
                                                                <Link href="#" >End-to-End IT Support</Link>
                                                            </h3>
                                                            <p>Offer continuous support for IT systems, including infrastructure management and regular audits, to maintain optimal performance and compliance.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <h3>How We Operate</h3>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_15" />
                                                {/*===============spacing==============*/}
                                                <div className="description_box">
                                                    <p>Our approach ensures seamless IT integration and operational excellence.</p>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="content_box_cn style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Understanding Your Needs</Link>
                                                        </h3>
                                                        <p>We begin by analyzing your current IT landscape, identifying pain points, and clarifying your business objectives.</p>
                                                    </div>
                                                </div>
                                                <div className="content_box_cn  style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Strategizing & Planning</Link>
                                                        </h3>
                                                        <p>Our experts create a tailored IT roadmap, including risk assessments, transformation strategies, and actionable plans.</p>
                                                    </div>
                                                </div>
                                                <div className="content_box_cn  style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Implementing & Supporting</Link>
                                                        </h3>
                                                        <p>We execute the plan with precision, offering continuous support, system optimization, and staff training for sustained success.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_25" />
                                        {/*===============spacing==============*/}
                                        {/* <h3>Service Benefits</h3> */}
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_25" />
                                        {/*===============spacing==============*/}
                                        {/* <div className="faq_section type_two">
                                            <div className="block_faq">
                                                <div className="accordion">
                                                    <dl>
                                                        <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                            Who is Qetus?<span className="icon-play" />
                                                        </dt>
                                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                            <p>
                                                                Nor again is there anyone who loves or pursues or desires to obtain
                                                                pain itself because it is pains but because occasionally circumstances
                                                                occurs great pleasure take a trivial of us.
                                                            </p>
                                                        </dd>
                                                        <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>
                                                            What recruitment services do you offer?<span className="icon-play" />
                                                        </dt>
                                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                            <p>
                                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                            </p>
                                                        </dd>
                                                        <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                            How can I register a job?<span className="icon-play" />
                                                        </dt>
                                                        <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                            <p>
                                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div> */}
                                    </article>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_65" />
                                    {/*===============spacing==============*/}
                                </main>
                            </div>
                            <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                                <div className="service_siderbar side_bar">
                                    {/*===============spacing==============*/}
                                    <div className="pd_top_85" />
                                    {/*===============spacing==============*/}
                                    <div className="widgets_grid_box">
                                        <div className="widget creote_widget_service_list">
                                            <h4 className="widget-title">Our Services Include:</h4>
                                            <ul className="service_list_box">
                                                <li><Link href="#">1. Digital Transformation Planning</Link> </li>
                                                <li><Link href="#">2. Emerging Technology Advisory</Link> </li>
                                                <li><Link href="#">3. IT Budget Preparation</Link> </li>
                                                <li><Link href="#">4. Risk Assessment & Audit</Link> </li>
                                                <li><Link href="#">5. Project Management</Link> </li>
                                                <li><Link href="#">6. Architectural Consultancy</Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <div className="brouchure_box_widget">
                                            <div className="widget_content">
                                                <h3>See what we can do—Download our portfolio.</h3>
                                                <div className="color_white_1 clearfix">
                                                    <Link href="#" className="theme-btn color_white_1 one">Download</Link>
                                                </div>
                                                <img src="/assets/images/broucher-img.jpg" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widgets_grid_box">
                                        <div id="creote-contactus-3" className="widget widget_contactus">
                                            <div className="contact_box_widget widget_box">
                                                <div className="widget_content">
                                                    <img src="/assets/images/service-sidebar-contact-bg.jpg" alt="backgroundimage" />
                                                    <div className="top_section">
                                                        <h3>Have Questions?</h3>
                                                        <p>Nothing prevents our being to what we like. </p>
                                                    </div>
                                                    <div className="bottom_section">
                                                        <Link href="#" className="phone_number">+98 060 712 34</Link>
                                                        <Link href="#" className="mailid">hello@nidham.us</Link>
                                                    </div>
                                                </div>
                                                <Link href="#" className="theme-btn one">Appointment</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="pd_bottom_65" />
                                    {/*===============spacing==============*/}
                                </div>
                            </aside>
                        </div>
                    </div>
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
                </div>

            </Layout>
        </>
    )
}