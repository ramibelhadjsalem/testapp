import {Link} from "react-router-dom"
import path from "../assets/path-copy-2@2x.png"


const linkStyle = {
  
    textDecoration: "none",
    color:"#f9f9f9",
    height:"30px"
    
  };
function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <p>get jokes? Get paid <br/> for submitting!</p>
                
                <Link to='newJoke' style={linkStyle}>
                    <div className="linkStyle">
                        <p className="linkp"> Submit Joke </p>
                        <img src={path} alt="submit"></img>
                    </div>

                </Link>
            </div>
        </footer>
    )
}
export default Footer ; 