import { Basic, BasicProps } from "./basic";

/**
 * 导航props
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface NavProps
 * @extends {BasicProps}
 */
export interface NavProps extends BasicProps {
  /**
   * 导航设置
   * @memberof NavProps
   */
  navConfig: {
    /**
     * 路由列表
     *
     * @type {RouteConfig[]}
     */
    routes: RouteConfig[];
    /**
     * 选中的路由
     *
     * @type {RouteConfig}
     */
    selected: RouteConfig;
    /**
     * 路由点击事件
     * @param {RouteConfig} route
     */
    routeOnClick(route: RouteConfig): any;
  };
}

/**
 * 导航接口
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface Nav
 * @extends {Basic<T, S, SS>}
 * @template T
 * @template S
 * @template SS
 */
export interface Nav<T extends NavProps = NavProps, S= {}, SS= any> extends Basic<T, S, SS> {
}

/**
 * 路由设置
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface RouteConfig
 */
export interface RouteConfig {
  /**
   * icon，不会被自动转换为Link，需要自己手动传入Link
   *
   * @type {React.ReactNode}
   * @memberof RouteConfig
   */
  icon: React.ReactNode;
  /**
   * 文字，不会自动转换为Link，需要自己手动传入Link
   *
   * @type {React.ReactNode}
   * @memberof RouteConfig
   */
  text: React.ReactNode;
  /**
   * 子路由
   *
   * @type {RouteConfig[]}
   * @memberof RouteConfig
   */
  routes: RouteConfig[];
}
