import React from "react";
import "./Navbar.css";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import Logo from "./Logo.png";
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 4,
    }}
  />
);
const Navbar = () => {
  return (
    <>
      <div className="aligned">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activestyle>
            Home
          </NavLink>
          <NavLink to="/table" activestyle>
            Table
          </NavLink>
          <NavLink to="/orders" activestyle>
            Orders
          </NavLink>
          <NavLink to="/staff" activestyle>
            Staff
          </NavLink>
          <NavLink to="/" activestyle>
            Logout
          </NavLink>
        </NavMenu>
      </Nav>
      <div className="underLine">
        {" "}
        <ColoredLine color="rgb(3, 125, 158)" />
      </div>
    </>
  );
};

export default Navbar;
