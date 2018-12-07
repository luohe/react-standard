import { Basic, BasicProps } from "./basic";
import { UINode } from "./slot";

/**
 * 头像props
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface AvatarProps
 * @extends {BasicProps}
 */
export interface AvatarProps extends BasicProps {
  /**
   * 头像设置
   *
   * @memberof AvatarProps
   */
  avatarConfig: {
    /**
     * 用户名称
     *
     * @type {UINode}
     */
    userName: UINode;
    /**
     * 用户头像
     *
     * @type {UINode}
     */
    avatar: UINode;
    /**
     * 已经登陆？
     *
     * @type {boolean}
     */
    isLogin: boolean;
    /**
     * 用户头像被点击
     *
     */
    onClick(): any;
    /**
     * 登出被点击
     *
     */
    onLogout(): any;
  };
}

export interface Avatar<T extends AvatarProps = AvatarProps, S= {}, SS= any> extends Basic<T, S, SS> {
}
