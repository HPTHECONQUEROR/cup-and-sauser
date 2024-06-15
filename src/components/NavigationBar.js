import React, { useRef } from 'react';
import { useContext } from "react";

import Counter from '../components/counter';
import Header from './Header';
import ThemeContext from "../Themes/ThemeContext";



export default function NavigationBar() {
    const { theme } = useContext(ThemeContext);
    const aboutRef = useRef(null);
    const counterRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => (event) => {
        event.preventDefault();
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={{ backgroundColor: theme === 'dark' ? 'white' : '#242424',color:theme === 'dark' ? 'black' : 'white'}}>
            <nav>
                <a  href="#about" class="link-underline-primary" onClick={scrollToSection(aboutRef)}>   About us   </a>
                <a   href="#count" class="link-underline-primary" onClick={scrollToSection(counterRef)}>   Buying page   </a>
                <a href="#contact"  class="link-underline-primary" onClick={scrollToSection(contactRef)}>    Contact    </a>
            </nav>
            <div style={{paddingLeft:"40vh", paddingTop:"10vh", paddingBottom:"12vh"}}>
                <figure class="text-end">
                    <blockquote style={{fontSize:"3vh"}} class="blockquote">
                        <p>Tea, the Slow poison that warms my heart and calms my mind and cures the pain.
                        </p>
                    </blockquote>
                    <figcaption style={{fontSize:"2.5vh"}} class="blockquote-footer">
                        Hari prasath AS
                    </figcaption>
                </figure>
            </div>

            <div ref={aboutRef} style={{  paddingTop:"10vh",paddingBottom: "50vh", textAlign: "center" }}>
                <div className="about-us">
                    <h2>About Us</h2>
                    <p><strong>Welcome to Cup and Sause!</strong></p>
                    <p>At Cup and Sause, we believe in the simple pleasure of a perfectly brewed cup of tea. </p>
                    <p><strong>Our Story</strong></p>
                    <p>Founded by passionate tea enthusiasts, Cup and Sause was born out of a love for the rich traditions and flavors of tea. </p>
                    <p><strong>Our Selection</strong></p>
                    <p>Whether you're a fan of robust black teas, delicate green teas, soothing herbal blends, or rare and exotic oolongs, our curated collection has something for everyone.</p>
                    <p><strong>Quality and Sustainability</strong></p>
                    <p>We are committed to offering only the highest quality teas, free from artificial additives and sourced through sustainable practices.</p>
                    <p><strong>About the Founder</strong></p>
                    <p>Our Founder Hari Prasath is a passionate Tea lover, he enjoys every sip of tea and never wastes it, At starting he tried to become a Data scientist</p>
                    <p>but things are not went good for him so, he decided to start a tea manufacturing firm and succeds in it, now he is owning multiple Tea estates</p>
                </div>
            </div>

            <div>
                <div ref={counterRef} style={{ paddingBottom: 500, textAlign: "center" }}>
                    <Counter />
                </div>
            </div>

            <div ref={contactRef} style={{ paddingBottom: 500, textAlign: "center" }}>
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Whether you have questions about our teas, feel free to get in touch with us.</p>
                    <h3>Office Address</h3>
                    <p>123 Tea Garden Lane<br />Tea City, TC 12345</p>
                    <h3>Email</h3>
                    <p>For any inquiries, you can reach us at: <a href="mailto:hariprasathas@drngpit.ac.in">hariprasathas@drngpit.ac.in</a></p>
                    <h3>Phone</h3>
                    <p>Call us at: <a href="tel:+918056584969">8056584969</a></p>
                    <h3>Website</h3>
                    <p>Visit our website for more information and to explore our tea collection: <a href="http://www.cupandsauser.com" target="_blank" rel="noopener noreferrer">www.cupandsauser.com</a></p>
                </div>
            </div>
        </div>
    );
}
