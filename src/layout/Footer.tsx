import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterWrap = styled.footer`
  width: auto !important;
  background: #819ad4ff;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 13px;
  color: #000000ff;
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  a {
    color: #000000ff;
    text-decoration: none;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrap>
      <Inner>
        <div>© {new Date().getFullYear()} ATM — All rights reserved</div>
        <Links>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/history">History</NavLink>
        </Links>
      </Inner>
    </FooterWrap>
  );
};
