/**
 * @component Nav
 * @description 导航组件
 * @time 2018/1/25
 * @author ChengZhenghao
 */
import { Icon, Menu, Popover } from "antd";
import * as React from "react";
// import { Link } from "react-router-dom";
import { Nav as NavInterface, NavProps, RouteConfig } from "../../../../interface/nav";
import { Bar, BarProps } from "../../../../interface/bar";
import { Avatar, AvatarProps } from "../../../../interface/avatar";
import styled from "styled-components";
import { Logo, LogoProps } from "../../../../interface/logo";
import { Color, ColorProps, GlobalColorPalette } from "../../../../interface/color";
const SubMenu = Menu.SubMenu;
// tslint:disable:variable-name
// tslint:disable:naming-convention

export class Nav extends React.Component<NavProps & BarProps & AvatarProps & LogoProps & ColorProps<GlobalColorPalette>, {}>
  implements NavInterface, Bar, Avatar, Logo, Color {
  private Root = styled.div`
    position: relative;
    background: ${this.props.colorPalette.mainColor[9]};
    color: ${this.props.colorPalette.whiteColor[5]};
    overflow: hidden;
    height: 64px;
    line-height: 64px;
    .logo-container{
      position: absolute;
      left: 0px;
      height: calc(100% - 32px);
      width: 180px;
      margin: 16px;
      display: flex;
    }
    .main-header-nav-list {
      line-height: 64px;
      height: 64px;
      float: left;
      border-bottom: none;
      background: ${this.props.colorPalette.mainColor[9]};
      margin-left: 20%;
    }
    .user-info-wrap {
      float: right;
      .user {
        padding: 0 20px;
        cursor: pointer;
        i {
          margin-right: 4px;
        }
      }
    }
    .ant-menu-item,.ant-menu-submenu{
      border-bottom: unset;
      background-color: ${this.props.colorPalette.mainColor[9]};
      height: 100%;
      *,a {
        color: ${this.props.colorPalette.whiteColor[5]};
      }
    }
    .ant-menu-item.ant-menu-item-active{
      border-bottom: unset;
      background-color: ${this.props.colorPalette.mainColor[9]};
    }
    .ant-menu-submenu.ant-menu-submenu-active{
      border-bottom: unset;
      background-color: ${this.props.colorPalette.mainColor[9]};
    }
    .ant-menu-item:hover,.ant-menu-submenu:hover{
      *,a{
        color: ${this.props.colorPalette.whiteColor[8]};
      }
    }
    .ant-menu-item.ant-menu-item-selected{
      border-bottom: unset;
      /* border-top: 3px solid ${this.props.colorPalette.mainColor[5]}; */
      background-color: ${this.props.colorPalette.blackColor[4]};
      :before{
        content: "";
        border-top: 3px solid ${this.props.colorPalette.mainColor[5]};
        position: absolute;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        left: 0;
      }
    }
    .ant-menu-submenu.selected-child{
      border-bottom: unset;
      /* border-top: 3px solid ${this.props.colorPalette.mainColor[5]}; */
      background-color: ${this.props.colorPalette.blackColor[4]};
      :before{
        content: "";
        border-top: 3px solid ${this.props.colorPalette.mainColor[5]};
        position: absolute;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        left: 0;
      }
      *,a{
        color: ${this.props.colorPalette.whiteColor[8]};
      }
    }
    .ant-menu-item.ant-menu-item-active,.ant-menu-item.ant-menu-item-selected{
      a{
        color: ${this.props.colorPalette.whiteColor[8]};
      }
    }
  `;

  private routeKey: string[] = [];

  render() {
    let identifyer = 0;
    this.routeKey = this.props.navConfig.routes.map(() => (identifyer++).toString());
    const selected =
      this.props.navConfig.selected ? [this.routeKey[this.props.navConfig.routes.indexOf(this.props.navConfig.selected)]] : [];
    return (
      <this.Root>
        <div className={"logo-container"}>{this.props.logoConfig.logo}</div>
        <Menu
          className="main-header-nav-list"
          mode="horizontal"
          selectedKeys={selected}
        >
          {this.renderNav()}
        </Menu>
        {this.renderUserInfo()}
      </this.Root>
    );
  }

  /**
   * 渲染右上角用户信息
   */
  private renderUserInfo = () => {
    return (
      <div className="user-info-wrap">
        <div className="user">
          <Icon type="user" />
          <Popover
            placement="bottomRight"
            // tslint:disable-next-line:jsx-alignment
            content={<div onClick={this.handleUserLogOut}>退出</div>}>
            <span>{this.props.avatarConfig.userName}</span>
          </Popover>
        </div>
      </div>
    );
  }

  /**
   * 渲染Nav
   */
  private renderNav = () => {
    const userInfo = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo") || "");
    const menuItems = this.props.navConfig.routes.map((route, index) => {
      if (route.routes.length > 0) {
        const a = route.routes.map((item, index2) => (
          // tslint:disable-next-line:jsx-no-lambda
          <Menu.Item key={undefined} onClick={() => this.clickRoute(route)}>{item.text}</Menu.Item>),
        );
        return (
          <SubMenu key={this.routeKey[index]} title={route.text} className={this.subMenuSelected(route) ? "selected-child" : ""}>
            {a}
          </SubMenu>
        );
        // tslint:disable-next-line:no-unnecessary-else
      } else {
        return (
          // tslint:disable-next-line:jsx-no-lambda
          <Menu.Item key={this.routeKey[index]} onClick={() => this.clickRoute(route)}>
            {route.text}
          </Menu.Item>);
      }
    });
    if (userInfo && userInfo.role === 3) {
      menuItems.length = menuItems.length - 1;
    }
    return menuItems;
  }

  private clickRoute = (route: RouteConfig) => {
    return this.props.navConfig.routeOnClick(route);
  }

  /**
   * 用户退出
   */
  private handleUserLogOut = (e: any) => {
    e.preventDefault();
    this.props.avatarConfig.onLogout();
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
}
