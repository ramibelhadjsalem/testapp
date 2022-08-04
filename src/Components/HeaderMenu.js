import { Link } from "react-router-dom";
import search from "../assets/search-copy.png"
import greenLight from "../assets/green-light.png"
import blueLignt from "../assets/blue-light.png"
const linkStyle = {
  
    textDecoration: "none",
    
  };

function HeaderMenu(){
    

    return (
        <div className="header">
            <h1>The Joke Bible</h1>
            <p>Daily Laughs for you and yours</p>

            <div className="form-group dropdown">
                <label >
                    <input type="text" name="search" id="search" placeholder="How can i make you laugh today ?" />
                    <span>
                        <img src={search} alt="search"></img>
                    </span> 
                </label>

                <div className="dropdown-content">
                   <ul>
                        <Link style={linkStyle} to={"joke/1"}><li><img src={greenLight} alt="green"/> social jokes ,the crazy teacher</li></Link> 
                        <Link style={linkStyle} to={"joke/1"}><li><img src={blueLignt} alt="blue"/> job jokes: first day of class</li> </Link>
                        <Link style={linkStyle} to={"joke/1"}><li><img src={blueLignt} alt="blue"/> job jokes:sleepy professor</li></Link>
                        <Link style={linkStyle} to={"joke/1"}><li><img src={blueLignt} alt="blue"/> Dad jokes : can you spell that?</li></Link>
                       
                   </ul>
                </div>
            </div>
        </div>
    )
}
export default HeaderMenu  ;