import { Business } from "./business.server";

/**
 * 服务器1
 *
 * @author 张卓诚
 * @export
 * @class ServerOneServer
 * @extends {Business}
 */
export class ServerOneServer extends Business {
  constructor() {
    // use extra config
    // super(window.config.publisher);
    // use local config
    super("https://api.gagogroup.cn");
  }
}
