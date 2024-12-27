const CompanyCulture = () => {
  const cultureItems = [
    {
      icon: "🌟",
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new technologies"
    },
    {
      icon: "🤝",
      title: "Collaborative Spirit",
      description: "Work together in an inclusive and supportive environment"
    },
    {
      icon: "📈",
      title: "Growth Mindset",
      description: "Continuous learning and development opportunities"
    }
  ];

  return (
    <section className="company-culture">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading gap">
              <h2>Our Culture</h2>
              <p>What makes us different</p>
            </div>
          </div>
        </div>
        <div className="row">
          {cultureItems.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="culture-card">
                <span className="culture-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;