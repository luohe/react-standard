import * as React from "react";
import { RouteConfig, Nav, NavProps } from "../../interface/nav";
import { AppRoot, AppRootProps } from "../../interface/app-root";
import { FrameComponent } from "./frames/frame/frame";
import { Avatar, AvatarProps } from "../../interface/avatar";
import { NavSider } from "./siders/nav-sider/nav-sider";
import { Popover } from "antd";
import { Color, ColorProps, GlobalColorPalette } from "../../interface/color";

/**
 * 杜邦第三版应用入口
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @class Dupont3
 * @extends {(React.Component<AppRootProps & AvatarProps & NavProps & ColorProps<GlobalColorPalette>>)}
 * @implements {AppRoot}
 * @implements {Avatar}
 * @implements {Nav}
 * @implements {Color}
 */
export class Dupont3 extends React.Component<AppRootProps & AvatarProps & NavProps & ColorProps<GlobalColorPalette>>
  implements AppRoot, Avatar, Nav, Color {

  topChangeRouter = (route: RouteConfig) => {
    this.props.navConfig.routeOnClick(route);
  }

  sideChangeRouter = (route: RouteConfig) => {
    this.props.navConfig.routeOnClick(route);
  }

  public render() {
    return (
      <FrameComponent leftComponent={
        <NavSider
          colorPalette={this.props.colorPalette}
          logoConfig={this.props.logoConfig}
          navConfig={{
            routes: this.props.navConfig.routes,
            selected: this.props.navConfig.selected,
            routeOnClick: this.topChangeRouter
          }}
          avatarConfig={{
            ...this.props.avatarConfig,
            userName:
              <Popover
                placement="topRight"
                style={{ backgroundColor: this.props.colorPalette.mainColor[9] ,color: this.props.colorPalette.whiteColor[5]}}
                content={
                  <div>
                    <div>
                      <a href="javascript:void(0)" onClick={this.props.avatarConfig.onLogout}>退出</a>
                    </div>
                  </div>
                }
              >
                {this.props.avatarConfig.userName}
              </Popover>,
            avatar:
              <Popover
                placement="topRight"
                content={
                  <div>
                    <div>
                      <a href="javascript:void(0)" onClick={this.props.avatarConfig.onLogout}>退出</a>
                    </div>
                  </div>
                }
              >
                {this.props.avatarConfig.avatar}
              </Popover>
          }}
        />}>
        {this.props.children}
      </FrameComponent>
    );
  }
}