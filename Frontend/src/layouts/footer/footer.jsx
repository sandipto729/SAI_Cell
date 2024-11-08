import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaTwitter,
    FaGooglePlusG,
    FaLinkedin,
    FaMapMarkerAlt
} from "react-icons/fa";
import "./footer.css";
import footLogo from "./../../assets/36a37f10-b0ec-43a5-861f-07d0c622b367.jpeg";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="footer_top">
                <div className="top_container">
                    <h2>SAI CELL</h2>
                    <h4>
                        The Sai Cell at NIT Durgapur fosters spiritual growth, unity, and service-mindedness, connecting students and alumni with shared values and purpose.
                    </h4>

                </div>
            </div>
            <div className="footer-container">
                <footer className="footer">
                    <div className="footer-top">
                        <div className="comp-logo">
                            <Link className="logo-link" to='/'>
                                <img className="logo-svg" src={footLogo} alt="infoma logo" style={{ color: 'white' }} />
                            </Link>
                        </div>
                        <div className="filler-text">Cultivating Spiritual Wisdom for a Transcendent Life</div>
                        <div className="social">
                            {/* <a className="social-link" href="#">
                                <FaMapMarkerAlt className="fab_logo" aria-hidden="true" style={{ color: '#0d7e20' }} />
                            </a> */}
                            <a className="social-link" href="https://www.linkedin.com/company/saicell-nitdgp/">
                                <FaLinkedin className="fab_logo" aria-hidden="true" style={{ color: '#007bb6' }} />
                            </a>
                            <a className="social-link" href="https://www.facebook.com/saic.nitd">
                                <FaFacebook className="fab_logo" aria-hidden="true" style={{ color: '#3b5998' }} />
                            </a>
                            {/* <a className="social-link" href="#">
                                <FaTwitter className="fab_logo" aria-hidden="true" style={{ color: '#00aced' }} />
                            </a> */}
                            <a className="social-link" href="https://www.instagram.com/saicell_nitdgp?igsh=MXF6Z2kzOWpsZWZtMA==">
                                <FaInstagramSquare  className="fab_logo" aria-hidden="true" style={{ color: "rgb(200, 72, 93)" }} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-grid">
                        {/*<div className="footer-grid-column">
                             <div className="footer-grid-heading">Quick Links</div>
                            <ul className="footer-links-list">
                                <ul className="footer-links-list">
                                    <li>
                                        <a href="#message" className="footer-link">Message from Coordinator</a>
                                    </li>
                                    <li>
                                        <a href="#alumni-glance" className="footer-link">Alumni At a Glance</a>
                                    </li>
                                    <li>
                                        <a href="#services" className="footer-link">Alumni Services</a>
                                    </li>
                                    <li>
                                        <a href="#gallery" className="footer-link">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#showcase-video" className="footer-link">Showcase Video</a>
                                    </li>
                                </ul>

                            </ul>

                        </div> */}
                        {/* <div className="footer-grid-column">
                            <div className="footer-grid-heading">Alumni Support</div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#signup" className="footer-link">Signup or Registration</a>
                                </li>
                                <li>
                                    <a href="#login" className="footer-link">Login for Existing User</a>
                                </li>
                                <li>
                                    <a href="#donation" className="footer-link">Donation / Giving Back</a>
                                </li>
                                <li>
                                    <a href="#invitation" className="footer-link">Send Invitation</a>
                                </li>
                            </ul>

                        </div> */}
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Support</div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#contact" className="footer-link">CONTACT Us</a>
                                </li>
                                <li>
                                    <a href="mailto:saic@nitdgp.ac.in" className="footer-link">MAIL: saic@nitdgp.ac.in</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </footer>
                <div className="footer-copyright">

                    <p>© 2024 - Present SAI. All rights reserved.</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;
