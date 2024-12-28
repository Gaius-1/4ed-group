import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const Portfolio = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Projects"} pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Our Project One Start */}
      <section className="gap no-top project-completed our-projects-one">
        {props.projects.map((item, key) => (
        <div key={`projects-item-${key}`} className="prj-post">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3><Link href={`/projects/${item.id}`}>{item.title}</Link></h3>
                  <p>{item.short}</p>
                  <div className="loc-date">
                    <div>
                      <span>LOCATION:</span>
                      <span>{item.location}</span>
                    </div>
                    <div>
                      <span>DATE:</span>
                      <span>{item.dates}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}

      </section>
      {/* Our Project One End */}
      
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}