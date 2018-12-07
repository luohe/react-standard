import { Basic } from "./basic";
import { LogoSlot } from "./slot";

/**
 * logo props
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface LogoProps
 */
export interface LogoProps {
  /**
   * logo设置
   *
   * @type {LogoSlot}
   * @memberof LogoProps
   */
  logoConfig: LogoSlot;
}
export interface Logo<T extends LogoProps = LogoProps, S= {}, SS= any> extends Basic<T, S, SS> {
}
