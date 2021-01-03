import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Start from "./Start";
import * as serviceWorker from "./serviceWorker";
import { theme, styled } from "./utils/theme";
import { ShackPage } from "./ShackPage";
import { PAGES } from "./utils/config";
import WithMainNavigation from "./WithMainNavigation";
import { Results } from "./Results";
import { Contact } from "./Contact";
import { Story } from "./Story";
import { AddShack } from "./AddShack";
import { StoreProvider } from "./state-provider/store";

const StyledAppWrapper = styled.div`
  color: ${(props) => props.theme.colors.colorTertiary};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;

  @media only screen and (min-width: 560px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 960px) {
    padding: 2rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <StyledAppWrapper>
          <Router>
            <Switch>
              <Route exact path="/">
                <Start />
              </Route>
              <Route exact path="/results">
                <WithMainNavigation pages={PAGES}>
                  <Results />
                </WithMainNavigation>
              </Route>
              <Route exact path="/contact">
                <WithMainNavigation pages={PAGES}>
                  <Contact />
                </WithMainNavigation>
              </Route>
              <Route exact path="/story">
                <WithMainNavigation pages={PAGES}>
                  <Story />
                </WithMainNavigation>
              </Route>
              <Route exact path="/addshack">
                <WithMainNavigation pages={PAGES}>
                  <AddShack />
                </WithMainNavigation>
              </Route>
              <Route path="/:id/:name">
                <WithMainNavigation pages={PAGES}>
                  <ShackPage />
                </WithMainNavigation>
              </Route>
            </Switch>
          </Router>
        </StyledAppWrapper>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
