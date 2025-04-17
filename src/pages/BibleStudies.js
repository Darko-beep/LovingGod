import { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const studies = [
  {
    id: 1,
    title: "PRAISING GOD",
    description: "Praising GOD is a proof of our love to Him for Who He is and something He has done for us. Praising GOD is also a proof of our love for Him based on the knowledge, understanding, and wisdom acquired through His Word. A person can praise GOD through any Holy Spirit filled songs or words. Appreciating or thanking GOD for His goodness is another way of praising Him (Psalm 18:1, 116:1-2).",
    fullDescription: "Praising GOD is a proof of our love to Him for Who He is and something He has done for us. Praising GOD is also a proof of our love for Him based on the knowledge, understanding, and wisdom acquired through His Word. A person can praise GOD through any Holy Spirit filled songs or words. Appreciating or thanking GOD for His goodness is another way of praising Him (Psalm 18:1, 116:1-2). Praising GOD always connects us to Him because He is Love and He loves those who stay in love ( 1 John 4:8). Praising GOD helps a person's heart to stay Joyful, which strengthens your heart, hardens the attempt of bewitchment or demonic manipulation— the person who loves GOD never sins ( 1 Corinthians 13:4-5, 1 John 3:6, 5:18). Another way of praising GOD is through our obedience to Him, when we obey His commands it is the greatest way to praise Him ( Matthew 22:36-40). David was the man after GOD's heart because of his love for Him since childhood, to become a man after GOD's heart always praises Him ( Psalm 91:14, Isaiah 43:4).",
    lessons: 12,
    level: "Intermediate",
    category: "Spiritual Growth",
    featured: true,
    scriptureReferences: ["Psalm 18:1", "Psalm 116:1-2", "1 John 4:8", "1 Corinthians 13:4-5", "1 John 3:6", "1 John 5:18", "Matthew 22:36-40", "Psalm 91:14", "Isaiah 43:4"]
  },
  {
    id: 2,
    title: "A RELATIONSHIP WITH GOD",
    description: "It is vital to have a personal relationship with GOD before anything else. A father loves his children who have a relationship with him more than those who come to him only for their needs. GOD loves more those who have a relationship with Him which is not only based on asking and giving.",
    fullDescription: "It is vital to have a personal relationship with GOD before anything else. A father loves his children who have a relationship with him more than those who come to him only for their needs. GOD loves more those who have a relationship with Him which is not only based on asking and giving. You benefit when you have a relationship with a man, how much more a relationship with the Almighty GOD. You can know and understand GOD but that is not enough, build a relationship with the Creator of the man to facilitate your life. A relationship with GOD gives you rest because the Father intervenes constantly on your behalf, David never lost a battle ( 2 Samuel 5:17-25, 8:1-18). A relationship with GOD gives ceaseless help with His ways, you don't need to struggle to get knowledge, understanding, and wisdom, He gives Him to you mostly without asking ( 1 Corinthians 12:1-11). There are things GOD showed Peter, John, and James but not the remnants of the disciples, the night of Jesus' transfiguration (Matthew 17:1-9, Mark 9:2-9), there are many things you wouldn't know about GOD unless through a relationship with Him. A relationship with GOD can guarantee a person His covenant, Abraham and David, both got God's covenant as a result of their relationship with HIM. The friend of GOD and the man after the heart of GOD had a personal relationship with the Creator of the Universe. When there is a constant communication between GOD and a person, there is also a continuous revelation of Him and His Word, John on the Island of Patmos ( the book of Revelation). When there is a constant communication between GOD and a man there is also a continuous flow of His Love in you because He is Love ( 1 John 4:8). Cultivate a relationship with the Maker of man to ease your life on earth, a life without the Giver of life is a life deprived of its essentials.",
    lessons: 8,
    level: "Beginner",
    category: "Fundamentals",
    featured: true,
    scriptureReferences: ["2 Samuel 5:17-25", "2 Samuel 8:1-18", "1 Corinthians 12:1-11", "Matthew 17:1-9", "Mark 9:2-9", "1 John 4:8"]
  },
  {
    id: 3,
    title: "HUMILITY",
    description: "James Chapter 4 verse 6 to 7 (NLT) And he gives grace generously. As the Scriptures say, God opposes the proud but gives grace to the humble. So humble yourselves before God. Resist the devil, and he will flee from you. Humble yourselves before the Lord, and he will lift you up in honor.",
    fullDescription: "James Chapter 4 verse 6 to 7 (NLT) And he gives grace generously. As the Scriptures say, God opposes the proud but gives grace to the humble. So humble yourselves before God. Resist the devil, and he will flee from you. Humble yourselves before the Lord, and he will lift you up in honor. Humility is a good character anyone can have, built through the knowledge, understanding, and wisdom of GOD through His Word. Humility is a character that can be also built through the fear of the LORD. No matter how you live your life, if you don't fear GOD, you are not humble. GOD helps anyone who is determined to be humble by His works in the Bible, and by the life of Jesus Christ and His disciples. It is important to be humble knowing that only GOD is the All-Powerful One, knowing that you are a creature of the Creator, knowing that your breath depends on the Almighty GOD,etc. To be humble permits you to inherit much in the Kingdom of GOD on earth because GOD is Meek ( Matthew 5:5). Moses who was a servant of GOD was able to see GOD because of his humility (Numbers Chapter 12 verse 3). Obedience to the commands of GOD is a sign of humility, obedience is never completed without humility. Humility can be rewarded by GOD (James 4:6-7). If someone wants to be humble it is absolutely possible through the Bible, studying about the lives of Biblical personalities whose humility was approved by GOD can lead to humility.",
    lessons: 10,
    level: "All Levels",
    category: "Character Development",
    featured: false,
    scriptureReferences: ["James 4:6-7", "James 4:10", "Matthew 5:5", "Numbers 12:3"]
  },
  {
    id: 4,
    title: "YOUR YOUTH",
    description: "Youth is an important stage of life where the knowledge, understanding of a person are equipped to make decisions, where a person has less responsibilities in life, where a person knows what is good and evil.",
    fullDescription: "Youth is an important stage of life where the knowledge, understanding of a person are equipped to make decisions, where a person has less responsibilities in life, where a person knows what is good and evil. This stage of life is when things accumulated from childhood are put into consideration because the mind is matured enough to make decisions whether good or bad. Most behaviours or lifestyles are considered or taken from the youth which is why it is important to follow GOD at an early stage in life. Life is about choices whether good or evil, the earlier you know and understand GOD, the better the choices you make in life. David was a man after GOD's heart, became a warrior for the people of GOD at his youthful age because he served GOD at his youthful age, this led him to be victorious and prosperous ( 1 Samuel 13:14, 1 Chronicles 29:2-5, Acts 13:22). When you start knowing and understanding GOD at your youth, you grow well in His Love, you get rooted well in the Spirit that helps you not to sin ( 1 John 3:8-10, 4:7-12). The mind is the strength of everyone, the more you feed it with the Word of GOD the better and stronger it becomes. Every person has the responsibility to choose whoever they want to follow or worship, however every decision has its consequences, GOD is the Judge Psalm 75:7.",
    lessons: 6,
    level: "Youth",
    category: "Life Stages",
    featured: false,
    scriptureReferences: ["1 Samuel 13:14", "1 Chronicles 29:2-5", "Acts 13:22", "1 Samuel 16:13", "1 Samuel 17:33", "1 John 3:8-10", "1 John 4:7-12", "Psalm 75:7"]
  },
  {
    id: 5,
    title: "INTIMACY WITH GOD",
    description: "Exodus 33:11 NLT ; Inside the Tent of Meeting, the Lord would speak to Moses face to face, as one speaks to a friend. Afterward Moses would return to the camp, but the young man who assisted him, Joshua son of Nun, would remain behind in the Tent of Meeting.",
    fullDescription: "Exodus 33:11 NLT; Inside the Tent of Meeting, the Lord would speak to Moses face to face, as one speaks to a friend. Afterward Moses would return to the camp, but the young man who assisted him, Joshua son of Nun, would remain behind in the Tent of Meeting. An intimacy with GOD is a personal relationship between GOD and a person who loves Him genuinely. This intimacy with GOD is a personal relationship with Him, where He helps you in your daily endeavours, it is also more than the Father and Son relationship. What makes this relationship different and awesome is the things GOD does, shows or teaches you on a daily basis, this is not always through a leader of a church rather from GOD to you personally. Always desire this relationship with the Almighty GOD, and you will never regret it. Moses is the only man who saw GOD face to face as a result of GOD's relationship with him (Exodus 33:11). There are many things you wouldn't know, discover, see or understand until a deeper relationship with the Creator and Maker of everything. Seek an intimacy with the All-Powerful GOD to enjoy the fullness of life. It is good to know and understand GOD through leaders, pastors, etc, however it is awesome to have an intimacy with the Maker of man.",
    lessons: 7,
    level: "Advanced",
    category: "Spiritual Growth",
    featured: true,
    scriptureReferences: ["Exodus 33:11"]
  },
  {
    id: 6,
    title: "CHRISTIANITY",
    description: "Christianity is loving what GOD did through His Son Jesus Christ, and obeying whatsoever He has commanded us to do in the Bible. In other words Christianity is believing in whatever Jesus Christ did, and willing to obey whatsoever He has commanded us to do until His second coming.",
    fullDescription: "Christianity is loving what GOD did through His Son Jesus Christ, and obeying whatsoever He has commanded us to do in the Bible. In other words Christianity is believing in whatever Jesus Christ did, and willing to obey whatsoever He has commanded us to do until His second coming. The name Christian was derived from Christ our Saviour, meaning we are His followers. Christianity is not a fun religion rather a determined religion, Christ died for our sins irrespective of the hatred, and temptations (Luke 22:42-44). His Life should be an example to all, not just Christians (Hebrews 12:2). Following Jesus Christ is a journey of faith because nobody saw Him yet we have believed in whatever He said and did. Christianity is about portraying the characters of Jesus Christ; Powerful: Walking on the sea Matthew 14:25-26, Jesus ascending to Heaven Acts 1:9, Jesus calming the storm Mark 4:39, Jesus casting our legions of demons Mark 5:1-20. Meek: Jesus at the wedding John 2:4-5, His arrest Matthew 26:52-55, His persecution Mark 15:19-20, Jesus sitting on the ass Matthew 21:5. Love: Jesus fed four thousand people with 5 loaves of bread and few fish Mark 6:31:45, Jesus healed the Canaanite woman irrespective of her tribe Matthew 15:21-28, Jesus died for the sins of everyone John 19:30. Patient: When Jesus was provoked by the Pharisees and the scribes Matthew 15:1-20. Peace: His arrest Matthew 26:52, Jesus instructed Peter to get money from the mouth of the fish Matthew 17:23-27. Many Christians should know that Christianity is all about commitment to GOD and His Ways, so they need both spiritual and physical empowerment on a daily basis. Being a Christian should be a privilege because our GOD is the Almighty One.",
    lessons: 15,
    level: "Beginner",
    category: "Fundamentals",
    featured: false,
    scriptureReferences: ["Luke 22:42-44", "Hebrews 12:2", "Matthew 14:25-26", "Acts 1:9", "Mark 4:39", "Mark 5:1-20", "John 2:4-5", "Matthew 26:52-55", "Mark 15:19-20", "Matthew 21:5", "Mark 6:31-45", "Matthew 15:21-28", "John 19:30", "Matthew 15:1-20", "Matthew 17:23-27"]
  }
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "Fundamentals", name: "Fundamentals" },
  { id: "Spiritual Growth", name: "Spiritual Growth" },
  { id: "Character Development", name: "Character Development" },
  { id: "Life Stages", name: "Life Stages" }
];

const levels = [
  { id: "all", name: "All Levels" },
  { id: "Beginner", name: "Beginner" },
  { id: "Intermediate", name: "Intermediate" },
  { id: "Advanced", name: "Advanced" },
  { id: "Youth", name: "Youth" }
];

const BibleStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedStudy, setExpandedStudy] = useState(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  
  // Filter studies based on selected filters
  const filteredStudies = studies.filter(study => {
    const matchesCategory = selectedCategory === "all" || study.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || study.level === selectedLevel;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          study.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = !showFeaturedOnly || study.featured;
    
    return matchesCategory && matchesLevel && matchesSearch && matchesFeatured;
  });

  const toggleStudyExpansion = (id) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  return (
    <AnimatedPage>
      <div className="page bible-studies">
        <div className="studies-header">
          <h2>Bible Studies</h2>
          <p>In-depth studies of Scripture to help you grow in your faith.</p>
        </div>
        
        {/* Filters Section */}
        <div className="filters-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-options">
            <div className="filter-group">
              <label>Category:</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>Level:</label>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="filter-select"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-checkbox">
              <input
                type="checkbox"
                id="featuredOnly"
                checked={showFeaturedOnly}
                onChange={() => setShowFeaturedOnly(!showFeaturedOnly)}
              />
              <label htmlFor="featuredOnly">Featured Only</label>
            </div>
          </div>
        </div>
        
        {/* Featured Studies Section */}
        {showFeaturedOnly && (
          <div className="featured-section">
            <h3>Featured Studies</h3>
            <div className="featured-banner">
              <p>Our recommended studies to strengthen your faith and deepen your understanding of God's Word.</p>
            </div>
          </div>
        )}
        
        {/* Studies List */}
        <div className="studies-list">
          {filteredStudies.length > 0 ? filteredStudies.map(study => (
            <div key={study.id} className={`study-card ${study.featured ? 'featured' : ''}`}>
              <div className="study-header">
                <h3>{study.title}</h3>
                <div className="study-badges">
                  {study.featured && <span className="featured-badge">Featured</span>}
                  <span className="study-level">{study.level}</span>
                  <span className="study-category">{study.category}</span>
                </div>
              </div>
              
              <p className="study-description">
                {expandedStudy === study.id ? study.fullDescription : study.description}
              </p>
              
              {study.scriptureReferences && expandedStudy === study.id && (
                <div className="scripture-references">
                  <h4>Scripture References:</h4>
                  <div className="references-list">
                    {study.scriptureReferences.map((ref, index) => (
                      <span key={index} className="scripture-badge">{ref}</span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="study-meta">
                <span className="lessons-count">{study.lessons} lessons</span>
                <div className="study-actions">
                  <button 
                    className="expand-button" 
                    onClick={() => toggleStudyExpansion(study.id)}
                  >
                    {expandedStudy === study.id ? "Show Less" : "Show More"}
                  </button>
                  <button className="study-button">Start Study</button>
                </div>
              </div>
            </div>
          )) : (
            <div className="no-results">
              <p>No studies match your current filters. Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
        
        {/* Study Recommendation Section */}
        <div className="recommendation-section">
          <h3>Not sure where to start?</h3>
          <p>Take our quick assessment to get personalized study recommendations based on your spiritual journey.</p>
          <button className="recommendation-button">Take Assessment</button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default BibleStudies;