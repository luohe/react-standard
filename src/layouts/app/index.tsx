import React, { Component } from "react";
import logo from "./logo.svg";
import { Link, Route, withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import styled from "styled-components";
import { LoadingContext, LoadingState } from "../../contexts/loding";
import { AppRoot1 } from "@gago/frame/es/app-roots/app-root-1";
import { withContext } from "../../contexts";
import { RouteConfig } from "@gago/frame/es/interface/nav";
import { MapboxProvider, MapGL, mapDefault, BaseLayer } from "@gago-react-gl/gago-react-gl";
import { flatMapDeep } from "lodash";
import { Icon } from "antd";
import Page2 from "../../pages/page-2";
import Page1 from "../../pages/page-1";
import { colorPalette } from "../../color-palette";
// tslint:disable:jsx-no-lambda jsx-no-multiline-js
// tslint:disable:variable-name

const Logo = styled.div`
  height: 100%;
  display: flex;
  *:nth-child(1){
    width: 32px;
  }
  *:nth-child(2){
    line-height: 32px;
    text-align: center;
  }
`;
const MiniLogo = styled.div`
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
    icon: <Link to="/home"><Icon type="home"/></Link>,
    text: <Link to="/home">home</Link>,
    routes: [],
  },
  {
    key: "/page-1",
    icon: <Link to="/page-1"><Icon type="bars"/></Link>,
    text: <Link to="/page-1">Page 1</Link>,
    routes: [],
  },
  {
    key: "/sub-nav",
    icon: <Icon type="bars"/>,
    text: "一级导航",
    routes: [
      {
        key: "/page-2",
        icon: <Link to="/page-2"><Icon type="bars"/></Link>,
        text: <Link to="/page-2">redux</Link>,
        routes: [],
      },
    ],
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
  color: ${colorPalette.mainColor[6]};
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
    const selectedRouteKey = selectedRoute ? selectedRoute.key : "";
    return (
      <RootStyle>
        <MapboxProvider>
          <AppRoot1
            logoConfig={{ logo: <Logo><MiniLogo/><div>react-standard</div></Logo>, miniLogo: <MiniLogo/> }}
            avatarConfig={{
              userName: "admin",
              avatar: <Icon type="user"/>,
              isLogin: true,
              onClick: () => ({}),
              onLogout: () => ({}),
            }}
            navConfig={{ routes, selected: selectedRouteKey, routeOnClick: () => ({}) }}
            colorPalette={colorPalette}
            navAutoHide={selectedRouteKey === "/home"}
          >
            <MapGL {...mapDefault}>
              <BaseLayer id="base-layer" type="Google_Normal_Map"/>
              <Redirect path={"/"} to={"/page-1"}/>
              <Route path={"/home"} render={() => <div>wellcome home !</div>} />
              <Route path={"/page-1"} component={Page1} />
              <Route path={"/page-2"} component={Page2} />
            </MapGL>
          </AppRoot1>
          </MapboxProvider>
      </RootStyle>
    );
  }
}

export default withRouter(withContext(LoadingContext)(App));
