import { Box } from "./box";
import { ContentSlot, UINode } from "./slot";

export type PanelProps = ContentSlot & {
  /**
   * tab标签页上的名称或自定义dom
   */
  tab: UINode;
};

export interface Panel<T extends PanelProps = PanelProps, S = {}, SS = any> extends Box<T, S, SS> {}

/** 页面布局框架props */
export interface TabProps {
  /**
   * 烦死了，ts校验这个报错
   */
  children: any;
  tabOnClick?(selectedItem: number): any;
  selected?: string;
  defaultSelected?: string;
}

export interface Tab<T extends TabProps = TabProps, S = {}, SS = any> extends Box<T, S, SS> {}
