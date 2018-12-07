import { BasicProps } from "./basic";
import { ContentSlot } from "./slot";
import { Box } from "./box";
import { LogoProps } from "./logo";
export type AppRootProps = BasicProps & ContentSlot & LogoProps;

export interface AppRoot<P extends AppRootProps = AppRootProps, S = {}, SS = any> extends Box<P, S, SS> { }
