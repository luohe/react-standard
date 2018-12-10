import React, { Component } from "react";
import logo from "./logo.svg";
import "./app.css";
import Wrapper from "../../pages/page-1";
import { Link, BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import { LoadingContext, LoadingState } from "../../contexts/loding";
import { Loading } from "../../components/loading";
import { Package1Root } from "@gago/frame/es/packages/package-1";
import { globalColorPalette1 } from "@gago/frame/es/packages/package-1/colors/default";
import { withContext } from "../../contexts";
import { RouteConfig } from "@gago/frame/es/interface/nav";
// tslint:disable:jsx-no-lambda jsx-no-multiline-js

const routes: RouteConfig[] = [
  {
    icon: "i",
    text: <Link to="home">home</Link>,
    routes: [],
  },
  {
    icon: "i",
    text: <Link to="page-1">Page 1</Link>,
    routes: [],
  },
];
// tslint:disable-next-line:variable-name
const Nav = styled.div`
  text-align: left;
  display: block;
  width: 100%;
  a{
    text-align: center;
    /* This renders the buttons above... Edit me! */
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
  }
`;

// tslint:disable-next-line:variable-name
const RootStyle = styled.div`
  width: 100%;
  height: 100%;
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 5vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
}

`;

class App extends Component<LoadingState> {
  render() {
    return (
      <RootStyle>
        <BrowserRouter>
          <Package1Root
            logoConfig={{ logo: "123", miniLogo: "mini" }}
            avatarConfig={{
              userName: "admin",
              avatar: "",
              isLogin: true,
              onClick: () => ({}),
              onLogout: () => ({}),
            }}
            navConfig={{ routes, selected: routes[0], routeOnClick: () => ({}) }}
            colorPalette={globalColorPalette1}
          >
            <div>
              <Route path={"/home"} render={() => <div>wellcome home !</div>} />
              <Route path={"/page-1"} component={Wrapper} />
            </div>
          </Package1Root>
        </BrowserRouter>
      </RootStyle>
    );
  }
}

export default withContext(LoadingContext)(App);
