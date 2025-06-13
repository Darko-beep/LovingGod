import AnimatedPage from '../components/AnimatedPage';

const About = () => {
    return (
      <AnimatedPage>
        <div className="page about">
            <h2 className="text-center mb-3">About Me</h2>
            
            <section className="bio">
                <div className="bio-content">
                    <h3>My Story</h3>
                    <p>
                        Hello! I'm Ernestina, a passionate entrepreneur with a deep love for sharing God's Word and helping others grow in their faith journey.
                    </p>
                    <p>
                        I am a person whom GOD has saved through diverse ways. He has empowered me to share my journey of faith with others through the help of the Holy Spirit on this website after many trials, traumas, sorrows, and nightmares. 
                    </p>
                    <p>
                        My testimony is one of God's amazing grace and redemption. Through every challenge, He has been faithful, turning my pain into purpose and my tests into testimonies. I pray that GOD would continue to help me as He has always done in my life in Jesus' Name.
                    </p>
                    <p>
                        This platform is born out of a desire to see others experience the transformative power of God's love and to provide resources for spiritual growth and encouragement.
                    </p>
                </div>
                
                <div className="bio-image">
                    <img 
                        src="https://source.unsplash.com/random/400x500/?woman,christian,portrait" 
                        alt="Ernestina - Founder of Loving God"
                        style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                    />
                </div>
            </section>
            
            <section className="mission-vision mt-3">
                <div className="content-grid">
                    <div className="content-card">
                        <h3>🎯 Our Mission</h3>
                        <p>
                            To spread the Gospel of Jesus Christ through digital platforms, providing biblical teachings, 
                            spiritual guidance, and creating a community where believers can grow together in faith.
                        </p>
                    </div>
                    
                    <div className="content-card">
                        <h3>👁️ Our Vision</h3>
                        <p>
                            To see lives transformed by the power of God's Word, raising a generation that loves God 
                            wholeheartedly and impacts their world with the message of hope and salvation.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="values-section mt-3">
                <h3 className="text-center mb-3">Our Core Values</h3>
                <div className="content-grid">
                    <div className="content-card">
                        <div className="topic-icon">📖</div>
                        <h4>Biblical Truth</h4>
                        <p>We stand firmly on the Word of God as our foundation and guide.</p>
                    </div>
                    
                    <div className="content-card">
                        <div className="topic-icon">❤️</div>
                        <h4>Love & Compassion</h4>
                        <p>Showing God's love to everyone, regardless of their background or circumstances.</p>
                    </div>
                    
                    <div className="content-card">
                        <div className="topic-icon">🤲</div>
                        <h4>Service</h4>
                        <p>Dedicated to serving others and meeting their spiritual needs.</p>
                    </div>
                    
                    <div className="content-card">
                        <div className="topic-icon">✨</div>
                        <h4>Excellence</h4>
                        <p>Striving for excellence in all we do for the glory of God.</p>
                    </div>
                </div>
            </section>
            
            <section className="skills-interests">
                <h3 className="text-center mb-3">Areas of Ministry</h3>
                <div className="content-grid">
                    <div className="content-card">
                        <h4>📚 Bible Study and Theology</h4>
                        <p>In-depth exploration of Scripture with practical life applications.</p>
                    </div>
                    
                    <div className="content-card">
                        <h4>✍️ Writing and Teaching</h4>
                        <p>Creating content that educates, inspires, and transforms lives.</p>
                    </div>
                    
                    <div className="content-card">
                        <h4>🙏 Prayer and Intercession</h4>
                        <p>Standing in the gap for others through powerful prayer ministry.</p>
                    </div>
                    
                    <div className="content-card">
                        <h4>💼 Christian Entrepreneurship</h4>
                        <p>Integrating faith with business to create Kingdom impact.</p>
                    </div>
                </div>
            </section>
        </div>
      </AnimatedPage>
    );
};

export default About;
