import './Navbar.css'
import { HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 300) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <div className="navbar">
            <header className={navbar ? 'navbar-change' : 'navbar-active'}>
                {/* <img src="https://codetheweb.blog/assets/img/icon2.png"> */}
                <nav className="main-nav">
                    <ul>
                        <li>  <Link className='link-nav' to="welcome" spy={true} smooth={true} offset={50} duration={500}>
                            HO <HomeOutlined /> ME
                        </Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;