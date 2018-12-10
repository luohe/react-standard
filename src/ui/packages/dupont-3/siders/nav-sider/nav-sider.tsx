import * as React from "react";
import { Icon, Tooltip } from "antd";
// import SubMenu from "antd/lib/menu/SubMenu";
import styled, { createGlobalStyle } from "styled-components";
import { BasicProps, Basic } from "../../../../interface/basic";
import { NavProps, Nav, RouteConfig } from "../../../../interface/nav";
import { ColorProps, GlobalColorPalette, Color } from "../../../../interface/color";
import { Logo, LogoProps } from "../../../../interface/logo";
import { Sider } from "../../../../interface/sider";
import { Avatar, AvatarProps } from "../../../../interface/avatar";
import { Menu } from "./menu";
// tslint:disable:naming-convention variable-name jsx-wrap-multiline jsx-no-lambda jsx-no-multiline-js

export type NavSiderProps = BasicProps & NavProps & ColorProps<GlobalColorPalette> & LogoProps & AvatarProps;

interface State {
  isFold: boolean;
  routesIsFold: boolean[];
}

/**
 * 左右侧边栏，拥有导航插槽，用户头像插槽，logo插槽
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @class NavSider
 * @extends {React.Component<NavSiderProps, State>}
 * @implements {Basic}
 * @implements {Nav}
 * @implements {Sider}
 * @implements {Color<GlobalColorPalette>}
 * @implements {Logo}
 * @implements {Avatar}
 */
export class NavSider extends React.Component<NavSiderProps, State> implements Basic, Nav, Sider, Color<GlobalColorPalette>, Logo, Avatar {
  Root = styled.div`
    height: 100%;
    background-color: ${this.props.colorPalette.mainColor[9]};
    display: flex;
    flex-direction: column;
    color: ${this.props.colorPalette.whiteColor[5]};
    a{
      text-decoration: none;
    }
    .login{
      display: flex;
      flex-direction: row;
      height: 48px;
      line-height: 48px;
      flex-grow: 0;
      flex-shrink: 0;
      padding-left: 8px;
      > div{
        display: inline-block;
      }
      .avatar{
        width: 48px;
        flex-grow: 0;
        text-align: center;
      }
      .username{
        flex-grow: 1;
      }
      .expand{
        width: 48px;
        flex-grow: 0;
        text-align: center;
      }
    }
    .login.mini{
      flex-direction: column;
      height: auto;
      .username{
        display: none;
      }
    }
    .logo{
      width: 100%;
      height: 64px;
      padding: 16px;
      flex-grow: 0;
      flex-shrink: 0;
    }
    .mini-logo{
      width: 100%;
      height: 64px;
      padding: 16px;
      flex-grow: 0;
      flex-shrink: 0;
    }
    .line{
      height: 1px;
      width: 100%;
      background-color: ${this.props.colorPalette.whiteColor[0]};
      flex-grow: 0;
      flex-shrink: 0;
    }

    .menu{
      overflow: scroll;
      .menu-item{
        height: 48px;
        position: relative;
        display: flex;
        padding-left: 24px;
      }
      .menu-item,.sub-menu{
        line-height: 48px;
      }
      .menu-item:hover{
        *{
          color: ${this.props.colorPalette.whiteColor[8]};
        }
      }
      .sub-menu:hover > *:first-child{
        *{
          color: ${this.props.colorPalette.whiteColor[8]};
        }
      }
      .selected{
        background-color: ${this.props.colorPalette.blackColor[4]};
        *{
          color: ${this.props.colorPalette.whiteColor[8]};
        }
        :after{
          content: "";
          border-right: 3px solid ${this.props.colorPalette.mainColor[5]};
          position: absolute;
          top: 0;
          box-sizing: border-box;
          width: 3px;
          height: 100%;
          right: 0;
        }
      }
      .selected-child > *:first-child{
        background-color: ${this.props.colorPalette.blackColor[4]};
          *{
            color: ${this.props.colorPalette.whiteColor[8]};
          }
      }
      .nav-text *{
        display: inline-block;
        width: 100%;
      }
    }
    .menu.mini{
      width: 64px;
      .menu-item,.sub-menu{
        .nav-text{
          width: 0;
          flex-grow: 0;
          overflow: hidden;
          height: 100%;
        }
      }
    }
  `;
  Icon = styled.i`
    width: 24px;
    display: inline-block;
    *{
      color: ${this.props.colorPalette.whiteColor[5]};
    }
    a{
      text-decoration: none;
    }
  `;

  Text = styled.span`
    display: inline-block;
    flex-grow: 1;
    *{
      color: ${this.props.colorPalette.whiteColor[5]};
    }
    > {
      width: 100%;
    }
    a{
      text-decoration: none;
    }
  `;

  GlobalStyle = createGlobalStyle`
    .dupont-3-nav-sider-popup{
      .ant-tooltip-content{
        .ant-tooltip-arrow{
          border: none;
        }
        .ant-tooltip-inner{
          padding: 0;
          background-color: ${this.props.colorPalette.mainColor[9]};
        }
      }
    }
  `;

  SubMenu = styled.div`
    color: ${this.props.colorPalette.whiteColor[5]};
    width: 136px;
    .menu-item{
      width: 100%;
      height: 48px;
      line-height: 48px;
      position: relative;
      display: flex;
      padding-left: 16px;
      *{
        color: ${this.props.colorPalette.whiteColor[5]};
      }
      *:hover{
        color: ${this.props.colorPalette.whiteColor[8]};
      }
    }
    .nav-text{

    }
    .sub-menu-title{
      height: 32px;
      line-height: 32px;
      padding-left: 8px;
      *{
        color: ${this.props.colorPalette.whiteColor[5]};
      }
    }
    .selected{
      background-color: ${this.props.colorPalette.blackColor[4]};
      *{
        color: ${this.props.colorPalette.whiteColor[8]};
      }
    }
    a{
      text-decoration: none;
    }
  `;

  state: State = {
    isFold: false,
    routesIsFold: [],
  };

  componentWillMount() {
    this.setState(
      { routesIsFold: this.props.navConfig.routes.map(() => true) },
    );
  }

  public render() {
    const getMenuItems = (routes: RouteConfig[]) => {
      return routes.map((item) => {
        return (
          <div
            className={this.selected(item) ? "menu-item sub-menu-item selected" : "menu-item sub-menu-item"}
            key={undefined}
            onClick={() => this.clickMenuItem(item)}
          >
            <this.Icon className="nav-icon" />
            <this.Text className="nav-text">{item.text}</this.Text>
          </div>
        );
      });
    };

    const getPopoverMenuItems = (routes: RouteConfig[]) => {
      return routes.map((item) => {
        return (
          <div
            className={this.selected(item) ? "menu-item sub-menu-item selected" : "menu-item sub-menu-item"}
            key={undefined}
            onClick={() => this.clickMenuItem(item)}
          >
            <this.Text className="nav-text">{item.text}</this.Text>
          </div>
        );
      });
    };

    // const style: React.CSSProperties = {
    //   // display: "inline-block",
    //   // width: this.state.isFold ? 0 : "auto",
    //   // height: this.state.isFold ? 0 : "auto",
    //   // overflow: "hidden"
    // };

    const subMenus = this.props.navConfig.routes.map((item, index) => {
      if (item.routes.length > 0) {
        return (
          this.state.isFold ?
            <Tooltip
              title={<this.SubMenu><div className="sub-menu-title">{item.text}</div>{getPopoverMenuItems(item.routes)}</this.SubMenu>}
              overlayClassName={"dupont-3-nav-sider-popup"}
              placement="rightTop"
            >
              <div className={this.subMenuSelected(item) ? "menu-item selected-child" : "menu-item"}>
                <this.Icon className="nav-icon">{item.icon}</this.Icon>
                <this.Text className="nav-text">{item.text}</this.Text>
              </div>
            </Tooltip> :
            <Menu
              key={undefined}
              className={this.subMenuSelected(item) ? "sub-menu selected-child" : "sub-menu"}
              title={
                <>
                  <this.Icon style={{ width: "24px" }} className="nav-icon">{item.icon}</this.Icon>
                  <this.Text className="nav-text">{item.text}</this.Text>
                  <this.Icon className="nav-arrow">{this.subMenuIsFolding(item) ? <Icon type="down" /> : <Icon type="up" />}</this.Icon>
                </>
              }
              titleOnClick={() => this.toggleFold(item)}
              isFold={this.state.routesIsFold[index]}
              colorPalette={this.props.colorPalette}
            >
              {getMenuItems(item.routes)}
            </Menu>
        );
        // tslint:disable-next-line:no-unnecessary-else
      } else {
        return (
          this.state.isFold ?
            <Tooltip
              title={
                <this.SubMenu>
                  <div className="sub-menu-title" onClick={() => this.clickMenuItem(item)}>{item.text}</div>
                </this.SubMenu>
              }
              overlayClassName={"dupont-3-nav-sider-popup"}
              placement="rightTop"
            >
              <div
                onClick={() => this.clickMenuItem(item)}
                className={this.selected(item) ? "menu-item selected" : "menu-item"}
              >
                <this.Icon className="nav-icon">{item.icon}</this.Icon>
                <this.Text className="nav-text">{item.text}</this.Text>
              </div>
            </Tooltip> :
            <div
              onClick={() => this.clickMenuItem(item)}
              className={this.selected(item) ? "menu-item selected" : "menu-item"}
            >
              <this.Icon className="nav-icon">{item.icon}</this.Icon>
              <this.Text className="nav-text">{item.text}</this.Text>
            </div>
        );
      }
    },
    );
    return (
      <this.Root style={{ width: this.state.isFold ? "auto" : "200px" }}>
        {
          this.state.isFold ?
            <div className="mini-logo">{this.props.logoConfig.miniLogo}</div> :
            <div className="logo">{this.props.logoConfig.logo}</div>
        }
        <div className="line" />
        <div
          style={{ height: "100%" }}
          className={this.state.isFold ? "menu mini" : "menu"}
        >
          {subMenus}
        </div>
        <div className={this.state.isFold ? "login mini" : "login"}>
          <div className="avatar">{this.props.avatarConfig.avatar}</div>
          <div className="username">{this.props.avatarConfig.userName}</div>
          <div className="expand" onClick={this.toggleAllIsFold}><Icon type="bars" /></div>
        </div>
        <this.GlobalStyle />
      </this.Root>
    );
  }
  private selected = (route: RouteConfig) => {
    if (this.props.navConfig.selected === route) {
      return true;
      // tslint:disable-next-line:no-unnecessary-else
    } else {
      return false;
    }
  }
  private subMenuSelected = (route: RouteConfig) => {
    if (this.selected(route)) {
      return true;
      // tslint:disable-next-line:no-unnecessary-else
    } else {
      return route.routes.indexOf(this.props.navConfig.selected) >= 0;
    }
  }
  private toggleFold = (route: RouteConfig) => {
    if (this.state.isFold) {
      return;
    }
    const index = this.props.navConfig.routes.indexOf(route);
    if (index < 0) {
      return;
    }
    let newRoutesIsFold = this.state.routesIsFold.concat();
    if (newRoutesIsFold[index] === true) {
      newRoutesIsFold = newRoutesIsFold.map(item => true);
      newRoutesIsFold[index] = false;
    } else {
      newRoutesIsFold[index] = true;
    }

    this.setState({
      routesIsFold: newRoutesIsFold,
    });
  }

  private subMenuIsFolding = (route: RouteConfig) => {
    const index = this.props.navConfig.routes.indexOf(route);
    if (index >= 0) {
      return this.state.routesIsFold[index];
      // tslint:disable-next-line:no-unnecessary-else
    } else {
      return false;
    }
  }

  private clickMenuItem = (route: RouteConfig) => {
    this.props.navConfig.routeOnClick(route);
  }

  private toggleAllIsFold = () => {
    if (this.state.isFold === false) {
      const newRoutesIsFold = this.state.routesIsFold.concat().map(() => true);
      this.setState({
        isFold: !this.state.isFold,
        routesIsFold: newRoutesIsFold,
      });
    } else {
      const newRoutesIsFold = this.props.navConfig.routes.concat().map(route => !this.subMenuSelected(route));
      this.setState({
        isFold: !this.state.isFold,
        routesIsFold: newRoutesIsFold,
      });
    }
  }
// tslint:disable-next-line:max-file-line-count
}
