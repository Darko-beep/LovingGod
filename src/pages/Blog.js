import { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const blogPosts = [
  {
    id: 1,
    title: "My Thoughts About Marriage",
    date: "May 20, 2025",
    excerpt: "Marriage is accepting to live with a person biblically. It is a journey that totally requires GOD, and His Ways. Genesis 2:18, 21-24 shows us God's beautiful design for this sacred union.",
    theme: "Life",
    readTime: "5 min read",
    image: "https://source.unsplash.com/random/600x400/?wedding,couple,marriage"
  },
  {
    id: 2,
    title: "The Importance of Daily Devotion",
    date: "April 28, 2025",
    excerpt: "How establishing a daily devotional practice transformed my spiritual life and brought me closer to God. Discover the power of consistent time with the Lord.",
    theme: "Faith",
    readTime: "8 min read",
    image: "https://source.unsplash.com/random/600x400/?bible,prayer,devotion"
  },
  {
    id: 3,
    title: "Finding Purpose in Your Career",
    date: "May 15, 2025",
    excerpt: "How to align your professional life with God's calling. Discovering meaning and purpose in the workplace through faith.",
    theme: "Career",
    readTime: "7 min read",
    image: "https://source.unsplash.com/random/600x400/?work,office,career"
  },
  {
    id: 4,
    title: "Growing in Spiritual Maturity",
    date: "March 10, 2023",
    excerpt: "The journey from spiritual infancy to maturity in Christ. Understanding the stages of spiritual growth and how to progress in your faith.",
    theme: "Spirituality",
    readTime: "10 min read",
    image: "https://source.unsplash.com/random/600x400/?prayer,meditation,spiritual"
  },
  {
    id: 5,
    title: "Overcoming Fear Through Faith",
    date: "May 5, 2025",
    excerpt: "How God's perfect love casts out fear. Biblical strategies for conquering anxiety and living in peace.",
    theme: "Faith",
    readTime: "6 min read",
    image: "https://source.unsplash.com/random/600x400/?courage,faith,victory"
  },
  {
    id: 6,
    title: "Building Godly Relationships",
    date: "April 20, 2025",
    excerpt: "The biblical foundation for healthy relationships. How to cultivate friendships that honor God and encourage spiritual growth.",
    theme: "Life",
    readTime: "8 min read",
    image: "https://source.unsplash.com/random/600x400/?friends,community,fellowship"
  },
  {
    id: 7,
    title: "The Power of Forgiveness",
    date: "April 10, 2025",
    excerpt: "Understanding God's forgiveness and extending it to others. Breaking free from the chains of unforgiveness.",
    theme: "Spirituality",
    readTime: "9 min read",
    image: "https://source.unsplash.com/random/600x400/?forgiveness,healing,peace"
  },
  {
    id: 8,
    title: "Excellence in the Workplace",
    date: "March 25, 2025",
    excerpt: "Working as unto the Lord: How to be a witness for Christ through excellence and integrity in your career.",
    theme: "Career",
    readTime: "7 min read",
    image: "https://source.unsplash.com/random/600x400/?success,excellence,achievement"
  }
];

const themes = [
  { id: "all", name: "All", icon: "📚" },
  { id: "Faith", name: "Faith", icon: "🙏" },
  { id: "Life", name: "Life", icon: "🌱" },
  { id: "Career", name: "Career", icon: "💼" },
  { id: "Spirituality", name: "Spirituality", icon: "✨" }
];

const Blog = () => {
  const [selectedTheme, setSelectedTheme] = useState("all");
  
  const filteredPosts = selectedTheme === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.theme === selectedTheme);
  
  return (
    <AnimatedPage>
      <div className="page blog">
        <div className="blog-header">
          <h1>Loving God Blog</h1>
          <p className="blog-subtitle">
            Insights on faith, life, and spiritual growth from a biblical perspective
          </p>
          
          <div className="theme-filter">
            {themes.map(theme => (
              <button 
                key={theme.id}
                className={`theme-btn ${selectedTheme === theme.id ? 'active' : ''}`}
                onClick={() => setSelectedTheme(theme.id)}
              >
                <span style={{ marginRight: '0.5rem' }}>{theme.icon}</span>
                {theme.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="blog-posts">
          {filteredPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="post-image"
                  loading="lazy"
                />
                <div className="post-theme-tag">{post.theme}</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">📅 {post.date}</span>
                  <span className="post-read-time">⏱️ {post.readTime}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more-link">
                  Read More <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="no-results">
            <p>No posts found in this category. Check back soon for new content!</p>
          </div>
        )}
        
        <section className="blog-cta mt-3">
          <div className="contact-section">
            <h3>Have a Topic Suggestion?</h3>
            <p className="text-center">
              We'd love to hear what topics you'd like us to explore. 
              Send us your suggestions and questions!
            </p>
            <div className="text-center mt-3">
              <button className="cta-button">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Blog;
