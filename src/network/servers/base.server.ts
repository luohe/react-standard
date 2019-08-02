import { HttpClient } from "../http-client";
import { AxiosRequestConfig } from "axios";

/**
 * 服务器基类
 *
 * @author 张卓诚
 * @export
 * @class BaseServer
 */
export class BaseServer {
  /**
   * 网络客户端
   *
   * @protected
   * @memberof BaseServer
   */
  protected http = new HttpClient();
  constructor(public domian: string) {

  }

  /**
   * get
   *
   * @author 张卓诚
   * @template T
   * @param {string} url
   * @param {AxiosRequestConfig} [setting]
   * @returns
   * @memberof BaseServer
   */
  public async get<T>(url: string, setting?: AxiosRequestConfig) {
    return this.http.get<T>(url, { ...setting, baseURL: this.domian });
  }

  /**
   * post
   *
   * @author 张卓诚
   * @template T
   * @template P
   * @param {string} url
   * @param {P} [data]
   * @param {AxiosRequestConfig} [setting]
   * @returns
   * @memberof BaseServer
   */
  public async post<T, P = T>(url: string, data?: P, setting?: AxiosRequestConfig) {
    return this.http.post<T, P>(url, data, { ...setting, baseURL: this.domian });
  }

  /**
   * put
   *
   * @author 张卓诚
   * @template T
   * @template P
   * @param {string} url
   * @param {P} [data]
   * @param {AxiosRequestConfig} [setting]
   * @returns
   * @memberof BaseServer
   */
  public async put<T, P = T>(url: string, data?: P, setting?: AxiosRequestConfig) {
    return this.http.put<T, P>(url, data, { ...setting, baseURL: this.domian });
  }

  /**
   * delete
   *
   * @author 张卓诚
   * @param {string} url
   * @param {AxiosRequestConfig} [setting]
   * @returns
   * @memberof BaseServer
   */
  public async delete(url: string, setting?: AxiosRequestConfig) {
    return this.http.delete(url, { ...setting, baseURL: this.domian });
  }
}
