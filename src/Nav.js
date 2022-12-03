import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <Link to="/" className="link-button">
        Home
      </Link>
    </header>
  );
};
export default Nav;
