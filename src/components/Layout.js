import {Outlet, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = () =>{
    return(
        <div className="layout">
            <nav>
                <ul className= "nav-links" >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/bible-studies">Bible Studies</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><ThemeToggle /></li>
                </ul>

            </nav>


            <main>
                <Outlet/>
            </main>

            <footer>
                <p>© {new Date().getFullYear()} <i>Loving God</i> </p>
            </footer>


        </div>
    );
};

export default Layout;