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
                    <Link to="/" className="logo">
                        <div className="logo-icon">✝️</div>
                        <span>Loving God</span>
                    </Link>
                    
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
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
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">✝️</div>
                            <h3>Loving God</h3>
                        </div>
                        <p>Spreading the Word of God with love and compassion.</p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <i className="fab fa-facebook-f">f</i>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <i className="fab fa-twitter">t</i>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <i className="fab fa-instagram">i</i>
                            </a>
                            <a href="#" className="social-link" aria-label="YouTube">
                                <i className="fab fa-youtube">y</i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
                            <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Our Services</Link></li>
                            <li><Link to="/bible-studies" style={{ color: 'white', textDecoration: 'none' }}>Bible Studies</Link></li>
                            <li><Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: info@lovinggod.com</p>
                        <p>Phone: +233 XX XXX XXXX</p>
                        <p>Location: Accra, Ghana</p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Subscribe to Our Newsletter</h4>
                        <p>Stay updated with our latest bible studies and blog posts.</p>
                        <form style={{ marginTop: '1rem' }}>
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                style={{ 
                                    padding: '0.5rem', 
                                    borderRadius: '5px', 
                                    border: 'none',
                                    marginRight: '0.5rem' 
                                }} 
                            />
                            <button 
                                type="submit" 
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#FFD700',
                                    color: '#8B4513',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Loving God. All rights reserved. Made with ❤️ and faith.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
