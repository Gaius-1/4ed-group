import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import Hero3Section from "@components/sections/Hero3";
import AboutSection from "@components/sections/About";
import About3Section from "@components/sections/About3";
import CountersSection from "@components/sections/Counters";
import OwnersSection from "@components/sections/Owners";
import FeaturesSection from "@components/sections/Features";
import EstimatedPriceSection from "@components/sections/EstimatedPrice";
import RenovationSection from "@components/sections/Renovation";
import LocationsSection from "@components/sections/Locations";
import ContactFormSection from "@components/sections/ContactForm";

const HeroSlider = dynamic( () => import("@components/sliders/Hero"), { ssr: false } );
const Projects2Slider = dynamic( () => import("@components/sliders/Projects2"), { ssr: false } );
const CertificatesSlider = dynamic( () => import("@components/sliders/Certificates"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );


const Home1 = (props) => {
  return (
    <Layouts contactButton transparent>
      <>
        {/* video banner */}
        <Hero3Section />
        {/* image slider banner */}
        {/* <HeroSlider /> */}
        <AboutSection />
        <CountersSection />
        <Projects2Slider projects={props.projects} />
        <OwnersSection />
        <About3Section id="exclusive-services"/>
        <FeaturesSection />
        <PartnersSlider />
        <CertificatesSlider />
        <EstimatedPriceSection />
        <RenovationSection />
        <TestimonialSlider />
        <LocationsSection />
        <ContactFormSection />
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}