/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/logo.png";
function Navbar({ ...rest }) {
  const [dropDown, setDropdown] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const router = useRouter();
  return (
    <div {...rest} className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="nav-brand">
          <Image src={Logo} layout="responsive" alt="brand logo" />
        </div>

        <ul className={isNav ? "nav-menu mobile-menu" : "nav-menu"}>
          <li className="nav-menu-item">
            <Link href="/">
              <a className={(router.pathname = "/" ? "current" : "")}>Home</a>
            </Link>{" "}
          </li>
          <li className="nav-menu-item">
            <Link href="/destination">
              <a> Destination</a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href={"/about"}>
              <a>Hotels</a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href={"/partner"}>
              <a>Flights</a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href={"/partner"}>
              <a>Bookings</a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href="/register">
              <a className="btn btn-outline">Sign Up</a>
            </Link>
          </li>
          <li className="nav-menu-item">EN</li>
        </ul>

        <div className="nav-toggler-container">
          {!isNav ? (
            <FaBars className="nav-toggler" onClick={() => setIsNav(!isNav)} />
          ) : (
            <FaTimes className="nav-toggler" onClick={() => setIsNav(!isNav)} />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
