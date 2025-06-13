import AnimatedPage from "../components/AnimatedPage";

const galleryImages = [
  {
    id: 1,
    title: "Mountain Majesty",
    description: "God's creation displays His glory",
    imageCount: 8,
    coverImage: "https://source.unsplash.com/random/300x200/?mountain,nature",
    scripture: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
    reference: "Psalm 19:1"
  },
  {
    id: 2,
    title: "Still Waters",
    description: "Finding peace in God's presence",
    imageCount: 12,
    coverImage: "https://source.unsplash.com/random/300x200/?lake,peaceful",
    scripture: "He leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:2-3"
  },
  {
    id: 3,
    title: "New Beginnings",
    description: "Sunrise reminders of God's mercies",
    imageCount: 15,
    coverImage: "https://source.unsplash.com/random/300x200/?sunrise,dawn",
    scripture: "His mercies are new every morning; great is your faithfulness.",
    reference: "Lamentations 3:22-23"
  },
  {
    id: 4,
    title: "Harvest Blessings",
    description: "God's provision in every season",
    imageCount: 10,
    coverImage: "https://source.unsplash.com/random/300x200/?harvest,field",
    scripture: "The earth is the Lord's, and everything in it.",
    reference: "Psalm 24:1"
  },
  {
    id: 5,
    title: "Ocean Wonders",
    description: "The vastness of God's love",
    imageCount: 18,
    coverImage: "https://source.unsplash.com/random/300x200/?ocean,waves",
    scripture: "Your love, O Lord, reaches to the heavens, your faithfulness to the skies.",
    reference: "Psalm 36:5"
  },
  {
    id: 6,
    title: "Garden of Prayer",
    description: "Cultivating intimacy with God",
    imageCount: 14,
    coverImage: "https://source.unsplash.com/random/300x200/?garden,flowers",
    scripture: "But I am like an olive tree flourishing in the house of God.",
    reference: "Psalm 52:8"
  },
  {
    id: 7,
    title: "Light in Darkness",
    description: "God's presence in difficult times",
    imageCount: 16,
    coverImage: "https://source.unsplash.com/random/300x200/?light,candle",
    scripture: "The light shines in the darkness, and the darkness has not overcome it.",
    reference: "John 1:5"
  },
  {
    id: 8,
    title: "Family of Faith",
    description: "Fellowship and community in Christ",
    imageCount: 20,
    coverImage: "https://source.unsplash.com/random/300x200/?family,community",
    scripture: "How good and pleasant it is when God's people live together in unity!",
    reference: "Psalm 133:1"
  },
  {
    id: 9,
    title: "Wings of Eagles",
    description: "Soaring on God's strength",
    imageCount: 12,
    coverImage: "https://source.unsplash.com/random/300x200/?eagle,bird",
    scripture: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
    reference: "Isaiah 40:31"
  }
];

const Gallery = () => {
  return (
    <AnimatedPage>
      <div className="page gallery">
        <div className="gallery-header">
          <h2>Gallery of Inspiration</h2>
          <p className="subtitle">
            Visual reminders of God's promises, creation, and faithfulness. 
            Each image is paired with scripture to inspire and strengthen your faith.
          </p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map(album => (
            <div key={album.id} className="gallery-card">
              <div className="gallery-image-container">
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="scripture-overlay">
                  <p className="overlay-scripture">"{album.scripture}"</p>
                  <p className="overlay-reference">{album.reference}</p>
                </div>
                <div className="image-count-badge">
                  <span>{album.imageCount} photos</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3>{album.title}</h3>
                <p className="album-description">{album.description}</p>
                <button className="view-album-btn">
                  View Album <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <section className="gallery-cta mt-3">
          <div className="contact-section">
            <h3>Share Your Testimony</h3>
            <p className="text-center">
              Have a photo that captures God's work in your life? 
              We'd love to feature your testimony and inspire others!
            </p>
            <div className="text-center mt-3">
              <button className="cta-button">Submit Your Story</button>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Gallery;
