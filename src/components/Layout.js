import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };
    
    return (
        <div className="layout">
            <nav>
                <div className="nav-container">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Devotional Guide</Link></li>
                        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/bible-studies" onClick={() => setMenuOpen(false)}>Bible Studies</Link></li>
                        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                    </ul>
                    
                    <ThemeToggle />
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>© {new Date().getFullYear()} <i>Loving God</i> </p>
            </footer>
        </div>
    );
};

export default Layout;