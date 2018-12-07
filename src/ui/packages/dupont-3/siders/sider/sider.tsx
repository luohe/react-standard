import * as React from "react";
import { Panel } from "gago-react";
import { Box } from "../../../../interface/box";
import { CardProps } from "../../../../interface/card";
import { Sider } from "../../../../interface/sider";
// tslint:disable:jsx-no-multiline-js

export class SiderComponent extends React.Component<CardProps> implements Sider, Box {
  render() {
    return (
      <Panel
        expand={!this.props.isFold}
        handle={false}
        closeBtn={false}
        maxHeight="calc(100% - 24px)"
      >
        <div style={{ padding: "8px", backgroundColor: "hsl(200,22%,19%)", height: "100%" }}>
          {this.props.title === undefined ? "" :
            <div style={{ padding: "0 8px" }}>
              <h2 style={{ paddingLeft: "8px", margin: 0, color: "hsl(0,0%,98%)" }}>{this.props.title}</h2>
            </div>
          }
          {this.props.children}
        </div>
      </Panel>);
  }
}
