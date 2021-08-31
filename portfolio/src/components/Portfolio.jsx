import React from 'react';
import { useEffect } from 'react';
import '../css/portfolio.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css";

const Portfolio = () => {

    useEffect(() => {
        Aos.init({});
    }, [])

    return (
        <>
            <Home />
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Portfolio
