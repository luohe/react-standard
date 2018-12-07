import * as React from "react";
import { Frame } from "../../../../interface/frame";
import { ContentSlot, LeftSlot } from "../../../../interface/slot";
import styled from "styled-components";

// tslint:disable-next-line:variable-name
const Root = styled.div`
  /* background-color: rgba(0,0,0,0.1); */
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 100%;
  .nav{
    height: 100%;
    width: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .link-button {
    margin-right: 20px;
  }
  .app-children {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
}
`;

/**
 * 左右布局
 *
 * @author 张卓诚
 * @date 2018-12-05
 * @export
 * @class FrameComponent
 * @extends {(React.Component<ContentSlot & LeftSlot>)}
 * @implements {Frame}
 */
export class FrameComponent extends React.Component<ContentSlot & LeftSlot> implements Frame {
  render() {
    return (
      <Root>
        <div className="nav">{this.props.leftComponent}</div>
        <div className="app-children">
          {this.props.children}
        </div>
      </Root>);
  }
}
