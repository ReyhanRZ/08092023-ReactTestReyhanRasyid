import './Navbar.css'
import { HomeOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="navbar">
            <header>
                {/* <img src="https://codetheweb.blog/assets/img/icon2.png"> */}
                <nav>
                    <ul>
                        <li><a href="#">HO <HomeOutlined /> ME</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;