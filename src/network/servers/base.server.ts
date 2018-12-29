import { HttpClient } from "../http-client";
import { AxiosRequestConfig } from "axios";

export class BaseServer {
  protected http = new HttpClient();
  constructor(public domian: string) {

  }

  public get<T>(url: string, setting?: AxiosRequestConfig) {
    return this.http.get<T>(url, { ...setting, baseURL: this.domian });
  }

  public post<T, P = T>(url: string, data?: P, setting?: AxiosRequestConfig) {
    return this.http.post<T, P>(url, data, { ...setting, baseURL: this.domian });
  }

  public put<T, P = T>(url: string, data?: P, setting?: AxiosRequestConfig) {
    return this.http.put<T, P>(url, data, { ...setting, baseURL: this.domian });
  }

  public delete(url: string, setting?: AxiosRequestConfig) {
    return this.http.delete(url, { ...setting, baseURL: this.domian });
  }
}
