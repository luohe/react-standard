import { Basic, BasicProps } from "./basic";

export interface SiderProps extends BasicProps {

}

export interface Sider<T extends SiderProps = SiderProps, S = {}, SS = any> extends Basic<T, S, SS> {

}
