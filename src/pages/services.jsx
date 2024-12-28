import { useState } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

import { getSortedServicesData } from "@library/services";

import ServiceSection from "@components/sections/ServicePage";
import CallToActionSection from "@components/sections/CallToAction";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      {/* <PageBanner pageTitle={"Services"} pageDesc={"We offer a broad range of services for small and large projects."} /> */}
      <ServiceSection />

      
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