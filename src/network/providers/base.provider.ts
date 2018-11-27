import { BaseServer } from "../servers/base.server";

export class BaseProvider<T> {
    
    constructor(protected server: BaseServer) {

    }
}