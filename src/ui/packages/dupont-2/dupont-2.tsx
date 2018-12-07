import * as React from "react";
import { RouteConfig, Nav, NavProps } from "../../interface/nav";
import { AppRoot, AppRootProps } from "../../interface/app-root";
import { FrameComponent } from "./frames/frame/frame";
import { Nav as NavComponent } from "./navs/nav/nav";
import { Avatar, AvatarProps } from "../../interface/avatar";
import { globalColorPalette1 } from "../dupont-3/colors/default";

/**
 * 杜邦第二版应用入口
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @class Dupont2
 * @extends {(React.Component<AppRootProps & AvatarProps & NavProps>)}
 * @implements {AppRoot}
 * @implements {Avatar}
 * @implements {Nav}
 */
export class Dupont2 extends React.Component<AppRootProps & AvatarProps & NavProps>
  implements AppRoot, Avatar, Nav {

  topChangeRouter = (route: RouteConfig) => {
    this.props.navConfig.routeOnClick(route);
  }

  sideChangeRouter = (route: RouteConfig) => {
    this.props.navConfig.routeOnClick(route);
  }

  public render() {
    const navComponentProps = {
      colorPalette: globalColorPalette1,
      logoConfig: this.props.logoConfig,
      navConfig: {
        routes: this.props.navConfig.routes,
        selected: this.props.navConfig.selected,
        routeOnClick: this.topChangeRouter,
      },
      avatarConfig: this.props.avatarConfig,
    };
    return (
      <FrameComponent topComponent={<NavComponent {...navComponentProps} />} >
        {this.props.children}
      </FrameComponent>
    );
  }
}
