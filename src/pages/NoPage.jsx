import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../pages/Nopage.css";

export default function NoPage(){
    return(
        <div className="not-found-container">
            <Header/>
            <h1 className="heading">404 - Page Not Found</h1>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/dashboard">Go to Home Page</Link>
        </div>
    )
}