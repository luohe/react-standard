import React from "react";
const value = {
  // 因为MapContex用于MapGL的内部，所以可以保证运行时map一定不是undefined
  /** 地图mapbox实例
   */
  map: undefined as unknown as mapboxgl.Map,
};

/** MapContext的Props */
export type MapState = typeof value;

/**
 * 获取map实例
 * @deprecated 不到万不得已不要直接使用map实例
 * @author James Zhang
 */
// tslint:disable-next-line:variable-name
export const MapContext = React.createContext(value);
