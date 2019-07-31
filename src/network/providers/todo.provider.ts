import { ServerOneServer } from "../servers/server-one.server";
import { RestProvider } from "./rest.provider";
import { Todo } from "../../models/todo";

export class TodoProvider extends RestProvider<Todo> {
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
