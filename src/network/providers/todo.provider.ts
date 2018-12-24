import { ServerOneServer } from "../servers/server-one.server";
import { RestProvider } from "./rest.provider";

export class TodoProvider extends RestProvider<{ text: string; completed: boolean }> {
  constructor() {
    super(new ServerOneServer(), "/git");
  }

  public async getFilterData(id: string) {
    Promise.all([
      this.server.get("").then(),
      this.server.get(""),
    ]);
    return this.server.get("https://www.baidu.com").then();
  }
}
