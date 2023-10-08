import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-10 footer'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <div className="stat-title text-4xl font-bold tracking-widest capitalize">
                        comfy
                    </div>
                    <p>Comfy Store Inc.<br/>Providing reliable goods since 1992</p>
                </aside> 
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;