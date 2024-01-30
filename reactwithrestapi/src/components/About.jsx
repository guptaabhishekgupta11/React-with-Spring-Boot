import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our website!</p>
            <p>We are dedicated to providing high-quality services and products to our customers.</p>
            <p>Our team consists of experienced professionals who are passionate about what they do.</p>
            <p>Feel free to explore our website and learn more about our company and offerings.</p>
        </div>
    );
}

export default About;
