import { BaseProvider } from "./base.provider";
import { BaseServer } from "../servers/base.server";

export class RestProvider<T> extends BaseProvider<T> {
  constructor(protected server: BaseServer, protected endpoint: string) {
    super(server);
  }
  async create(data: T) {
    return this.server.post<T, T>(this.endpoint, data).then(res => res.data);
  }
  async update(data: T & { id: string }) {
    return this.server.put<T, T>(this.endpoint, data).then(res => res.data);
  }
  async delete(id: string) {
    // tslint:disable-next-line:prefer-template
    return this.server.delete(this.endpoint + "/" + id).then(res => res.data);
  }
  async query(query?: any) {
    return this.server.get<{ data: T[]; total: number }>(this.endpoint, { params: query }).then(res => res.data);
  }
}
