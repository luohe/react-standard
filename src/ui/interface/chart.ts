import { Basic, BasicProps } from "./basic";

export interface ChartProps<NumberOfString extends number, NumberOfNumber extends number> extends BasicProps {
  chartData: ITable<NumberOfString, NumberOfNumber>;
}

export interface Chart<NumberOfString extends number, NumberOfNumber extends number,
  T extends ChartProps<NumberOfString, NumberOfNumber> = ChartProps<NumberOfString, NumberOfNumber>, S = {}, SS = any>
  extends Basic<T, S, SS> {
}

// type StringOrUndefined = string | undefined;

type NumberOrUndefined = number | undefined;

/** 表格数据原始类型
 * @author James Zhang
 */
// tslint:disable-next-line:interface-name
interface ITablePrototype {
  /** 表格主标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 副标题 */
  description: string;
  /** 表头标题 */
  head: string[];
  /** 数据，第一列是唯一索引，可用于内外交互，之后的列用于存储具体字段 */
  data: (string | number)[][];
  /** 值域，表明图表的最大最小值 */
  range: (string | number)[][];
  /** 默认选中的列的值 */
  defaultValue: NumberOrUndefined[];
}

/** 表格数据格式
 * @author James Zhang
 */
// tslint:disable-next-line:interface-name
export interface ITable<NumberOfString extends number, NumberOfNumber extends number> extends ITablePrototype {
  head: HeadType<NumberOfString, NumberOfNumber>;
  data: TableDataType<string, string, NumberOfString, number, NumberOfNumber>[];
  range: TableDataType<string[], string[], NumberOfString, number[], NumberOfNumber>;
  defaultValue: TableDataType<NumberOrUndefined, NumberOrUndefined, NumberOfString, NumberOrUndefined, NumberOfNumber>;
}

type HeadType<NumberOfString, NumberOfNumber> = TableDataType<string, string, NumberOfString, string, NumberOfNumber>;

/** 表格行类型
 * @author James Zhang
 */
export type TableDataType<I, S, NumberOfS, N, NumberOfN> =
  NumberOfS extends 0 ?
  NumberOfN extends 0 ? [I] :
  NumberOfN extends 1 ? [I, N] :
  NumberOfN extends 2 ? [I, N, N] :
  NumberOfN extends 3 ? [I, N, N, N] :
  NumberOfN extends 4 ? [I, N, N, N, N] :
  NumberOfN extends 5 ? [I, N, N, N, N, N] :
  NumberOfN extends 6 ? [I, N, N, N, N, N, N] :
  NumberOfN extends 7 ? [I, N, N, N, N, N, N, N] :
  NumberOfN extends 8 ? [I, N, N, N, N, N, N, N, N] :
  NumberOfN extends 9 ? [I, N, N, N, N, N, N, N, N, N] :
  NumberOfN extends 10 ? [I, N, N, N, N, N, N, N, N, N, N] :
  never :
  NumberOfS extends 1 ?
  NumberOfN extends 0 ? [I, S] :
  NumberOfN extends 1 ? [I, S, N] :
  NumberOfN extends 2 ? [I, S, N, N] :
  NumberOfN extends 3 ? [I, S, N, N, N] :
  NumberOfN extends 4 ? [I, S, N, N, N, N] :
  NumberOfN extends 5 ? [I, S, N, N, N, N, N] :
  NumberOfN extends 6 ? [I, S, N, N, N, N, N, N] :
  NumberOfN extends 7 ? [I, S, N, N, N, N, N, N, N] :
  NumberOfN extends 8 ? [I, S, N, N, N, N, N, N, N, N] :
  NumberOfN extends 9 ? [I, S, N, N, N, N, N, N, N, N, N] :
  never :
  NumberOfS extends 2 ?
  NumberOfN extends 0 ? [I, S, S] :
  NumberOfN extends 1 ? [I, S, S, N] :
  NumberOfN extends 2 ? [I, S, S, N, N] :
  NumberOfN extends 3 ? [I, S, S, N, N, N] :
  NumberOfN extends 4 ? [I, S, S, N, N, N, N] :
  NumberOfN extends 5 ? [I, S, S, N, N, N, N, N] :
  NumberOfN extends 6 ? [I, S, S, N, N, N, N, N, N] :
  NumberOfN extends 7 ? [I, S, S, N, N, N, N, N, N, N] :
  NumberOfN extends 8 ? [I, S, S, N, N, N, N, N, N, N, N] :
  never :
  NumberOfS extends 3 ?
  NumberOfN extends 0 ? [I, S, S, S] :
  NumberOfN extends 1 ? [I, S, S, S, N] :
  NumberOfN extends 2 ? [I, S, S, S, N, N] :
  NumberOfN extends 3 ? [I, S, S, S, N, N, N] :
  NumberOfN extends 4 ? [I, S, S, S, N, N, N, N] :
  NumberOfN extends 5 ? [I, S, S, S, N, N, N, N, N] :
  NumberOfN extends 6 ? [I, S, S, S, N, N, N, N, N, N] :
  NumberOfN extends 7 ? [I, S, S, S, N, N, N, N, N, N, N] :
  never :
  NumberOfS extends 4 ?
  NumberOfN extends 0 ? [I, S, S, S, S] :
  NumberOfN extends 1 ? [I, S, S, S, S, N] :
  NumberOfN extends 2 ? [I, S, S, S, S, N, N] :
  NumberOfN extends 3 ? [I, S, S, S, S, N, N, N] :
  NumberOfN extends 4 ? [I, S, S, S, S, N, N, N, N] :
  NumberOfN extends 5 ? [I, S, S, S, S, N, N, N, N, N] :
  NumberOfN extends 6 ? [I, S, S, S, S, N, N, N, N, N, N] :
  never :
  NumberOfS extends 5 ?
  NumberOfN extends 0 ? [I, S, S, S, S, S] :
  NumberOfN extends 1 ? [I, S, S, S, S, S, N] :
  NumberOfN extends 2 ? [I, S, S, S, S, S, N, N] :
  NumberOfN extends 3 ? [I, S, S, S, S, S, N, N, N] :
  NumberOfN extends 4 ? [I, S, S, S, S, S, N, N, N, N] :
  NumberOfN extends 5 ? [I, S, S, S, S, S, N, N, N, N, N] :
  never :
  NumberOfS extends 6 ?
  NumberOfN extends 0 ? [I, S, S, S, S, S, S] :
  NumberOfN extends 2 ? [I, S, S, S, S, S, S, N] :
  NumberOfN extends 3 ? [I, S, S, S, S, S, S, N, N] :
  NumberOfN extends 4 ? [I, S, S, S, S, S, S, N, N, N] :
  NumberOfN extends 5 ? [I, S, S, S, S, S, S, N, N, N, N] :
  never :
  NumberOfS extends 7 ?
  NumberOfN extends 0 ? [I, S, S, S, S, S, S, S] :
  NumberOfN extends 1 ? [I, S, S, S, S, S, S, S, N] :
  NumberOfN extends 2 ? [I, S, S, S, S, S, S, S, N, N] :
  NumberOfN extends 3 ? [I, S, S, S, S, S, S, S, N, N, N] :
  never :
  NumberOfS extends 8 ?
  NumberOfN extends 0 ? [I, S, S, S, S, S, S, S, S] :
  NumberOfN extends 1 ? [I, S, S, S, S, S, S, S, S, N] :
  NumberOfN extends 2 ? [I, S, S, S, S, S, S, S, S, N, N] :
  never :
  NumberOfS extends 9 ?
  NumberOfN extends 0 ? [I, S, S, S, S, S, S, S, S, S] :
  NumberOfN extends 1 ? [I, S, S, S, S, S, S, S, S, S, N] :
  never :
  NumberOfS extends 10 ?
  NumberOfN extends 0 ? [I, S, S, S, S, S, S, S, S, S, S] :
  never :
  never;
