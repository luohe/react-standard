import React from "react";
import { Todos } from "../../containers/todos";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Store, AppAction, ActionNames } from "../../reducers";
import { UserContext } from "../../contexts/user";
import { LoadingContext, LoadingState } from "../../contexts/loding";
import { withContext } from "../../contexts";
import { PropsType } from "../../reducers/global-state-1";
import { ClassificationLayer, WrapGeojsonLayer, MapPosition } from "@gago-react-gl/gago-react-gl";
import { Tabs, TabPanel } from "@gago/frame/es/siders/side-bar";
import { Card1 } from "@gago/frame/es/cards/card-1";
import { colorPalette as colorPaletteOrigin } from "../../color-palette";

const colorPalette = { ...colorPaletteOrigin, subColor: ["#47d1af", "#6c94ea", ...colorPaletteOrigin.subColor] };
interface Crops {
  corn: string;
  other: string;
}

interface CropState {
  corn: boolean;
  other: boolean;
}

/**
 * 演示redux的使用
 * 最好不要使用
 *
 * @author 张卓诚
 * @date 2018-12-24
 * @class Page1
 * @extends {(React.PureComponent<PropsType<typeof mstp, typeof mdtp> & LoadingState & CropState>)}
 * @deprecated
 */
class Page1 extends React.PureComponent<PropsType<typeof mstp, typeof mdtp> & LoadingState & CropState> {
  state: CropState = {
    corn: true,
    other: true,
  };

  render() {
    // tslint:disable:jsx-no-multiline-js
    // tslint:disable:jsx-no-lambda
    const { corn, other } = this.state;
    const insideActiveSorts: ("corn" | "other")[] = [];
    if (corn) {
      insideActiveSorts.push("corn");
    }
    if (other) {
      insideActiveSorts.push("other");
    }

    return (
      <div>
        <MapPosition
          zoom={10.5}
          center={{ lng: 114.8036962333814, lat: 38.35815858872809 }}
        />
        <ClassificationLayer<Crops>
          id="crop-2017-year"
          url="https://qiepian.gagogroup.cn/xinle_class/classification/2017/{z}/{x}/{y}.lerc"
          sourceMaxzoom={14}
          sourceMinzoom={9}
          insideSorts={{
            corn: [1, 2],
            other: [2, 3],
          }}
          insideActiveSorts={insideActiveSorts}
          insideColors={{
            corn: colorPalette.subColor[0],
            other: colorPalette.subColor[1],
          }}
        />
        <WrapGeojsonLayer
            id="geojson"
            data="static/data/xinlei.json"
            sourceMinzoom={5}
            sourceMaxzoom={15}
            showFill
            showLine
            showText
            fillColor="green"
            fillOpacity={0.1}
            textColor="black"
            textSize={12}
            textFiled="{Town}"
            // onClick={onClickLayer}
        />
        <Tabs colorPalette={colorPalette}>
          <TabPanel title="第一个" key="1" >
            <Card1
              title="卡片一"
              showExpandButton
              colorPalette={colorPalette}
              rightComponent={null}
            >
              <UserContext.Consumer>
                {({ login }) => (
                  <>
                    <Todos/>
                    <button onClick={() => this.props.dispatch({ type: ActionNames.Action1 })}>dispatch action1</button>
                    <button onClick={() => this.props.dispatch({ type: ActionNames.Action2 })}>dispatch action2</button>
                    <button onClick={() => login("a", "b")}>切换登陆用户</button>
                    <button onClick={() => { this.props.show(); setTimeout(() => this.props.dissmiss(), 2000); }}>3秒加载中...</button>
                    <div>{this.props.store.globalState1.action}</div>
                  </>
                )}
              </UserContext.Consumer>
            </Card1>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

const mstp = (store: Store) => ({ store });
const mdtp = (dispatch: Dispatch<AppAction>) => ({ dispatch });
export default connect(mstp, mdtp)(withContext(LoadingContext)(Page1));
