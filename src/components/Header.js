import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { CartContext } from "../utils/UpdateCartContext";

const HeaderComponent = function () {
  const [logedInUser, setLogedInUser] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
  const {user} = useContext(UserContext)
  const { state, dispatch } = useContext(CartContext);

  
  return (
    <header
      className="header py-5 lg:py-8 fixed w-full top-0 left-0 shadow-lg bg-black z-10"
      id="header"
    >
      <div className="flex justify-between items-center container">
        <Link to="/" className="brand">
          Food Villa
        </Link>
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuActive(!menuActive)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="flex items-center">
          <nav
            className={`navbar ${
              menuActive ? "block" : "hidden"
            } z-10 md:block absolute md:static top-full w-full left-0 px-5 md:p-0 bg-gray-600 md:bg-transparent`}
          >
            <ul
              className="menu-inner flex md:gap-5 lg:gap-10 flex-col md:flex-row"
              onClick={() => setMenuActive(!menuActive)}
            >
              <li className="menu-item">
                <Link to="/" className="menu-link block py-3 md:p-0">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about-us" className="menu-link block py-3 md:p-0">
                  About Us
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact-us" className="menu-link block py-3 md:p-0">
                  Contact
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/instantMart" className="menu-link block py-3 md:p-0">
                  InstantMart
                </Link>
              </li>
              <li className="menu-item relative">
                <Link to="/cart" className="menu-link block py-3 md:p-0">
                  Cart
                </Link>
                <span className="absolute -top-3 -right-4 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {state.count}
                </span>
              </li>
            </ul>
          </nav>
          {logedInUser ? (
            <button
              className="menu-block"
              onClick={() => setLogedInUser(false)}
            >
              Login {user.name}
            </button>
          ) : (
            <button className="menu-block" onClick={() => setLogedInUser(true)}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
