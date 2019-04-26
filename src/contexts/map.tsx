import React from "react";
const value = {
  /** 地图mapbox实例 */
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
