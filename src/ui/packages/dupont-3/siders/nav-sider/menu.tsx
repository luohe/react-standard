import * as React from "react";
import styled from "styled-components";
import { ColorProps, GlobalColorPalette } from "../../../../interface/color";
export class Menu extends React.Component<
  {
    title: React.ReactNode;
    className: string;
    isFold: boolean;
    titleOnClick(): any;
  } & ColorProps<GlobalColorPalette>
  > {
  // tslint:disable-next-line:naming-convention variable-name
  Root = styled.div`
    color: ${this.props.colorPalette.whiteColor[5]};
    *{
      color: ${this.props.colorPalette.whiteColor[5]};
    }
    .sub-nav{
      overflow: hidden;
    }
    .fold.sub-nav{
      height: 0;
    }
    & > *:first-child{
      padding-left: 24px;
      display: flex;
      height: 48px;
    }
    .selected{
        background-color: ${this.props.colorPalette.blackColor[4]};
        *{
          color: ${this.props.colorPalette.whiteColor[8]};
        }
        :after{
          content: "";
          border-right: 3px solid ${this.props.colorPalette.mainColor[5]};
          position: absolute;
          top: 0;
          box-sizing: border-box;
          width: 3px;
          height: 100%;
          right: 0;
        }
      }
      .nav-text *{
        width: 100%;
      }
  `;
  render() {
    return (
      <this.Root className={this.props.className} key={undefined}>
        <div onClick={this.props.titleOnClick}>
          {this.props.title}
        </div>
        <div className={"sub-nav" + (this.props.isFold ? " fold" : "")}>{this.props.children}</div>
      </this.Root>
    );
  }
}
