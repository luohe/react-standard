import { Business } from "./business.server";

export class ServerOneServer extends Business {
  constructor() {
    super("https://api.gagogroup.com");
  }
}
