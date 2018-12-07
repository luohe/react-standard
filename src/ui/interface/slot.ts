import { Box } from "./box";
import { Nav } from "./nav";
import { Bar } from "./bar";
import { Sider } from "./sider";

export type UINode = Box | Nav | React.ReactNode | React.Component;

/** 顶部插槽 */
export interface TopSlot {
  /** 顶部元素 */
  topComponent: UINode | Bar;
}

/** 右侧插槽 */
export interface RightSlot {
  /** 右侧元素 */
  rightComponent: UINode | Sider;
}

/** 下侧插槽 */
export interface BottomSlot {
  /** 底部元素 */
  bottomComponent: UINode | Bar;
}

/** 左侧插槽 */
export interface LeftSlot {
  /** 左侧元素 */
  leftComponent: UINode | Sider;
}

/** 中部插槽 */
export interface ContentSlot<C extends React.ReactNode = React.ReactNode> {
  /** 中部元素 */
  children: C;
}

export type Slot = TopSlot | RightSlot | BottomSlot | LeftSlot | ContentSlot;

/** logo插槽 */
export interface LogoSlot {
  /** 大logo */
  logo: UINode | UINode[];
  /** 正方形小logo */
  miniLogo: UINode | UINode[];
}
