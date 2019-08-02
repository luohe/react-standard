/*
 * @license
 * @desc: publisher 接口服务
 * Copyright (c) 2018, the Gago Inc All rights reserved.
 * @author: xiaZQ (xiazhiqiang@gagogroup.com)
 * @created: 2018/12/13 10:36 AM
 */

import { Business } from "./business.server";
import { AxiosRequestConfig } from "axios";

/**
 * publisher 服务器
 *
 * @author 张卓诚
 * @export
 * @class PublisherServer
 * @extends {Business}
 */
export class PublisherServer extends Business {

  constructor(protected token: string) {
    // use extra config
    // super(window.config.publisher);
    // use local config
    super("https://api.gagogroup.cn");
  }

  /**
   * 获取数据
   *
   * @author 张卓诚
   * @template T
   * @param {string} url
   * @param {AxiosRequestConfig} [setting]
   * @returns
   * @memberof PublisherServer
   */
  public async get<T>(url: string, setting?: AxiosRequestConfig) {
    const finalSetting = { ...(setting ? setting : { params: {} }) };
    finalSetting.params = finalSetting.params ? { ...finalSetting.params, token: this.token } : { token: this.token };
    return super.get<{data: T}>(url, { ...finalSetting }).then(result => result.data);
  }

}
