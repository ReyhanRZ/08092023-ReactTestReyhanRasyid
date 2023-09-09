import './Welcome.css'
import { Link } from "react-scroll";
//import smooth from '././JQuery/smooth-scroll.js'
const Welcome = () => {

    return (
        <div className="welcome">
            <section id="welcome">
                <div className='welcome-content'>
                    <h1 className='welcome-title'>MARI BACA BERITA</h1>
                    <Link className='link-welcome' to="articles" spy={true} smooth={true} offset={50} duration={500}>
                        <h4 className='welcome-read'>READ</h4>
                    </Link>
                </div>

            </section>

        </div>
    )
}

export default Welcome;