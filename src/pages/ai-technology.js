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
            <Layout breadcrumbTitle="AI Technology">
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
                                                <div className="before_title">Revolutionizing Businesses with Intelligent Automation</div>
                                                {/* <div className="title">Our Service</div> */}
                                                <p>At Nidham Consultancy LLC, we specialize in leveraging Artificial Intelligence to empower businesses across diverse industries. Our AI solutions streamline operations, enhance decision-making, and unlock new growth opportunities, driving innovation and efficiency at every step.
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
                                                                <Link href="#" >Personalized AI Tools</Link>
                                                            </h3>
                                                            <p>Crafting AI-driven solutions tailored to your specific goals and operational requirements.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="simple_image_boxes">
                                                    <img src="/assets/images/ai-technology.jpg" className="object-fit-cover-center height_570px" alt="image" />
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
                                                                <Link href="#" >Enhanced Operational Efficiency</Link>
                                                            </h3>
                                                            <p>Automating workflows and reducing manual intervention, saving time and resources.</p>
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
                                                                <Link href="#" >Scalable & Future-Ready Systems</Link>
                                                            </h3>
                                                            <p>Building AI systems that adapt to evolving business needs and technological advancements.</p>
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
                                                    <p>Our approach ensures seamless AI integration and operational excellence.</p>
                                                </div>
                                                {/*===============spacing==============*/}
                                                <div className="pd_bottom_25" />
                                                {/*===============spacing==============*/}
                                                <div className="content_box_cn style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Analyzing Your Needs</Link>
                                                        </h3>
                                                        <p>We begin by understanding your business processes, challenges, and potential areas for AI integration.</p>
                                                    </div>
                                                </div>
                                                <div className="content_box_cn  style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Building Custom AI Models</Link>
                                                        </h3>
                                                        <p>Our team develops and implements AI models tailored to address your pain points and optimize operations.</p>
                                                    </div>
                                                </div>
                                                <div className="content_box_cn  style_one">
                                                    <div className="txt_content">
                                                        <h3>
                                                            <Link href="#" >Ongoing Support & Optimization</Link>
                                                        </h3>
                                                        <p>We ensure continuous monitoring, training, and updates to keep your AI solutions efficient and aligned with your goals.</p>
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
                                                <li><Link href="#">1. Customized AI Solutions</Link> </li>
                                                <li><Link href="#">2. Predictive Analytics</Link> </li>
                                                <li><Link href="#">3. Process Automation</Link> </li>
                                                <li><Link href="#">4. Natural Language Processing (NLP)</Link> </li>
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