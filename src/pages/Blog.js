import AnimatedPage from '../components/AnimatedPage';

const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "May 15, 2023",
      excerpt: "Learn how to use React Hooks to simplify your functional components.",
      category: "Web Development"
    },
    {
      id: 2,
      title: "The Importance of Daily Devotion",
      date: "April 28, 2023",
      excerpt: "How establishing a daily devotional practice changed my spiritual life.",
      category: "Faith"
    }
  ];
  
  const Blog = () => {
    return (
      <AnimatedPage>
          <div className="page blog">
        <h2>Blog</h2>
        <p>Thoughts on technology, faith, and life in general.</p>
        
        <div className="blog-posts">
          {blogPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href=" # " className=" read-more ">Read More → </a>
            </article>
          ))}
        </div>
      </div>
      </AnimatedPage>
    );
  };
  
  export default Blog;