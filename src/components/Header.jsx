import { Link } from "react-router-dom"

export default function Header({ backgroundImage, title, description }) {
    return (
       <>
       <header id="header" className={backgroundImage} >
            <Link to="/">
                <button id="back">HOME</button>
            </Link>
            <div className="content">
                <h1>{title}</h1>
                <p>{description}</p>  
            </div>
        </header>   
       </> 
    )
}