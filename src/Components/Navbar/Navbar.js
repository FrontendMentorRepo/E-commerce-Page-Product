import React from "react";
import { NavLink, NavMenu, NavWrapper, NavUser, Img } from "./Navbar.styled";
import srcLogo from "../../Assets/images/logo.svg";
import imgAvatar from "../../Assets/images/image-avatar.png";
import imgCart from "../../Assets/images/icon-cart.svg";

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <NavMenu>
          <NavLink to="/">
            <img src={srcLogo} alt="logoSneakers"></img>
          </NavLink>
          <NavLink to="/collections" activeStyle>
            Collections
          </NavLink>
          <NavLink to="/men" activeStyle>
            Men
          </NavLink>
          <NavLink to="/women" activeStyle>
            Women
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavUser>
          <NavLink>
            <Img src={imgCart} alt="imgCart" height="20px"></Img>
          </NavLink>
          <NavLink>
            <Img src={imgAvatar} alt="imgAvatar"></Img>
          </NavLink>
        </NavUser>
      </NavWrapper>
    </>
  );
};

export default Navbar;
