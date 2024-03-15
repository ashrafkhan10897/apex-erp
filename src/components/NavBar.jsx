import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";

export default function NavBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor:"#1976d2"}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/dashboard"><h4>Dashboard</h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products"><h4>Products</h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/orders"><h4>Orders</h4></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/calendarview"><h4>Calendar View</h4></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
