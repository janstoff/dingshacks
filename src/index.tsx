import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Start from "./Start";
import * as serviceWorker from "./serviceWorker";
import { theme, styled } from "./utils/theme";
import { LSG } from "./lsg";
import { ShackPage } from "./ShackPage";

const StyledAppWrapper = styled.div`
  color: ${(props) => props.theme.colors.colorTertiary};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  @media only screen and (max-width: 760px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledAppWrapper>
        <Router>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/lsg">
              <LSG />
            </Route>
            <Route path="/:id/:name">
              <ShackPage />
            </Route>
          </Switch>
        </Router>
      </StyledAppWrapper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
