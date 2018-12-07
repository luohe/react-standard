// tslint:disable:ter-max-len
import { ColorLevels, Color9Levels, Color8Levels, Color5Levels, GlobalColorPalette, generatorDerivativeColors } from "../../../../interface/color";

/** 主黑 */
export const defaultMainBlackColor: ColorLevels = [
  "#f7fafa", "#f2f5f5", "#e8ebeb", "#d9dcdc", "#bfc4c5",
  "#8c9596", "#4c5a5c", "#192b2e", "#001417", "#979797",
];

/** 主黑透明 */
export const defaultMainBlackTransparentColor: Color9Levels = [
  "rgba(0, 34, 38, 0.02)", "rgba(0, 34, 38, 0.04)", "rgba(0, 34, 38, 0.09)", "rgba(0, 20, 23, 0.15)", "rgba(0, 20, 23, 0.25)",
  "rgba(0, 20, 23, 0.45)", "rgba(0, 20, 23, 0.7)", "rgba(0, 20, 23, 0.9)", "rgba(0, 20, 23, 1)",
];

/** 白 */
export const defaultWhiteColor: Color9Levels = [
  "rgba(255, 255, 255, 0.04)", "rgba(255, 255, 255, 0.09)", "rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0.45)",
  "rgba(255, 255, 255, 0.65)", "rgba(255, 255, 255, 0.85)", "rgba(255, 255, 255, 0.97)", "rgba(255, 255, 255, 1)",
];

/** 黑 */
export const defaultBlackColor: Color9Levels = [
  "rgba(0, 0, 0, 0.02)", "rgba(0, 0, 0, 0.04)", "rgba(0, 0, 0, 0.09)", "rgba(0, 0, 0, 0.15)", "rgba(0, 0, 0, 0.25)",
  "rgba(0, 0, 0, 0.45)", "rgba(0, 0, 0, 0.65)", "rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 1)",
];

/** 中性色 */
export const defaultNeutralColor: Color8Levels = [
  "rgb(250, 250, 250)", "rgb(245, 245, 245)", "rgb(232, 232, 232)", "rgb(217, 217, 217)", "rgb(191, 191, 191)",
  "rgb(140, 140, 140)", "rgb(89, 89, 89)", "rgb(38, 38, 38)",
];

/** 阴影 */
export const defaultShadow: Color5Levels = [
  "0 4px 8px 0 rgba(0, 0, 0, 0.25)",
  "0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 0 1px 0 rgba(0, 0, 0, 0.15)",
  "0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 0 1px 0 rgba(0, 0, 0, 0.05)",
  "0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 0 1px 0 rgba(0, 0, 0, 0.05)",
  "0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.02)",
];

/** 色板1 */
export const globalColorPalette1: GlobalColorPalette = {
  mainColor: generatorDerivativeColors("#00a2b9"),
  successColor: generatorDerivativeColors("#4ab98b"),
  errorColor: generatorDerivativeColors("#e34469"),
  warningColor: generatorDerivativeColors("#ffc53f"),
  subColor: ["#1790ff", "#54abff", "#f56179", "#f183a3"],
  mainBlackColor: defaultMainBlackColor,
  mainBlackTransparentColor: defaultMainBlackTransparentColor,
  blackColor: defaultBlackColor,
  whiteColor: defaultWhiteColor,
  neutralColor: defaultNeutralColor,
  shadow: defaultShadow,
};

/** 色板2 */
export const globalColorPalette2: GlobalColorPalette = {
  mainColor: generatorDerivativeColors("#ad7a1d"),
  successColor: generatorDerivativeColors("#793d09"),
  errorColor: generatorDerivativeColors("#e34469"),
  warningColor: generatorDerivativeColors("#e89b55"),
  subColor: ["#f183a3", "#f56179", "#ea588b", "#d781e7"],
  mainBlackColor: defaultMainBlackColor,
  mainBlackTransparentColor: defaultMainBlackTransparentColor,
  blackColor: defaultBlackColor,
  whiteColor: defaultWhiteColor,
  neutralColor: defaultNeutralColor,
  shadow: defaultShadow,
};
