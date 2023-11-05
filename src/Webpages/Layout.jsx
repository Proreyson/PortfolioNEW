import { Outlet, Link } from "react-router-dom";
import profileImage from "../assets/navprofile2.png";
import Home from "./Home";

function Layout() {
  return (
    <>
      <div className="hero">
        <nav className="navbar navbar-expand-lg pt-5">
          <div className="container-fluid">
            <Link to="/" className="nav-link">
              <p id="proreyson">proReyson ();</p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navLinks collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul
                id="ULlist"
                className="navbar-nav mx-auto justify-content-between align-items-center"
              >
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/project" className="nav-link">
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

     
          <Outlet />

          
          
          
          
      


      </div>
    </>
  );
}

export default Layout;
