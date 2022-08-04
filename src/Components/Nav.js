import { Link} from 'react-router-dom';

import path from "../assets/path.png"
import shape from "../assets/shape.png"
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color:"#f9f9f9"
  };
function Nav() {


    return (
       <nav className="navbar">
            <div className="nav-group">
                <div className="nav-item">
                    <Link   to={"/"} style={linkStyle} >SO FUNKTIONIERT'S</Link>
                </div>
                <div className="nav-item">
                    <Link to={"/"} style={linkStyle}>SONDERANGEBOTE</Link>
                </div>
                <div className="nav-item">
                    <Link to="/" style={linkStyle} >
                        <span className='nav-special'>
                            <img src={shape} alt="shape"/>
                                MEIN BEREICH
                            <img src={path} alt="shape"/>
                        </span>
                    </Link>
                </div>
            </div>
          
       </nav>
    );
  }
export default Nav;