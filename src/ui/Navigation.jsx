// import { useState } from "react";
// import { Link } from "react-scroll";
// import { Link as NavLink } from "react-router-dom";
import styled from "styled-components";
// import { HiBars3, HiXMark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import Logo from "../components/Logo";

// import Button from "../components/button";


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
  border-bottom: 1px solid #eee;

  &.sticky {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 8rem;
    padding-top: 0;
    padding-bottom: 0;
    background-color: rgba(255, 255, 255, 0.97);
    z-index: 999;
    box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  }
`;



const MainNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.8rem;
`;

const MainNavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.5rem;
  transition: all 0.3s;

  &:link,
  &:visited {
    color: #333;
  }
`;

const SideNav = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 2.8rem;
`;

const BtnMobileNav = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;
`;

const IconMobileNav = styled.div`
  height: 4.8rem;
  width: 4.8rem;
  color: #333;
`;

// Header component
const Navigation = () => {
  return (
    <Header className="header">
      <a href="#">
      <Logo />
      </a>

      <nav className="main-nav">
        <MainNavList className="main-nav-list">
          <li>
            <MainNavLink href="#home">Home</MainNavLink>
          </li>
          <li>
            <MainNavLink href="#trends">Trends</MainNavLink>
          </li>
          <li>
            <MainNavLink href="#offers">Offers</MainNavLink>
          </li>
        </MainNavList>
      </nav>

      <SideNav className="side-nav">
        <CiSearch />
        <FaCircleUser />
        <HiShoppingBag />
      </SideNav>

      <BtnMobileNav className="btn-mobile-nav">
        <IconMobileNav className="icon-mobile-nav">Menu Icon</IconMobileNav>
        <IconMobileNav className="icon-mobile-nav">Close Icon</IconMobileNav>
      </BtnMobileNav>
    </Header>
  );
};

export default Navigation;
