/*
 * @license
 * @desc: publisher 接口服务
 * Copyright (c) 2018, the Gago Inc All rights reserved.
 * @author: xiaZQ (xiazhiqiang@gagogroup.com)
 * @created: 2018/12/13 10:36 AM
 */

import { Business } from "./business.server";
import { AxiosRequestConfig } from "axios";

export class PublisherServer extends Business {

  constructor(protected token: string) {
    super("https://api.gagogroup.cn");
  }

  public async get<T>(url: string, setting?: AxiosRequestConfig) {
    const finalSetting = { ...(setting ? setting : { params: {} }) };
    finalSetting.params = finalSetting.params ? { ...finalSetting.params, token: this.token } : { token: this.token };
    return super.get<T>(url, { ...finalSetting });
  }

}
