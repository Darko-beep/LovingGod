import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BibleStudies from './pages/BibleStudies';
import Gallery from './pages/Gallery';
import './styles/App.css';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="bible-studies" element={<BibleStudies />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;