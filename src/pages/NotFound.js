import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const NotFound = () => {
  return (
    <AnimatedPage>
        <div className="page not-found">
           <h2>404 - Page Not Found</h2>
           <p>The page you're looking for doesn't exist.</p>
           <Link to="/" className="home-link">Go back to the homepage</Link>
        </div>
    </AnimatedPage>
  );
};

export default NotFound;