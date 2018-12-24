import { BaseServer } from "../servers/base.server";

// tslint:disable-next-line:no-unnecessary-class
export class BaseProvider<T = {}> {
  protected server?: BaseServer;
}
