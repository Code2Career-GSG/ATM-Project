import React from "react";
import notFoundImage from "../assets/notFoundImage.png";
import styled from "styled-components";

export const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <h1>OOPS!</h1>
      <p>The page you are looking for does not exist.</p>
      <img src={notFoundImage} alt="Page not found" />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    /* responsive: scale with viewport but cap at a reasonable pixel width */
    width: min(40vw, 560px);
    max-width: 100%;
    height: auto;
    margin-top: 2rem;
  }

  h1,
  p {
    margin: 0.5rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    img {
      width: 60vw;
    }
  }
`;
