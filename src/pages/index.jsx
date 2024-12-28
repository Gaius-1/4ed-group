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
const ProductSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );
const Projects2Slider = dynamic( () => import("@components/sliders/Projects2"), { ssr: false } );
const ProjectsSlider = dynamic( () => import("@components/sliders/Projects"), { ssr: false } );
const CertificatesSlider = dynamic( () => import("@components/sliders/Certificates"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );


const Home1 = (props) => {
  return (
    <Layouts contactButton transparent>
      <>
        {/* image slider banner */}
        <HeroSlider />
        <About3Section id="exclusive-services"/>
        <CountersSection />
        <Hero3Section />
        <Projects2Slider projects={props.projects} />
        <PartnersSlider />
        <ProductSlider />
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