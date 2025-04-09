

import React, { useState } from "react";
import styled from "styled-components";
import { SignUpButton, UserButton, useUser, SignOutButton } from "@clerk/clerk-react";
import { FiMenu, FiX } from "react-icons/fi"; 
import './Nav.css';

const Container = styled.div`
  margin-top: 10px;
  height: 90px;
  background-color: black;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  font-family: "Spicy Rice", serif;
  font-weight: 400;
  font-size: 60px;
  color: aliceblue;
  cursor: pointer;
  padding-left: 55px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-left: -66px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 68px;
  font-family: "Playwrite IT Moderna", cursive;
  font-size: 20px;
  margin-top: 18px;
  color: white;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: rgb(0, 0, 0);
    padding: 20px;
    text-align: center;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: bisque;
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Button = styled.div`
  background-color: rgb(7, 7, 8);
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 4px 10px;
  border-radius: 40px;
  font-weight: 400;
  font-size: 20px;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: black;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 28px;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const { isSignedIn } = useUser(); // Check if user is signed in
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close the menu on mobile after clicking
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo className="logo">Cadeistiq</Logo>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuIcon>
        <NavList isOpen={menuOpen}>
          
          <NavItem onClick={() => scrollToSection("women")}>Women</NavItem>
          <NavItem onClick={() => scrollToSection("men")}>Men</NavItem>
          <NavItem onClick={() => scrollToSection("stationary")}>Stationary</NavItem>
          <NavItem onClick={() => scrollToSection("contact")}>Contact Us</NavItem>
          <ButtonContainer>
            {isSignedIn ? (
              <SignOutButton redirectUrl="/">
                <Button>Sign Out</Button>
              </SignOutButton>
            ) : (
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            )}
            <UserButton />
          </ButtonContainer>
        </NavList>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
