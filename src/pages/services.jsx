import { useState } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      <PageBanner pageTitle={"Services"} pageDesc={"We offer a broad range of services for small and large projects."} />

      {/* <ServicesSection /> */}

      {/* Construction Services Start */}
      {/* <section className="gap construction-services">
        <div className="container">
          <Tab.Container id="services-tab-content" defaultActiveKey="tab-service-0">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="services-nav">
                <h2>Our Scope Of Business</h2>
                <Nav variant="pills" className="nav nav-pills mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-0">Electrical Services</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-1">Civil Services</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="col-lg-8">
              <Tab.Content>
                <Tab.Pane eventKey="tab-service-0" title="Electrical">
                  <figure>
                    <img className="w-100" src="/img/service3.jpeg" alt="Services Nav Image 1" />
                    <figcaption>
                      <h3>Electrical Services</h3>
                      <p>We design, install, test, and commission electrical systems, including preventive and predictivemaintenance. We specialize also in automation involving control systems, PLCs, sensors, HMI, and embedded systems.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-1" title="Civil">
                  <figure>
                    <img className="w-100" src="/img/service7.jpeg" alt="Services Nav Image 2" />
                    <figcaption>
                      <h3>Civil Services</h3>
                      <p>We offer design, construction, infrastructure development, environmental engineering, project management, and maintenance and rehabilitation services.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          </Tab.Container>
        </div>
      </section> */}
      {/* Construction Services End */}

      {/* <CountersSection /> */}

      {/* Video PopUp Start */}
      <div className="gap video-popup">
        <div className="container-fluid g-0">
          <div className="row">
            <figure>
              <img className="w-100" src="/img/transparency.jpg" alt="Video PopUp Image" />
            </figure>
            <a className="video-play-btn" onClick={() => setOpen(true)} style={{"cursor": "pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="56" viewBox="0 0 35 56"> <defs> <clipPath id="clip-video_arrow"> <rect width="35" height="56"/> </clipPath> </defs> <g id="video_arrow" data-name="video arrow" clipPath="url(#clip-video_arrow)"> <path id="Shape_1" data-name="Shape 1" d="M1362,5000.8,1327,4972V5027Z" transform="translate(-1326.998 -4971.996)" fill="rgba(0,0,0,0)"/> <path id="Shape_1_-_Outline" data-name="Shape 1 - Outline" d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z" transform="translate(-1326.998 -4971.996)"/> </g> </svg>
            </a>
          </div>
        </div>
      </div>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId="uemObN8_dcw" onClose={() => setOpen(false)} />
      {/* Video PopUp Start */}

      {/* Service Style Two Start */}
      <section className="gap service-style-two">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>What We Provide</span>
          <h2>Exclusive Services</h2>
        </div>
        <div className='project-style-one addition'>
        <div className="container">
          <div className="row project-slider">
            {props.services.map((item, key) => (
              <div key={`services-item-${key}`} className="col-lg-6 col-md-6 col-sm-12" >
                <div className="project-post">
                  <figure>
                    <img className="w-100" src={item.image} alt={item.title} />
                  </figure>
                  <div className="project-data">
                    <h3>
                      {/* <Link href={`/services/${item.id}`}>{item.title}</Link> */}
                      {item.title}
                    </h3>
                    <p>{item.short.length > 150 ? `${item.short.substring(0, 150)}...` : item.short}</p>
                    {/* <Link className="project-icon" href={`/services/${item.id}`}>
                      <i className="fa-solid fa-angles-right" />
                    </Link> */}
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Two End */}
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}