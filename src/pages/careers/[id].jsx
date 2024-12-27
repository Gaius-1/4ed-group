import { useRouter } from 'next/router';
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ApplicationForm from "@components/sections/ApplicationForm";
import jobsData from '@data/sliders/jobs.json';

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const job = jobsData.jobs.find(job => job.slug === id);

  if (!job) {
    return (
      <Layouts>
        <div className="container py-24">
          <p>Position not found.</p>
        </div>
      </Layouts>
    );
  }

  return (
    <Layouts>
      <PageBanner pageTitle={job.title} pageDesc={`${job.department} · ${job.location}`} />

      <section className="job-details gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Job Overview */}
              <div className="job-overview mb-60">
                <div className="overview-header mb-40">
                  <h3 className="h3">{job.title}</h3>
                  <div className="overview-meta">
                    <span className="department">{job.department}</span>
                    <span className="location">{job.location}</span>
                    <span className="compensation">{job.compensation}</span>
                  </div>
                </div>
                <div className="overview-content">
                  <p className="mb-40">{job.description}</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="job-requirements mb-60 gap">
                <h4 className="h4 mb-20">Requirements</h4>
                <ul className="requirements-list">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="job-responsibilities mb-60">
                <h4 className="h4 mb-20">Responsibilities</h4>
                <ul className="responsibilities-list">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Benefits Sidebar */}
              <div className="job-benefits-card">
                <h4 className="h4 mb-20">Benefits</h4>
                <ul className="benefits-list">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="fa fa-check-circle" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="apply-button-wrapper mt-40">
                  <button 
                    className="theme-btn" 
                    onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {/* <div id="application-form">
        <ApplicationForm jobId={job.id} jobTitle={job.title} />
      </div> */}
    </Layouts>
  );
};

export default JobDetail;