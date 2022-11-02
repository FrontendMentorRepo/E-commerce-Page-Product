import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavWrapper = styled.div`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  margin: 0 150px;
  z-index: 10;
  border-bottom: 1px solid #bbb;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavUser = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: gray;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const Img = styled.img`
  height: ${(props) => props.height || "40px"};
  display: flex;
  justify-content: flex-end;
`;
