import { Basic, BasicProps } from "./basic";
import { ContentSlot } from "./slot";

// export interface CardProps {
//     /**
//      * card 标题名
//      */
//     title: string;
//     /**
//      * 右上角自定义拓展dom
//      */
//     buttons?: React.ReactNode | React.ReactNode[];
//     /**
//      * card 收起和展开的回调函数
//      */
//     onExpandChange?: (expand: boolean) => {};
//   }

export type CardProps = BasicProps & ContentSlot & {
  /** 可收缩 */
  canFold: boolean;
  /** 是否收缩 */
  isFold: boolean;
  /** 标题 */
  title?: string;
};

export interface Card<T extends CardProps = CardProps, S= {}, SS= any> extends Basic<T, S, SS> {
}
