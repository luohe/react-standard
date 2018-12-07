import { Basic, BasicProps } from "./basic";

export interface BarProps extends BasicProps {
}

export interface Bar<T extends BarProps = BarProps, S= {}, SS= any> extends Basic<T, S, SS> {

}
