const ApplicationForm = () => {
  return (
    <section className="application-form gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Apply Now</h2>
              <p>Take the first step towards your next opportunity</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="c-form-2">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="col-lg-6">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="col-lg-6">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="col-lg-6">
                  <select required>
                    <option value="">Select Position</option>
                    <option value="senior-software-engineer">Senior Software Engineer</option>
                    {/* Add more positions */}
                  </select>
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Cover Letter" rows="4"></textarea>
                </div>
                <div className="col-lg-12">
                  <input type="file" accept=".pdf,.doc,.docx" />
                  <small>Upload your CV (PDF, DOC, DOCX)</small>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="theme-btn">Submit Application</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;