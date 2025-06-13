import AnimatedPage from "../components/AnimatedPage";

const Services = () => {
    const services = [
      {
        icon: "🙏",
        title: "Christian Counseling",
        description: "One-on-one biblical counseling sessions to help you navigate life's challenges with faith and wisdom.",
        price: "Starting at $50/session",
        features: ["Personal guidance", "Biblical perspective", "Confidential support", "Prayer partnership"]
      },
      {
        icon: "📖",
        title: "Bible Study Guides",
        description: "Comprehensive study materials for personal or group Bible study, covering various books and topics.",
        price: "$15 per guide",
        features: ["In-depth analysis", "Discussion questions", "Practical applications", "PDF downloads"]
      },
      {
        icon: "💒",
        title: "Marriage Counseling",
        description: "Pre-marital and marriage counseling based on biblical principles for stronger relationships.",
        price: "$75/session",
        features: ["Couples sessions", "Biblical foundation", "Communication skills", "Conflict resolution"]
      },
      {
        icon: "🎯",
        title: "Life Coaching",
        description: "Faith-based life coaching to help you discover and fulfill God's purpose for your life.",
        price: "$60/hour",
        features: ["Goal setting", "Spiritual growth", "Career guidance", "Personal development"]
      },
      {
        icon: "📚",
        title: "Youth Ministry Resources",
        description: "Materials and guidance for youth leaders and parents to disciple the next generation.",
        price: "$20 per package",
        features: ["Lesson plans", "Activity ideas", "Discussion guides", "Parent resources"]
      },
      {
        icon: "🎤",
        title: "Speaking Engagements",
        description: "Inspirational speaking for churches, conferences, and Christian events.",
        price: "Contact for pricing",
        features: ["Customized messages", "Workshop facilitation", "Testimony sharing", "Q&A sessions"]
      }
    ];
  
    return (
      <AnimatedPage>
        <div className="page services">
          <h2 className="text-center mb-3">Our Services</h2>
          
          <div className="services-intro">
            <p>
              We offer a range of Christian services designed to support your spiritual journey, 
              strengthen your faith, and help you live a life that honors God. Each service is 
              rooted in biblical truth and delivered with love and compassion.
            </p>
          </div>
        
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: '1rem 0',
                  fontSize: '0.9rem',
                  color: '#666'
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.3rem' }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="price">{service.price}</div>
                <button className="inquiry-button">Get Started</button>
              </div>
            ))}
          </div>
          
          <section className="additional-services mt-3">
            <h3 className="text-center mb-3">Additional Services</h3>
            
            <div className="content-grid">
              <div className="content-card">
                <h4>🙌 Prayer Support</h4>
                <p>Submit your prayer requests and our team will stand with you in prayer.</p>
                <p style={{ color: '#27ae60', fontWeight: 'bold' }}>Free Service</p>
              </div>
              
              <div className="content-card">
                <h4>📱 Online Discipleship</h4>
                <p>Weekly online sessions for new believers to grow in their faith journey.</p>
                <p style={{ color: '#27ae60', fontWeight: 'bold' }}>$30/month</p>
              </div>
              
              <div className="content-card">
                <h4>📝 Christian Content Writing</h4>
                <p>Professional writing services for churches, ministries, and Christian organizations.</p>
                <p style={{ color: '#27ae60', fontWeight: 'bold' }}>Contact for quote</p>
              </div>
            </div>
          </section>
          
          <section className="contact-section">
            <h3>Ready to Get Started?</h3>
            <p className="text-center">
              Contact us today to learn more about our services or to schedule a consultation. 
              We're here to support your spiritual journey!
            </p>
            <div className="text-center mt-3">
              <button className="cta-button">Contact Us</button>
            </div>
          </section>
        </div>
      </AnimatedPage>
    );
  };
  
  export default Services;
