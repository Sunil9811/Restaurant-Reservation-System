import React from "react";
import "./styles/SharedLayout.css";
import { Outlet, useNavigate } from "react-router";
import { NavLink, Link } from "react-router-dom";
import Footer from "./Footer";

function SharedLayout() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("currentUser");
    // window.location.href = "/Restaurant-Reservation-System/login";
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <NavLink to="/">Retro</NavLink>
          <p>Resturants</p>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="Restaurant-Reservation-System/about">About</NavLink>
          <NavLink to="Restaurant-Reservation-System/book">Booking</NavLink>
          <NavLink to="Restaurant-Reservation-System/contact">Contact</NavLink>
          {user ? (
            <>
              <div className="dropdown mr-4">
                <button
                  className="login-user dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i>
                  {user.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="Restaurant-Reservation-System/profile" className="dropdown-item user-drop">
                    Profile
                  </Link>
                  {user.isAdmin && (
                    <Link to="Restaurant-Reservation-System/admin" className="dropdown-item user-drop">
                      Admin panel
                    </Link>
                  )}
                  <Link className="dropdown-item user-drop" onClick={logout}>
                    LogOut
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <NavLink to="Restaurant-Reservation-System/login">Login</NavLink>
          )}
        </div>
      </nav>
      <main className="outlet">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default SharedLayout;
