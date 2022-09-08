import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./Logout";
import "../App.css";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      {isAuthenticated ? (
        <>
          <ul>
            <Link to="/" className="title">
              Media J
            </Link>
            <li>
              <form className="d-flex">
                <input type="search" className="me-2" placeholder="Search" />
                <button type="submit" color="success" variant="outline">
                  Search
                </button>
              </form>
            </li>

            <FaWindowClose className="fa-times" />
            <FaBars className="fa-bars" onClick={handleClick} />
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={
                  click ? (
                    <FaWindowClose className="fa-times" />
                  ) : (
                    <FaBars className="fa-bars" />
                  )
                }
              />
            </div>

            <div className={click ? "nav-right expanded" : "nav-right"}>
              <div className="nav-right">
                <li className="nav-item">
                  <Link
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                    to="/"
                    onClick={closeMobileMenu}
                  >
                    {" "}
                    Accueil
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                    to="/reseau"
                    onClick={closeMobileMenu}
                  >
                    Réseau
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                    to="/offre"
                    onClick={closeMobileMenu}
                  >
                    Offre d'emplois
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                    to="/messages"
                    onClick={closeMobileMenu}
                  >
                    Messagerie
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                    to="/notification"
                    onClick={closeMobileMenu}
                  >
                    Notification
                  </Link>{" "}
                </li>
                <li onClick={closeMobileMenu}>Profile</li>
                <li onClick={closeMobileMenu}>Produit</li>
                <li onClick={closeMobileMenu}>
                  <LogoutButton />{" "}
                </li>
              </div>
            </div>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li className="title">Media J</li>

            <li>
              <form className="d-flex">
                <input type="search" className="me-2" placeholder="Search" />
                <button type="submit" color="success" variant="outline">
                  Search
                </button>
              </form>
            </li>

            <FaWindowClose className="fa-times" />
            <FaBars className="fa-bars" onClick={handleClick} />
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={
                  click ? (
                    <FaWindowClose className="fa-times" />
                  ) : (
                    <FaBars className="fa-bars" />
                  )
                }
              />
            </div>

            <div className={click ? "nav-right expanded" : "nav-right"}>
              <div className="nav-right">
                <li className="nav-item" onClick={closeMobileMenu}>
                  <LoginButton />
                </li>
              </div>
            </div>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
