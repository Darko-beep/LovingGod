import AnimatedPage from "../components/AnimatedPage";

const galleryImages = [
  {
    id: 1,
    title: "Nature Walk",
    description: "Photos from my hike last summer",
    imageCount: 8,
    coverImage: "https://source.unsplash.com/random/300x200/?nature,hike"
  },
  {
    id: 2,
    title: "Family Gathering",
    description: "Our annual family reunion at the lakeside cottage",
    imageCount: 12,
    coverImage: "https://source.unsplash.com/random/300x200/?family,reunion"
  },
  {
    id: 3,
    title: "Mission Trip",
    description: "Photos from our church mission trip to Guatemala",
    imageCount: 20,
    coverImage: "https://source.unsplash.com/random/300x200/?mission,volunteer"
  },
  {
    id: 4,
    title: "City Adventures",
    description: "Exploring urban landscapes and architecture",
    imageCount: 15,
    coverImage: "https://source.unsplash.com/random/300x200/?city,architecture"
  },
  {
    id: 5,
    title: "Beach Vacation",
    description: "Summer getaway to the Caribbean",
    imageCount: 18,
    coverImage: "https://source.unsplash.com/random/300x200/?beach,vacation"
  },
  {
    id: 6,
    title: "Pet Friends",
    description: "My furry companions through the years",
    imageCount: 25,
    coverImage: "https://source.unsplash.com/random/300x200/?pets,dogs,cats"
  }
];



const Gallery = () => {
  return (
    <AnimatedPage>
      <div className="page gallery">
        <div className="gallery-header">
          <h2>My Photo Gallery</h2>
          <p className="subtitle">A collection of moments from my life and travels</p>
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
      </div>
    </AnimatedPage>
  );
};

export default Gallery;