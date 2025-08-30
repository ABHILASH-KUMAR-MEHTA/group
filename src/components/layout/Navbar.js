import Link from "next/link"
import { useRouter } from "next/router"
export default function Navbar() {
    const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
            <ul id="myNavbar" className="navbar_nav">
                <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                    <Link href="/" className="nav-link">
                        <span>Home</span>
                    </Link>
                </li>
                <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                    <Link href="/about-us" className="nav-link"><span>About Us</span></Link>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/#" className="dropdown-toggle nav-link">
                        <span>Services</span>
                    </Link>
                    <ul className="dropdown-menu">
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
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/contact" className=" nav-link">
                        <span>Contact Us</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
