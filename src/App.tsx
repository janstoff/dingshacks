import React from "react";
import styled from "styled-components";
import { Header, HomeIcon } from "./components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.colors.colorSecondary};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  @media only screen and (max-width: 760px) {
    padding: 0;
  }
`;

function App() {
  return (
    <StyledApp>
      <Header>
        <HomeIcon>
          <img></img>
        </HomeIcon>
      </Header>
    </StyledApp>
  );
}

export default App;
