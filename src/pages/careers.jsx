import dynamic from 'next/dynamic';
import Layouts from "@layouts/Layouts";
import CareersHero from "@components/sections/CareersHero";
import JobPositions from "@components/sections/JobPositions";
import CompanyCulture from "@components/sections/CompanyCulture";
import ApplicationForm from "@components/sections/ApplicationForm";

const Careers = () => {
  return (
    <Layouts contactButton transparent>
      <CareersHero 
        title="Join Our Team"
        subtitle="Build Your Career With Us"
      />
      <JobPositions />
      {/* <CompanyCulture /> */}
      {/* <ApplicationForm /> */}
    </Layouts>
  );
};

export default Careers;