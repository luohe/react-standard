export type SourceGenerator = (url: string, colorFunction: ColorFunction) => Source;

/**
 * 色彩生成函数
 */
export type ColorFunction =
  /** @param {number} value 值
   * @returns 色彩值
   */
  (value: number) => string;

export interface Source {
  id: string;
}

export interface Layer {
  id: string;
}

export type Type = "corn";

// tslint:disable-next-line:naming-convention variable-name
export const CornGenerator: SourceGenerator = (url, f) => {
  return ({ url, f, id: "1" });
};
