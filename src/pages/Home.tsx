import { Link } from "react-router-dom";
import {BsFillArrowRightSquareFill} from "react-icons/bs"

export function Home() {
    return (
    <div>
    <h1 className="my-4">Home</h1>
    <h4 className="my-4"><Link to="/store">Checkout our Store...</Link></h4>
    <BsFillArrowRightSquareFill size={50}/>
    </div>
    )
}