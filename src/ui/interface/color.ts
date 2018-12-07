import * as React from "react";
import tinycolor from "tinycolor2";

/**
 * 配色props
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface ColorProps
 * @template C
 */
export interface ColorProps<C extends ColorPalette = ColorPalette> {
  /**
   * 色板
   *
   * @type {C}
   * @memberof ColorProps
   */
  colorPalette: C;
}

/** 色阶 */
export type ColorLevels = [string, string, string, string, string, string, string, string, string, string];

export type Color9Levels = [string, string, string, string, string, string, string, string, string];

export type Color8Levels = [string, string, string, string, string, string, string, string];

export type Color5Levels = [string, string, string, string, string];

/**
 * 配色接口
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @interface Color
 * @extends {React.Component<P, S, SS>}
 * @template C
 * @template P
 * @template S
 * @template SS
 */
export interface Color<C extends ColorPalette = ColorPalette, P extends ColorProps<C> =
  ColorProps<C>, S = {}, SS = any> extends React.Component<P, S, SS> {

}

/** 至少包含一种颜色的色板 */
export type ColorPalette = PrimaryColor | SuccessColor | ErrorColor | WarningColor
  | SubColor | MainBlackColor | MainBlackTransparentColor | WhiteColor | BlackColor | NeutralColor | Shadow;

/** 包含全部颜色的色板 */
export type GlobalColorPalette = PrimaryColor & SuccessColor & ErrorColor & WarningColor
  & SubColor & MainBlackColor & MainBlackTransparentColor & WhiteColor & BlackColor & NeutralColor & Shadow;

export interface PrimaryColor {
  /** 主色 */
  mainColor: ColorLevels;
}

export interface SuccessColor {
  /** 成功色 */
  successColor: ColorLevels;
}

export interface ErrorColor {
  /** 错误色 */
  errorColor: ColorLevels;
}

export interface WarningColor {
  /** 警告色 */
  warningColor: ColorLevels;
}

export interface MainBlackColor {
  /** 主黑 */
  mainBlackColor: ColorLevels;
}

export interface MainBlackTransparentColor {
  /** 主黑透明 */
  mainBlackTransparentColor: Color9Levels;
}

export interface WhiteColor {
  /** 白 */
  whiteColor: Color9Levels;
}

export interface BlackColor {
  /** 黑 */
  blackColor: Color9Levels;
}

export interface NeutralColor {
  /** 中性色 */
  neutralColor: Color8Levels;
}

export interface SubColor {
  /** 辅助色 */
  subColor: string[];
}

export interface Shadow {
  /** 阴影 */
  shadow: Color5Levels;
}

/** 色阶生成函数接口 */
export type GeneratorDerivativeColor = (mainColor: string, index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => string;

/**
 * 色阶生成函数
 *
 * @param {string} color 颜色，与6号色几乎相同
 * @param {(1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)} index 色阶号
 * @returns
 */
export const generatorDerivativeColor: GeneratorDerivativeColor =
  (color: string, index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => {
    return c(color, index);
  };
const c = generatorFactory();

/**
 * 返回一个根据一个色值生成10个阶梯色的函数
 * copy 自 antd
 * @author James Zhang
 */
function generatorFactory() {
  const hueStep = 2;
  const saturationStep = 16;
  const saturationStep2 = 5;
  const brightnessStep1 = 5;
  const brightnessStep2 = 15;
  const lightColorCount = 5;
  const darkColorCount = 4;

  const getHue = (hsv: { h: number }, i: number, isLight: boolean) => {
    let hue;
    // tslint:disable-next-line:prefer-conditional-expression
    if (hsv.h >= 60 && hsv.h <= 240) {
      hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i;
    } else {
      hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return Math.round(hue);
  };
  const getSaturation = (hsv: { s: number }, i: number, isLight: boolean) => {
    let saturation;
    if (isLight) {
      saturation = Math.round(hsv.s * 100) - saturationStep * i;
    } else if (i === darkColorCount) {
      saturation = Math.round(hsv.s * 100) + saturationStep;
    } else {
      saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
    }
    if (saturation > 100) {
      saturation = 100;
    }
    if (isLight && i === lightColorCount && saturation > 10) {
      saturation = 10;
    }
    if (saturation < 6) {
      saturation = 6;
    }
    return Math.round(saturation);
  };
  const getValue = (hsv: { v: number }, i: number, isLight: boolean) => {
    if (isLight) {
      return Math.round(hsv.v * 100) + brightnessStep1 * i;
    }
    return Math.round(hsv.v * 100) - brightnessStep2 * i;
  };

  const colorPaconstte = (color: string, index: number) => {
    const isLight = index <= 6;
    const hsv = tinycolor(color).toHsv();
    const i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
    return tinycolor({
      h: getHue(hsv, i, isLight),
      s: getSaturation(hsv, i, isLight),
      v: getValue(hsv, i, isLight),
    }).toHexString();
  };
  return colorPaconstte;
}

/**
 * 依据主色生成10个阶级的颜色
 * @param color 主色，与第6号色相同
 */
export const generatorDerivativeColors =
  (color: string) => {
    return [
      generatorDerivativeColor(color, 1),
      generatorDerivativeColor(color, 2),
      generatorDerivativeColor(color, 3),
      generatorDerivativeColor(color, 4),
      generatorDerivativeColor(color, 5),
      generatorDerivativeColor(color, 6),
      generatorDerivativeColor(color, 7),
      generatorDerivativeColor(color, 8),
      generatorDerivativeColor(color, 9),
      generatorDerivativeColor(color, 10),
    ] as ColorLevels;
  };
