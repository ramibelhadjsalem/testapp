import path from "../assets/path-copy-7@2x.png"

function JokeType(){
    return(
        <div className="row">
            <button className="adult">adult Jokes</button>
            <button className="dad">dad Jokes</button>
            <button className="christmas">chrismtmas Jokes</button>
            <button className="job">job Jokes</button>
            <button className="birthday">birthday Jokes</button>
            <button className="social">social Jokes</button>
            <button className="puns">puns</button>
            <button className="viewall">view all
                <img src={path} alt=""></img>
                </button>
        </div>
    )
}
export default JokeType;