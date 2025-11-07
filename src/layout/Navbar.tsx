import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/deposit", label: "Deposit" },
    { to: "/withdraw", label: "Withdraw" },
    { to: "/history", label: "History" },
    { to: "/watchlist", label: "Watchlist" },
    { to: "/settings", label: "Settings" },
  ];

  const handleLogout = () => {
    // TODO: Add logout logic here
    console.log("User logged out");
    navigate("/");
  };
  return (
    <Nav>
      <Inner>
        <Brand>
          <img src="/logo2.png" alt="ATM Logo" width="100" height="100" />
          {/* <NavLink to="/dashboard">ATM</NavLink> */}
        </Brand>

        <ToggleButton
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#2a9d8f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </ToggleButton>

        <NavLinks open={open}>
          {navLinks.map((l) => (
            <NavItem key={l.to}>
              <StyledLink open={open} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </StyledLink>
            </NavItem>
          ))}

          <NavItem>
            <StyledAction
              open={open}
              className="logout"
              onClick={handleLogout}
              type="button"
            >
              Logout
            </StyledAction>
          </NavItem>
        </NavLinks>
      </Inner>
    </Nav>
  );
};

const Nav = styled.nav`
  width: fit-content !important;
  display: flex;
  align-items: center;
  margin-top: 12px;
  border-bottom: 1px solid #e5e7eb;
  margin-inline: auto !important;
  @media (max-width: 600px) {
    margin-inline: 2rem;
    align-items: space-between;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  background-color: #e3f2f1;
  border-bottom: 2px solid #88cec6; 
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 5rem;
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }
  span {
    color: #6b7280;
    font-size: 12px;
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

const NavLinks = styled.ul<{ open: boolean }>`
  list-style: none;
  display: ${(p) => (p.open ? "flex" : "none")};
  gap: 12px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background: #1b243aff;
  flex-direction: column;
  padding: 12px 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (min-width: 900px) {
    position: static;
    display: flex;
    flex-direction: row;
    background: transparent;
    box-shadow: none;
    padding: 0;
    align-items: center;
   
  }
`;

const NavItem = styled.li``;

const StyledLink = styled(NavLink)<{ open: boolean }>`
  text-decoration: none;
  color: #2a9d8f;
  padding: 6px 12px;
  display: inline-block;
  border: 2px solid #2a9d8f;  
  border-radius: 8px;      
  transition: all 0.3s ease;  

  &[aria-current="page"] {
    font-weight: 700;
    background-color: #2a9d8f;
    color: #ffffff;
  }

  &:hover {
    background-color: #2a9d8f; 
    color: white;
    transform: scale(1.05);
  }

  &.logout {
    color: #bd3f3f;
    border-color: #bd3f3f;
    margin-left: ${(p) => (p.open ? "" : "5rem")};
  }
`;


const StyledAction = styled.button<{ open: boolean }>`
  text-decoration: none;
  color: #ffffffff;
  padding: 6px 8px;
  display: inline-block;
  background: transparent;
  border: none;
  font: inherit;
  cursor: pointer;

  &:hover {
    color: #819ad4ff;
  }

  &.logout {
    color: #bd3f3fff;
    margin-left: ${(p) => (p.open ? "" : "5rem")};
  }
`;
