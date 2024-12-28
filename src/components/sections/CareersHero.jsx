import Head from 'next/head';
import Link from "next/link";
import appData from "@data/app.json";

const CareersHero = ({ title, subtitle }) => {
  const styles = {
    parallax: {
      backgroundImage: "url(/images/pattren-6.png)"
    }
  }

  const headTitle = `${appData.settings.siteName} - ${title}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <section className="careers-hero">
        <div className="parallax" style={styles.parallax} />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersHero;