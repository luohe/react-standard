import { Box, BoxProps } from "./box";
import { ContentSlot } from "./slot";

/** 页面布局框架props */
export type FrameProps = BoxProps & ContentSlot;

/**
 * 页面布局框架接口
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface Frame
 * @extends {Box<T, S, SS>}
 * @template T
 * @template S
 * @template SS
 */
export interface Frame<T extends FrameProps = FrameProps, S = {}, SS= any> extends Box<T, S, SS> {

}
