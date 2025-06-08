import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  return (
    <AnimatedPage>
      <div className="page home">
        <section className="hero">
            <h1>Welcome to <i>Loving God </i>Platform</h1>
            <p>This is a platform full of knowledge and understanding of God's Word</p>
            <Link to="/about" className="cta-button">Learn more about my jornry as a young christian</Link>
        </section>
        
        <section className="recent-content">
            <h2>Recent Updates</h2>
                <div className="content-grid">
                    <article className="content-card">
                        <h3>Latest Bible Study</h3>
                        <p>Exploring the Book of Romans...</p>
                        <Link to="/bible-studies">Read More</Link>
                    </article>
                <article className="content-card">
                    <h3>New Blog Post</h3>
                    <p>My thoughts on modern web development...</p>
                    <Link to="/blog">Read More</Link>
                </article>
                </div>
        </section>
        </div>
    </AnimatedPage>
  );
};

export default Home;