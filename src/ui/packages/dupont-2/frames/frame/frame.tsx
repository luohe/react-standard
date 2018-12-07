import * as React from "react";
import { Frame } from "../../../../interface/frame";
import { TopSlot, ContentSlot } from "../../../../interface/slot";
import styled from "styled-components";

// tslint:disable-next-line:variable-name
const Root = styled.div`
  /* background-color: rgba(0,0,0,0.1); */
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  .link-button {
    margin-right: 20px;
  }
  .app-children {
    width: 100%;
    overflow: auto;
    position: relative;
}
`;

export class FrameComponent extends React.Component<ContentSlot & TopSlot> implements Frame {
  render() {
    return (
      <Root>
        {this.props.topComponent}
        <div className="app-children" style={{ height: "calc(100% - 64px)" }}>
          {this.props.children}
        </div>
      </Root>);
  }
}
