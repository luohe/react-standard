import { BaseServer } from "./base.server";
import { AxiosRequestConfig } from "axios";

/**
 * 业务Server，去除了axios的参数
 *
 * @author 张卓诚
 * @date 2018-12-14
 * @export
 * @class Business
 * @extends {BaseServer}
 */
export class Business extends BaseServer {
  constructor(domain: string) {
    super(domain);
  }

  public async get<T>(url: string, setting?: AxiosRequestConfig) {
    return super.get<T>(url, { ...setting, baseURL: this.domian })
      .then(
        res => {
          return res.data;
        },
      );
  }

  public async post<T, P>(url: string, data: P, setting?: AxiosRequestConfig) {
    return super.post<T, P>(url, data, { ...setting, baseURL: this.domian })
      .then(
        res => {
          return res.data;
        },
      );
  }

  public async put<T, P>(url: string, data: P, setting?: AxiosRequestConfig) {
    return super.put<T, P>(url, data, { ...setting, baseURL: this.domian })
      .then(
        res => {
          return res.data;
        },
      );
  }

  public async delete(url: string, setting ?: AxiosRequestConfig) {
    return super.delete(url, { ...setting, baseURL: this.domian });
  }
}
