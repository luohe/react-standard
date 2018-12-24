/*
 * Created by charlotte.wang(wangchao@gagogroup.com) on 2018/10/24
 * Last Modified by charlotte.wang on 2018/11/02
 * Copyright (c) 2018 Gago Ltd.
 *
 * HISTORY:
 * Date      	By       	Comments
 * ----------	---------	-------------------------------------------------------
 */

import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";

function rejectedInterceptor(error: any) {
  console.error(error);
}

Axios.interceptors.request.use(async (arc: AxiosRequestConfig) => {
  return arc;
}, rejectedInterceptor);

Axios.interceptors.response.use((ar: AxiosResponse) => {
  const { data } = ar;
  if (!data) {
    return ar;
  }
  if (data.error) {
    return Promise.reject(data.error.message);
  }
  if (!data.data) {
    return data;
  }
  return data.data;
}, rejectedInterceptor);

export class HttpClient {
  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Axios.get<T>(url, config);
  }

  async post<T = any, R = any>(url: string, data?: R, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Axios.post<T>(url, data, config);
  }

  async put<T = any, R = any>(url: string, data?: R, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Axios.put<T>(url, data, config);
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Axios.delete(url, config);
  }

  async download<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Axios({
      url,
      method: "GET",
      responseType: "blob",
      ...config,
    });
  }

  async all<T = any>(request: any[]): Promise<AxiosResponse<T>[]> {
    return Axios.all(request);
  }
}
