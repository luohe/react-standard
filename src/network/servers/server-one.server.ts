import { Business } from "./business.server";

export class ServerOneServer extends Business {
  constructor() {
    // use extra config
    // super(window.config.publisher);
    // use local config
    super("https://api.gagogroup.cn");
  }
}
