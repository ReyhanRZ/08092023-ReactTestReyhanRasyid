import './Welcome.css'
import { Link } from "react-scroll";
//import smooth from '././JQuery/smooth-scroll.js'
const Welcome = () => {
    return (
        <div className="welcome">
            <section id="welcome">
                <h1>REYHAN RASYID ZIDDAN</h1>
                <Link className='link-welcome' to="articles" spy={true} smooth={true} offset={50} duration={500}>
                    READ
                </Link>
            </section>

        </div>
    )
}

export default Welcome;