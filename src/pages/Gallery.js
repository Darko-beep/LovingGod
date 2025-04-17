import AnimatedPage from "../components/AnimatedPage";

const galleryImages = [
    {
      id: 1,
      title: "Nature Walk",
      description: "Photos from my hike last summer",
      imageCount: 8
    },
    {
      id: 2,
      title: "Family Gathering",
      description: "Our annual family reunion",
      imageCount: 12
    },
    {
      id: 3,
      title: "Mission Trip",
      description: "Photos from our church mission trip",
      imageCount: 20
    }
  ];
  
  const Gallery = () => {
    return (
      <AnimatedPage>
        <div className="page gallery">
          <h2>Gallery</h2>
           <p>A collection of photos from my life and travels.</p>
            
            <div className="gallery-grid">
            {galleryImages.map(album => (
                <div key={album.id} className="gallery-card">
                <div className="gallery-image-placeholder">
                    <span>{album.imageCount} photos</span>
                </div>
                <div className="gallery-info">
                    <h3>{album.title}</h3>
                    <p>{album.description}</p>
                    <button className="view-album">View Album</button>
                </div>
                </div>
            ))}
            </div>
        </div>
      </AnimatedPage>
    );
  };
  
  export default Gallery;