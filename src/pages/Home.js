import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scriptures = [
    {
      text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "John 3:16"
    },
    {
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "Proverbs 3:5-6"
    },
    {
      text: "I can do all this through him who gives me strength.",
      reference: "Philippians 4:13"
    },
    {
      text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
      reference: "Psalm 23:1-3"
    },
    {
      text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
      reference: "Joshua 1:9"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scriptures.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [scriptures.length]);
  
  return (
    <AnimatedPage>
      <div className="page home">
        <section className="hero">
          <h1>Welcome to Loving God Platform</h1>
          <p className="hero-subtitle">A place of spiritual growth, biblical wisdom, and divine inspiration</p>
          
          <div className="scripture-carousel">
            {scriptures.map((scripture, index) => (
              <div 
                key={index} 
                className={`scripture-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <p className="scripture-text">"{scripture.text}"</p>
                <p className="scripture-reference">{scripture.reference}</p>
              </div>
            ))}
            
            <div className="carousel-indicators">
              {scriptures.map((_, index) => (
                <div 
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
          
          <Link to="/about" className="cta-button">Learn More About My Journey</Link>
        </section>
        
        <section className="recent-content">
          <h2>Recent Updates</h2>
          <div className="content-grid">
            <article className="content-card">
              <div className="topic-icon">📖</div>
              <h3>Latest Bible Study</h3>
              <p>Discover the power of praising God and how it transforms our daily walk with Him.</p>
              <Link to="/bible-studies">Read More →</Link>
            </article>
            
            <article className="content-card">
              <div className="topic-icon">✍️</div>
              <h3>New Blog Post</h3>
              <p>My thoughts about marriage and God's beautiful design for this sacred union.</p>
              <Link to="/blog">Read More →</Link>
            </article>
            
            <article className="content-card">
              <div className="topic-icon">🙏</div>
              <h3>Prayer Requests</h3>
              <p>Submit your prayer requests and let us stand together in faith and intercession.</p>
              <Link to="/services">Learn More →</Link>
            </article>
          </div>
        </section>
        
        <section className="features-section mt-3">
          <h2 className="text-center mb-3">What We Offer</h2>
          <div className="content-grid">
            <div className="content-card">
              <h3>📚 Biblical Teaching</h3>
              <p>In-depth Bible studies and teachings to help you grow in your understanding of God's Word.</p>
            </div>
            
            <div className="content-card">
              <h3>💭 Inspirational Content</h3>
              <p>Daily inspiration through scripture, testimonies, and uplifting messages of faith.</p>
            </div>
            
            <div className="content-card">
              <h3>🤝 Community Support</h3>
              <p>Connect with fellow believers and find encouragement in your spiritual journey.</p>
            </div>
            
            <div className="content-card">
              <h3>🎯 Spiritual Guidance</h3>
              <p>Practical advice and counseling services based on biblical principles.</p>
            </div>
          </div>
        </section>
        
        <section className="contact-section">
          <h3>Connect With Us</h3>
          <p className="text-center mb-3">Have questions or need prayer? We're here for you.</p>
          <ContactForm />
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
