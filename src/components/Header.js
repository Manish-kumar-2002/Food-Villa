import { useState } from "react";
import { Link } from "react-router-dom";


const HeaderComponent = function () {
  const [logedInUser,setLogedInUser] = useState(true)
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="brand">
            Food Villa
          </Link>
          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about-us" className="menu-link">
                  About Us
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact-us" className="menu-link">
                  Contact
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/support" className="menu-link">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          {
            logedInUser ? <button className="menu-block" onClick={()=>setLogedInUser(false)}>Login</button> : <button className="menu-block" onClick={()=>setLogedInUser(true)}>Logout</button>
          }
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
