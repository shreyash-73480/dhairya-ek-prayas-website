import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
    const path = useLocation().pathname;
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (event, sectionId) => {
        if (path === '/') {
            event.preventDefault();
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`navbar navbar-expand-lg bg-dark navbar-dark ${isSticky ? "nav-sticky" : ""}`}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Dhairya Ek Prayas Foundation</Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className={`nav-item nav-link ${path === '/' ? "active" : ""}`}>Home</Link>
                        <Link to="/donate" className={`nav-item nav-link ${path === '/donate' ? "active" : ""}`}>Donate</Link>
                        <a href={path === '/' ? '#events' : '/#events'} onClick={(event) => scrollToSection(event, 'events')} className="nav-item nav-link">Events</a>
                        <a href={path === '/' ? '#contact' : '/#contact'} onClick={(event) => scrollToSection(event, 'contact')} className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
