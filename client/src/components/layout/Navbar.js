import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {

  const Links = (
    <Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {Links}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Image Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
