import { Basic, BasicProps } from "./basic";
import { Slot } from "./slot";

export type BoxProps = BasicProps & Slot;

// Box<T extends BoxProps> 会报错，BoxProps 循环引用自身
export interface Box<T extends BoxProps = BoxProps, S= {}, SS= any> extends Basic<T, S, SS> {
}
