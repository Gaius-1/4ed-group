const CareersHero = ({ title, subtitle }) => {
  const styles = {
    parallax: {
      backgroundImage: "url(/img/pattern-2.png)"
    }
  }

  return (
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
  );
};

export default CareersHero;