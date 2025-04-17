import AnimatedPage from '../components/AnimatedPage';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    date: "May 15, 2023",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state without writing classes.",
    category: "Web Development",
    readTime: "5 min read",
    image: "https://source.unsplash.com/random/600x400/?react,javascript"
  },
  {
    id: 2,
    title: "The Importance of Daily Devotion",
    date: "April 28, 2023",
    excerpt: "How establishing a daily devotional practice transformed my spiritual life and brought me closer to God.",
    category: "Faith",
    readTime: "8 min read",
    image: "https://source.unsplash.com/random/600x400/?bible,prayer"
  },
  {
    id: 3,
    title: "Modern CSS Techniques You Should Know",
    date: "June 2, 2023",
    excerpt: "Explore powerful CSS features like Grid, Flexbox, and custom properties that will elevate your styling game.",
    category: "Web Development",
    readTime: "7 min read",
    image: "https://source.unsplash.com/random/600x400/?css,design"
  },
  {
    id: 4,
    title: "Finding Balance in a Digital World",
    date: "March 10, 2023",
    excerpt: "Practical tips for maintaining healthy relationships and personal well-being in our technology-driven society.",
    category: "Life",
    readTime: "6 min read",
    image: "https://source.unsplash.com/random/600x400/?balance,meditation"
  }
];

const Blog = () => {
  return (
    <AnimatedPage>
      <div className="page blog">
        <div className="blog-header">
          <h1>My Blog</h1>
          <p className="blog-subtitle">Thoughts on technology, faith, and life in general</p>
          <div className="category-filter">
            <button className="category-btn active">All</button>
            <button className="category-btn">Web Development</button>
            <button className="category-btn">Faith</button>
            <button className="category-btn">Life</button>
          </div>
        </div>
        
        <div className="blog-posts">
          {blogPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="post-image"
                  loading="lazy"
                />
                <div className="post-category-tag">{post.category}</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
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
      </div>
    </AnimatedPage>
  );
};

export default Blog;