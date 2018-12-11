import React, { Component } from "react";
import "./index.css";
import logo from "./logo.svg";
import Wrapper from "../../pages/page-1";
import { Link, Route, withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import styled from "styled-components";
import { LoadingContext, LoadingState } from "../../contexts/loding";
import { AppRoot1 } from "@gago/frame/es/app-roots/app-root-1";
import { globalColorPalette1 } from "@gago/frame/es/colors/default";
import { withContext } from "../../contexts";
import { RouteConfig } from "@gago/frame/es/interface/nav";
import { MapboxProvider, MapGL, mapDefault } from "@gago-react-gl/gago-react-gl";
import { flatMapDeep } from "lodash";
// tslint:disable:jsx-no-lambda jsx-no-multiline-js
// tslint:disable-next-line:variable-name
const Logo = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url(${logo}) no-repeat;
  background-size: contain;
  background-position: center;
`;

const routes: RouteConfig[] = [
  {
    key: "/home",
    icon: "i",
    text: <Link to="/home">home</Link>,
    routes: [],
  },
  {
    key: "/page-1",
    icon: "i",
    text: <Link to="/page-1">Page 1</Link>,
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

class App extends Component<LoadingState & RouteComponentProps> {
  render() {
    const flatten = flatMapDeep(routes, (route) => [route, ...route.routes]);
    const selectedRoute: RouteConfig = flatten.filter(route => route.key === this.props.location.pathname)[0];
    return (
      <RootStyle>
        <MapboxProvider>
          <AppRoot1
            logoConfig={{ logo: <Logo/>, miniLogo: <Logo/> }}
            avatarConfig={{
              userName: "admin",
              avatar: "",
              isLogin: true,
              onClick: () => ({}),
              onLogout: () => ({}),
            }}
            navConfig={{ routes, selected: selectedRoute ? selectedRoute.key : "", routeOnClick: () => ({}) }}
            colorPalette={globalColorPalette1}
          >
            <MapGL {...mapDefault}>
              <Redirect path={"/"} to={"/page-1"}/>
              <Route path={"/home"} render={() => <div>wellcome home !</div>} />
              <Route path={"/page-1"} component={Wrapper} />
            </MapGL>
          </AppRoot1>
          </MapboxProvider>
      </RootStyle>
    );
  }
}

export default withRouter(withContext(LoadingContext)(App));
