import { Link } from "react-router-dom";

export function InvalidPath(){
    return(
        <div>
            <h1>Criyaa</h1>
            <h5>Looking for something?</h5>
            <p>The Web address you entered is not a functioning page on our site.</p>
            <p>Back to Home<Link to='/'>Home</Link></p>
        </div>
    )
}