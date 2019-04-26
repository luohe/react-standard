import React, { PureComponent, Component } from "react";
import logo from "./logo.svg";
import { Link, Route, withRouter, RouteComponentProps, Redirect, Switch } from "react-router-dom";
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
import Home from "../../pages/home";
import { hot } from "react-hot-loader";
import Login from "../../pages/login";
import { UserState, UserContext } from "../../contexts/user";
import { MapContext } from "../../contexts/map";

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

/** 占据父容器100%宽高 */
const LinkWithStyle = styled(Link)`
  width: 100%;
  height: 100%;
  display: inline-block;
  &:focus,*:focus{
    text-decoration: unset;
  }
`;

const routes: RouteConfig[] = [
  {
    key: "/home",
    icon: <LinkWithStyle to="/home"><Icon type="home"/></LinkWithStyle>,
    text: <LinkWithStyle to="/home">大屏</LinkWithStyle>,
    routes: [],
  },
  {
    key: "/page-1",
    icon: <LinkWithStyle to="/page-1"><Icon type="bars"/></LinkWithStyle>,
    text: <LinkWithStyle to="/page-1">基本功能</LinkWithStyle>,
    routes: [],
  },
  {
    key: "/sub-nav",
    icon: <Icon type="bars"/>,
    text: "一级导航",
    routes: [
      {
        key: "/page-2",
        icon: <LinkWithStyle to="/page-2"><Icon type="bars"/></LinkWithStyle>,
        text: <LinkWithStyle to="/page-2">redux</LinkWithStyle>,
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

/**
 * 应用入口
 *
 * @author 张卓诚
 * @date 2018-12-29
 * @class App
 * @extends {(Component<LoadingState & RouteComponentProps & UserState>)}
 */
class App extends PureComponent<LoadingState & RouteComponentProps & UserState> {
  state = {
    map: undefined as unknown as mapboxgl.Map,
  };
  render() {
    const flatten = flatMapDeep<RouteConfig, RouteConfig>(routes, (route) => [route, ...route.routes]);
    const selectedRoute: RouteConfig = flatten.filter(route => route.key === this.props.location.pathname)[0];
    const selectedRouteKey = selectedRoute ? selectedRoute.key : "";
    return (
      <RootStyle>
        <MapboxProvider>
          {
            (this.props.isLogin && this.props.user) ? <AppRoot1
              logoConfig={{ logo: <Logo><MiniLogo/><div>react-standard</div></Logo>, miniLogo: <MiniLogo/> }}
              avatarConfig={{
                userName: this.props.user.name,
                avatar: <Icon type="user"/>,
                isLogin: true,
                onClick: () => ({}),
                onLogout: () => this.props.logout(),
              }}
              navConfig={{ routes, selected: selectedRouteKey, routeOnClick: () => ({}) }}
              colorPalette={colorPalette}
              navAutoHide={selectedRouteKey === "/home"}
            >
              <MapGL {...mapDefault} onLoad={this.mapOnLoad}>
                <MapContext.Provider value={{ map: this.state.map }}>
                  <BaseLayer id="base-layer" type="Google_Normal_Map"/>
                  <Switch>
                    {/** 这里使用render是为了hack路由切换页面不刷新的问题 */}
                    <Route path={"/home"} render={() => <Home/>} />
                    <Route path={"/page-1"} component={Page1} />
                    <Route path={"/page-2"} component={Page2} />
                    <Redirect exact path={"/"} to={"/page-1"}/>
                  </Switch>
                </MapContext.Provider>
              </MapGL>
            </AppRoot1> :
            <Login />
          }
          </MapboxProvider>
      </RootStyle>
    );
  }

  mapOnLoad = (e: mapboxgl.EventData) => {
    this.setState({
      map: e.target,
    });
  }
}

export default hot(module)(withRouter(withContext(LoadingContext)(withContext(UserContext)(App))));
