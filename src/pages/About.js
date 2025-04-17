
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
                        <p>This website is a space to share Bible studies, blog posts about things I'm learning, and occasionally some services or products I offer.</p>
                    </div>
                <div className="bio-image">
                    {/* You can add an image here */}
                    <div className="placeholder-image">Image Placeholder</div>
                </div>
                </section>
                
                <section className="skills-interests">
                    <h3>Skills & Interests</h3>
                        <ul className="skills-list">
                            <li>Web Development (React, JavaScript)</li>
                            <li>Bible Study and Theology</li>
                            <li>Writing and Teaching</li>
                            <li>[Add your own interests]</li>
                        </ul>
                </section>

                <ContactForm />

        </div>
      </AnimatedPage>
    );
  };
  
  export default About;