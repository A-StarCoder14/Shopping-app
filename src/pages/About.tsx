import { Link } from "react-router-dom";
import {BsFillArrowRightSquareFill} from "react-icons/bs"

export function About() {
    return (
   <div>
    <h1 className="my-4">About</h1>
    <h4>What are you waiting for?! </h4>
    <h4 className="my-4"><Link to="/store">Click here and checkout our Store Now!!!</Link></h4>
        <BsFillArrowRightSquareFill size={50}/>
    </div>
    )
}