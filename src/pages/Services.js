import AnimatedPage from "../components/AnimatedPage";

const Services = () => {
    const services = [
      {
        title: "Web Development",
        description: "Custom website development using modern technologies like React.",
        price: "Starting at $500"
      },
      {
        title: "Bible Study Guides",
        description: "In-depth study guides for personal or group Bible study.",
        price: "$10 each"
      },
      {
        title: "Consulting",
        description: "One-on-one consulting in my areas of expertise.",
        price: "$50/hour"
      }
    ];
  
    return (
      <AnimatedPage>
         <div className="page services">
          <h2>Services & Products</h2>
          <p>Here are some of the services and products I offer:</p>
        
          <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="price">{service.price}</div>
              <button className="inquiry-button">Contact Me</button>
            </div>
          ))}
        </div>
      </div>
      </AnimatedPage>
    );
  };
  
  export default Services;