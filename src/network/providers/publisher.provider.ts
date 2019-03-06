/*
 * @license
 * @desc: 资源概览请求
 * Copyright (c) 2018, the Gago Inc All rights reserved.
 * @author: xiaZQ (xiazhiqiang@gagogroup.com)
 * @created: 2018/12/13 10:20 AM
 */

import { PublisherServer } from "../servers/publisher.server";
import { BaseProvider } from "./base.provider";

/**
 * publisher
 *
 * @author 张卓诚
 * @date 2018-12-24
 * @export
 * @class PublisherProvide
 * @extends {BaseProvider<{}>}
 */
export class PublisherProvide extends BaseProvider<{}> {
  serverOne = new PublisherServer("tokenOne");
  serverTwo = new PublisherServer("tokenTwo");
  /** 获取时间序列 */
  async getTimeLine(type: string) {
    const result = await this.serverOne.get<{ data: {times: string[]} }>(`/publisher/v2/times/${type}`);
    return result.data;
  }
}

export default new PublisherProvide();
