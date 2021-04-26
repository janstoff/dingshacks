import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AddShack } from "./AddShack";
import { Contact } from "./Contact";
import "./index.css";
import { Results } from "./Results";
import { ReviewShack } from "./ReviewShack";
import * as serviceWorker from "./serviceWorker";
import { ShackPage } from "./ShackPage";
import Start from "./Start";
import { StoreProvider } from "./state-provider/store";
import { Story } from "./Story";
import { PAGES } from "./utils/config";
import { styled, theme } from "./utils/theme";
import WithMainNavigation from "./WithMainNavigation";

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
              <Route path="/review/:id">
                <WithMainNavigation pages={PAGES}>
                  <ReviewShack />
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
