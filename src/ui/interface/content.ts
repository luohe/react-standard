import { Basic, BasicProps } from "./basic";

export interface ContentProps extends BasicProps {

}

export interface Content<T extends BasicProps = ContentProps, S= {}, SS= any> extends Basic<T, S, SS> {

}
