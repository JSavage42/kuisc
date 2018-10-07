import React from 'react';
import './Footer.css';
import {Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div>
            <Link to="/sponsors">A Special Thank you to our Sponsors</Link>
        </div>
        <div>
            <a href="mailto:president@kuisc.com">Contact the President</a>
        </div>
        <div>
            <small>Copyright &copy; KUISC, 2018</small>
        </div>
    </footer>
);

export default Footer;