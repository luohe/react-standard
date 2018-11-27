import { ServerOneServer } from "../servers/server-one.server";
import { RestProvider } from "./rest.provider";

export class TodoProvider extends RestProvider<{ text: string, completed: boolean }> {
    constructor() {
        super(new ServerOneServer(),"todo");
    }
}