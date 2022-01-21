import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Layout({ children, ...rest }) {
  return (
    <>
      <Navbar />
      <main {...rest}>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
