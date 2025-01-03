import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const History = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"History"} pageDesc={"Solutions Beyond Expectations.."} />
      
      {/* History Start */}
      <section className="gap history detail-page">
        <div className="heading">
          <span>COMPANY History</span>
          <h2>How We Began?</h2>
        </div>
        <div className="container spacee">
          <div className="timeline" id="timeline">
            <div className="fill" style={{"height": "20px"}}>
              
            </div>
          </div>
          <div className="row left first">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                  <img src="/img/slide1.jpeg" alt="History Image One" />
                </figure>
                <h2>2014</h2>
                <p><span>Company,</span>  was founded to provide civil & electrical engineering services</p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/slide12.jpeg" alt="History Image Two" />
                </figure>
                <h2>2017</h2>
                <p>Opened satellite office in Tarkwa for operational efficiency and client service</p>
              </div>
            </div>
          </div>
          <div className="row full">
            <div className="col-lg-12">
              <div className="h-box">
                <figure>
                  <img src="/img/slide1.jpeg" alt="History Image Six" />
                </figure>
                <h2>2020</h2>
                <p> Became sole distributor for Noja Power switchgear and reclosers in our region</p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/plan.jpeg" alt="History Image Three" />
                </figure>
                <h2>2023</h2>
                <p>Continuously expanding services accross Africa.</p>
              </div>
            </div>
          </div>
          {/* <div className="row left">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                  <img src="/img/articles4.jpeg" alt="History Image Four" />
                </figure>
                <h2>2017</h2>
                <p>starts Safer Together, our safety program that emphasizes people and teamwork.</p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/about1.jpeg" alt="History Image Five" />
                </figure>
                <h2>2021</h2>
                <p>highly collaborative design-build process that is revolutionizing the real estate development lifecycle</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* History End */}
      
      {/* <CallToActionSection /> */}
    </Layouts>
  );
};
export default History;