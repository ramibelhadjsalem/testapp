import hand from "../assets/hand@2x.png"
import hand2 from "../assets/hand-copy@2x.png"
import arrowright from "../assets/arrow-left-copy.png"
import arrowleft from "../assets/arrow-left.png"
import arrowleft2 from "../assets/arrow-left@3x.png"
import { Link, useParams } from "react-router-dom";
const linkStyle = {
  
    textDecoration: "none",
    
  };
function Joke() {
    const {id} = useParams();
    return ( 
        <div className="jokeglob">
            <div className="back">
                <Link to={"/"} style={linkStyle}>
                    <div>
                            <img src={arrowleft2} alt="back"></img>
                    </div>
               </Link>
            </div>
        
            <div className="jokepath">
                <div className="right">
                    <div className="joke">
                        <div className="type">
                            <span className="typejoke">
                                social
                            </span>
                            <span className="trend">
                                trending
                            </span>
                            
                        </div>
                        <h3 className="title">
                            the Granny Joke
                        </h3>
                        <p>   Contrary to popular belief, <br/>Lorem Ipsum is not simply random text. It has roots in a href="#"piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a href="#"Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,<br/> from a href="#"Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a href="#"treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a href="#"line in section 1.10.32.</p>
                    </div>
                    <div className="btns">
                        <div className="likes">
                            <button className="like">
                                <span className="img"><img src={hand} alt="img"></img></span>
                                <span className="number">189</span>
                            </button>
                            <button className="dislike">
                                <span className="img"><img src={hand2} alt="img2"></img></span>
                                <span className="number">18</span>
                            </button>
                        </div>
                        <div className="navigation">
                            <Link to={`/joke/${parseInt(id)-1}`} style={linkStyle} >
                                <span className="navigate" >
                                    <img src={arrowleft} alt="arrowleft"/>
                                    prev joke
                                </span>
                            </Link>
                            <Link to={`/joke/${parseInt(id)+1}`} style={linkStyle} >
                                    <span className="navigate">
                                    next joke
                                    <img src={arrowright} alt="arrowleft"/>
                                </span>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="top10">

                    <h3 className="title">
                        the top 10 jokes this week
                    </h3>
                    <ul>
                        <li><a href="/">Smoking Joke</a></li>
                        <li><a href="/">My boss Joke</a></li>
                        <li><a href="/">Dirty Millionaire Joke</a></li>
                        <li><a href="/">the annoying neighbour</a></li>
                        <li><a href="/">knock knock</a></li>
                        <li><a href="/">why tyson lips</a></li>
                        <li><a href="/">the drunk police officer</a></li>
                        <li><a href="/">my hip dad (dad joke)</a></li>
                        <li><a href="/"> why not to say in an elevator</a></li>

                    </ul>

                </div>
            </div>
        </div>
     );
}

export default Joke;