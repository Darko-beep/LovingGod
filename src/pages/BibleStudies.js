import AnimatedPage from '../components/AnimatedPage';

const studies = [
  {
    id: 1,
    title: "The Book of Romans",
    description: "A deep dive into Paul's letter to the Romans",
    lessons: 12,
    level: "Intermediate"
  },
  {
    id: 2,
    title: "The Sermon on the Mount",
    description: "Exploring Jesus' teachings in Matthew 5-7",
    lessons: 8,
    level: "Beginner"
  },
  {
    id: 3,
    title: "The Life of David",
    description: "Lessons from the life of King David",
    lessons: 10,
    level: "All Levels"
  }
];

const BibleStudies = () => {
  return (
    <AnimatedPage>
        <div className="page bible-studies">
      <h2>Bible Studies</h2>
      <p>In-depth studies of Scripture to help you grow in your faith.</p>
      
      <div className="studies-list">
        {studies.map(study => (
          <div key={study.id} className="study-card">
            <div className="study-header">
              <h3>{study.title}</h3>
              <span className="study-level">{study.level}</span>
            </div>
            <p className="study-description">{study.description}</p>
            <div className="study-meta">
              <span>{study.lessons} lessons</span>
              <button className="study-button">Start Study</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </AnimatedPage>
  );
};

export default BibleStudies;