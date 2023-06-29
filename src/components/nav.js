import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function NavBar() {
  const [links, setLinks] = useState(false)
  let timeOut;
  const enterHandler = () => {
    setLinks(true);
    clearTimeout(timeOut)
  }
  const leaveHandler = () => {
    timeOut = setTimeout(() => {
      setLinks(false);
    }, 365);
  }
  return (
    <nav>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Logo</Link>
          <button className="navbar-toggler" onMouseEnter={enterHandler} onMouseLeave={leaveHandler} type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="links" onMouseEnter={enterHandler} onMouseLeave={leaveHandler} style={{ display: links ? "block" : "none" }}>
        <ul>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;