import './Footer.css'
import { HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer-container">
                <p className='copyright'>&copy; 09-09-2023. Reyhan Rasyid Ziddan</p>
            </footer>
        </div>
    )
}

export default Footer;