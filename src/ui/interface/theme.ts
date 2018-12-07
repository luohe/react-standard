import * as React from "react";

/**
 * 主题接口props
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface ThemeProps
 */
export interface ThemeProps {
  /**
   * 主题接口，同一个布局，同一个色盘，可能会有两种取色方案
   *
   * @type {string}
   * @memberof ThemeProps
   */
  theme: string;
}

/**
 * 主题接口，同一个布局，同一个色盘，可能会有两种取色方案
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface Theme
 * @extends {React.Component<P, S, SS>}
 * @template P
 * @template S
 * @template SS
 */
export interface Theme<P extends ThemeProps = ThemeProps, S = {}, SS = any> extends React.Component<P, S, SS> {

}
