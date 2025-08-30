import Link from "next/link"
import Image from "next/image"

export default function Footer1({ }) {
    return (
        <>
            <div className="footer_area" id="footer_contents">
                <div className="footer_widgets_wrap bg_dark-color">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="#" >
                                                <img src="/assets/images/nidham-white-logo.png" className="img-fluid" alt="logo" />
                                            </Link>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_30" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="content_box">
                                            <p>
                                                abhay From AI-powered innovation to cutting-edge cybersecurity, from financial expertise to creative branding, we deliver strategic solutions that drive your business forward.
                                            </p>
                                            <div className="consulting">
                                                <div className="image">
                                                    <img src="/assets/images/authour-image.png" alt="need help" />
                                                </div>
                                                <div className="help_con">
                                                    <h6>Need Help?</h6>
                                                    <h2>
                                                        <Link href="#" > Free Consultation</Link>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets get_in_touch_foo light_color ">
                                    <div className="get_intouch_inrfo">
                                        <div className="foo_cont_inner">
                                            <div className="top">
                                                <h6> Location</h6>
                                                <p>
                                                    Nidham Consultancy LLC, SHAMS ,UAE
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <h6> Contact</h6>
                                                <div className="con_content">
                                                    <h5> Phone :</h5>
                                                    <Link href="tel:+9806071234"> +98 060 712 34</Link>
                                                </div>
                                                <div className="con_content">
                                                    <h5> Mail Us :</h5>
                                                    <Link href="mailto:hello@nidham.us"> hello@nidham.us</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Quick Links</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu ">
                                                <li><Link href="#">Home</Link></li>
                                                <li><Link href="/about-us">About Us</Link></li>
                                                <li><Link href="#">Blogs</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12" style={{ textWrap: 'wrap', display: 'flex !important', flexWrap: 'wrap !important', position: 'relative' }}>
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Services</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_box">
                                            <div className="navigation_foo_inner">
                                                <ul className="menu">
                                                    <li>
                                                        <Link href="/it-consultancy-and-solutions">
                                                            <span>IT Consultancy & Solutions</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ai-technology">
                                                            <span>AI Technology</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://nidham.us/">
                                                            <span>Media Management & Solutions</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/finance-and-tax-consultancy">
                                                            <span>Finance & Tax Consultancy</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/creative-services-web-development">
                                                            <span>Creative Services & Web Development</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/cybersecurity-solutions">
                                                            <span>Cybersecurity Solutions</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/it-infrastructure-solutions" >
                                                            <span>IT Infrastructure Solutions</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <span>Digital Transformation Services</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/cloud-solutions">
                                                            <span>Cloud Solutions</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/tailored-software-solutions">
                                                            <span>Tailored Software Solutions</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Essentials</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li><Link href="#">Careers</Link></li>
                                                <li><Link href="#">Privacy Policy</Link></li>
                                                <li><Link href="#">Terms of Use</Link></li>
                                                <li><Link href="#">Sitemap</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                </div>
                <div className="creote-footer-copyright bg_dark-color_one ">
                    <div className="container ">
                        <div className="row align-items-center ">
                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                {/*===============spacing==============*/}
                                <div className="pd_top_10" />
                                {/*===============spacing==============*/}
                                <div className="footer_copy_content color_white">
                                    Copyright © {new Date().getFullYear()} Nidham | Powered by &nbsp;<span ><Link href="https://nexeor.com/" >
                                        <Image src="/assets/images/nexeor.png" width={20} height={20} style={{ paddingBottom: '2px' }} alt="logo" />
                                    </Link></span>  N E X E O R</div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_10" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-md-end ">
                                {/*===============spacing==============*/}
                                <div className="pd_top_10" />
                                {/*===============spacing==============*/}
                                <div className="footer_copy_content_right">
                                    <div className="social_media_v_one">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span className="fa fa-facebook" />
                                                    <small>facebook</small>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height=".9em"
                                                            viewBox="0 0 512 512"
                                                            style={{ fill: 'white' }}
                                                            className="mb-1"
                                                        >
                                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                        </svg>
                                                    </span>
                                                    <small>twitter</small>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="#">
                                                    <span className="fa fa-instagram" />
                                                    <small>instagram</small>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_10" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
