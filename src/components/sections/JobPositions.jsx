import Link from 'next/link';
import jobsData from '@data/sliders/jobs.json';

const JobPositions = () => {
  return (
    <section className="job-positions gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading gap no-top">
              <h2>Open Positions</h2>
              <p>Join our team and be part of something extraordinary</p>
            </div>
          </div>
        </div>
        <div className="row">
          {jobsData.jobs.map((job, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <Link href={`/careers/${job.slug}`}>
                <div className="job-card">
                  <h3>{job.title}</h3>
                  <p className="department">{job.department}</p>
                  <p className="location">{job.location}</p>
                  <div className="compensation">{job.compensation}</div>
                  <span className="apply-btn">Apply Now →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobPositions;