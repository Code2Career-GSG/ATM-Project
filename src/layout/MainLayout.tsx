import React from "react";
import { Navbar, Footer } from "./";
import styled from "styled-components";
export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
Container;
