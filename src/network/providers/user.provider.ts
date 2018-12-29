import { ServerOneServer } from "../servers/server-one.server";
import { User } from "../../models/user";
import { BaseProvider } from "./base.provider";

/**
 * 用户授权接口
 *
 * @author 张卓诚
 * @date 2018-12-29
 * @export
 * @class UserProvider
 * @extends {BaseProvider<User>}
 */
export class UserProvider extends BaseProvider<User> {
  server = new ServerOneServer();
  constructor() {
    super();
  }

  /**
   * 登陆
   *
   * @author 张卓诚
   * @date 2018-12-29
   * @param {string} 用户名
   * @param {string} 密码明文
   * @returns
   * @memberof UserProvider
   */
  async login(username: string, password: string) {
    return this.server.post<User, {password: string} & User>("/auth", { password, name: username });
  }

  /**
   * 模拟登陆
   *
   * @author 张卓诚
   * @date 2018-12-29
   * @param {string} username
   * @param {string} password
   * @returns
   * @memberof UserProvider
   */
  async mockLogin(username: string, password: string) {
    return { name: username };
  }

  /**
   * 模拟检测登陆状态
   *
   * @author 张卓诚
   * @date 2018-12-29
   * @param {string} username
   * @param {string} password
   * @returns
   * @memberof UserProvider
   */
  async checkLogin() {
    return this.server.get<User>("/auth");
  }

  /**
   * 登出
   *
   * @author 张卓诚
   * @date 2018-12-29
   * @returns
   * @memberof UserProvider
   */
  async logout() {
    return this.server.delete("/auth");
  }
}

export default new UserProvider();
