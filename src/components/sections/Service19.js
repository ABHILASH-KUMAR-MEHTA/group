import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "IT Consultancy & Solutions",
      description:
        "Guidance and technical assistance for digital transformation, cloud adoption, and ERP integration to enhance business efficiency.",
      icon: "/assets/images/service/sone.png",
      link: '/it-consultancy-and-solutions'
    },
    {
      id: 2,
      title: "AI Technology",
      description:
        "Tailored artificial intelligence solutions that boost operational performance and streamline industry-specific processes.",
      icon: "/assets/images/service/stwo.png",
      link: '/ai-technology'
    },
    {
      id: 3,
      title: "Media Management & Solutions",
      description:
        "Comprehensive film production services covering pre/post-production and campaign management to achieve global audience reach.",
      icon: "/assets/images/service/cinema.png",
      link: 'https://nidham.us/'
    },
    {
      id: 5,
      title: "Finance & Tax Consultancy",
      description:
        "Financial reporting, strategic tax planning, and compliance services to optimize cash flow and streamline financial operations.",
      icon: "/assets/images/service/sfour.png",
      link: '/finance-and-tax-consultancy'
    },
    {
      id: 6,
      title: "Creative Services & Web Development",
      description:
        "Branding, website development, and marketing campaigns that strengthen identity, engage audiences, and elevate brand visibility.",
      icon: "/assets/images/service/sfive.png",
      link: '/creative-services-web-development'
    },
    {
      id: 7,
      title: "Cybersecurity Solutions",
      description:
        "Robust protection against digital threats, including incident response and data recovery, to safeguard critical information assets.",
      icon: "/assets/images/service/cyber-security.png",
      link: '/cybersecurity-solutions'
    },
    {
      id: 8,
      title: "IT Infrastructure Solutions",
      description:
        "Design, implementation, and management of hardware, software, and network resources for seamless, secure operations.",
      icon: "/assets/images/service/technical-support.png",
      link: '/it-infrastructure-solutions'
    },
    {
      id: 9,
      title: "Digital Transformation Services",
      description:
        "Adoption of cutting-edge technologies and workflows to modernize processes, increase efficiency, and drive business growth.",
      icon: "/assets/images/service/digitalization.png",
      link: '/'
    },
    {
      id: 10,
      title: "Cloud Solutions",
      description:
        "Flexible, scalable online computing resources, storage, databases, and computing power available on demand.",
      icon: "/assets/images/service/cloud.png",
      link: '/cloud-solutions'
    },
    {
      id: 11,
      title: "Tailored Software Solutions",
      description:
        "Custom applications that automate tasks, refine processes, and leverage data insights to support strategic business goals.",
      icon: "/assets/images/service/lightbulb.png",
      link: '/tailored-software-solutions'
    },
  ];

  return (
    <section className="service-section" id="service">
      {/*===============spacing==============*/}
      <div className="pd_bottom_70" />
      {/*===============spacing==============*/}
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h1 className="section-subheading">Services</h1>
          <h2 className="section-heading">Our Services</h2>
        </div>

        {/*===============spacing==============*/}
        <div className="mr_bottom_20" />
        {/*===============spacing==============*/}

        {/* Service Cards */}
        <div className="row gx-4 gy-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4 d-flex align-items-stretch">
              <Link href={service.link} className="service-card w-100">
                <div className="service-icon">
                  <img
                    src={service.icon}
                    alt={service.title}

                  />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <div className="mr_bottom_20" />
                <p className="service-description">{service.description}</p>
                <Link href={service.link} className="read_more2"> Read more </Link>
              </Link>
            </div>
          ))}
        </div>

        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </div>
    </section>
  );
}
