import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="crt_mobile_menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}><i className="icon-close" /></div>
                    <form role="search" method="get" action="#">
                        <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                        <button type="submit" className="sch_btn"> <i className="icon-search" /></button>
                    </form>
                    <div className="menu-outer">
                        <ul id="myNavbar" className="navbar_nav">
                            <li className="menu-item   position-static mega_menu nav-item">
                                <Link href="/" className=" nav-link">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/about-us" className="nav-link"><span>About Us</span></Link>
                            </li>
                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                <Link href="#" className="dropdown-toggle nav-link">
                                    <span>Services</span>
                                </Link>
                                <ul className="dropdown-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li className="menu-item  nav-item">
                                        <Link href="/it-consultancy-and-solutions" className="dropdown-item nav-link">
                                            <span>IT Consultancy & Solutions</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/ai-technology" className="dropdown-item nav-link">
                                            <span>AI Technology</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="https://nidham.us/" className="dropdown-item nav-link">
                                            <span>Media Management & Solutions</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/finance-and-tax-consultancy" className="dropdown-item nav-link">
                                            <span>Finance & Tax Consultancy</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/creative-services-web-development" className="dropdown-item nav-link">
                                            <span>Creative Services & Web Development</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/cybersecurity-solutions" className="dropdown-item nav-link">
                                            <span>Cybersecurity Solutions</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/it-infrastructure-solutions" className="dropdown-item nav-link">
                                            <span>IT Infrastructure Solutions</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/" className="dropdown-item nav-link">
                                            <span>Digital Transformation Services</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/cloud-solutions" className="dropdown-item nav-link">
                                            <span>Cloud Solutions</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/tailored-software-solutions" className="dropdown-item nav-link">
                                            <span>Tailored Software Solutions</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fa fa-angle-down" /></div></li>
                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                <Link href="/contact" className="dropdown-toggle nav-link">
                                    <span>Contact Us</span>
                                </Link> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
