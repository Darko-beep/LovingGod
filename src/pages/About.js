
import AnimatedPage from '../components/AnimatedPage';
import ContactForm from '../components/ContactForm';

const About = () => {
    return (
      <AnimatedPage>
        <div className="page about">
            <h2>About Me</h2>
                <section className="bio">
                    <div className="bio-content">
                        <h3>My Story</h3>
                        <p>Hello! I'm Ernestina, a passionate Entrepreneur with a love for sharing knowledge and faith.</p>
                        <p>
                            I am person who GOD has saved through diverse ways, 
                            He has empowered me to share my journey of faith with others 
                            through the Help of the Holy Spirit on this website after many trails, traumas, sorrows, and nightmares. 
                            I pray that GOD would continue to help me as He has always done in my life in Jesus’ Name..
                        </p>
                    </div>
                <div className="bio-image">
                    {/* You can add an image here */}
                    <div className="placeholder-image">Image Placeholder</div>
                </div>
                </section>
                
                <section className="skills-interests">
                    <h3>Skills & Interests</h3>
                        <ul className="skills-list">
                            <li></li>
                            <li>Bible Study and Theology</li>
                            <li>Writing and Teaching</li>
                            <li></li>
                        </ul>
                </section>

                <ContactForm />

        </div>
      </AnimatedPage>
    );
  };
  
  export default About;