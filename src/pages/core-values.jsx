import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import CallToActionSection from "@components/sections/CallToAction";
import ImageView from "@components/ImageView";

const CoreValues = () => {
  return (
    <Layouts>
      <ImageView />

      <PageBanner pageTitle={"Core Values"} pageDesc={"Solutions Beyond Expectations.."} />
      
      <AboutSection />

      <ServicesSection />

      {/* Core Values Start */}
      <section className="no-top core-values">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>MAKE A DIFFERENCE</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <div className="data">
                  <h3>Health, Safety & Env. Consciousness </h3>
                  <p>Committed to prioritizing the wellbeing of its employees, clients, and the environment.</p>
                </div>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/green-tech.jpg" alt="Core Values Image 1" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/quality.jpg" alt="Core Values Image 1" />
                  </figure>
                </div>
                <div className="data">
                  <h3>Quality</h3>
                  <p>Delivering high-quality services that exceeds customer expectations.</p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Honesty & Transparency</h3>
                  <p>Truthful, sincere, and open in all business operations..</p>
                </div>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/transparency.jpg" alt="Core Values Image 1" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/integrity.jpg" alt="Core Values Image 1" />
                  </figure>
                </div>
                <div className="data">
                  <h3>Integrity</h3>
                  <p>Upholds high moral principles and ethical standards in all aspects of our business.</p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Innovation</h3>
                  <p>Commitment to innovation and continuous improvement.</p>
                </div>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/innovation.jpg" alt="Core Values Image 1" />
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Core Values End */}

      {/* Gallery Style One Start */}
      <div className="gallery-style-one">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-1.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-1.jpg" alt="Gallery 1" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-2.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-2.jpg" alt="Gallery 2" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-3.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-3.jpg" alt="Gallery 3" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-4.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-4.jpg" alt="Gallery 4" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-5.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-5.jpg" alt="Gallery 5" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-6.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-6.jpg" alt="Gallery 6" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-7.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-7.jpg" alt="Gallery 7" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-8.jpg">
                  <img className="img-fluid w-100" src="/img/gallery-8.jpg" alt="Gallery 8" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Style One End */}

      {/* Innovation Start */}
      <section className="gap innovation">
        <div className="heading">
          <span>MAKE A DIFFERENCE</span>
          <h2>Innovation in Action</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Innovation End */}

      {/* <CallToActionSection /> */}
      
    </Layouts>
  );
};
export default CoreValues;