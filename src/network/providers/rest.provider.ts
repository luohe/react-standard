import { BaseProvider } from "./base.provider";
import { BaseServer } from "../servers/base.server";

export class RestProvider<T> extends BaseProvider<T> {
  constructor(protected server: BaseServer, protected endpoint: string) {
    super();
  }

  /** 创建 */
  async create(data: T) {
    return this.server.post<T>(this.endpoint, data).then(res => res.data);
  }

  /** 更新 */
  async update(data: T & {
    /** id */
    id: string;
  }) {
    return this.server.put<T>(this.endpoint, data).then(res => res.data);
  }

  /** 删除 */
  async delete(id: string) {
    // tslint:disable-next-line:prefer-template
    return this.server.delete(this.endpoint + "/" + id).then(res => res.data);
  }

  /** 查询 */
  async query(query?: any) {
    return this.server.get<{
      /** 数据 */
      data: T[];
      /** 总量 */
      total: number;
    }>(this.endpoint, { params: query }).then(res => res.data);
  }
}
