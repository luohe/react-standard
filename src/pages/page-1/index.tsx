import React from "react";
import { Todos } from "../../containers/todos";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Store, AppAction, ActionNames } from "../../reducers";
import { UserContext } from "../../contexts/user";
import { LoadingContext, LoadingState } from "../../contexts/loding";
import { withContext } from "../../contexts";
import { PropsType } from "../../reducers/global-state-1";
import { ClassificationLayer, WrapGeojsonLayer, BaseLayer, MapPosition } from "@gago-react-gl/gago-react-gl";
import { Tabs, TabPanel } from "@gago/frame/es/siders/side-bar";
import { globalColorPalette1 } from "@gago/frame/es/colors/default";
import { SimpleCard } from "@gago/frame/es/cards/simple-card/simple-card";
import { Row, Col, Checkbox } from "antd";

interface Crops {
  corn: string;
  other: string;
}

interface CropState {
  corn: boolean;
  other: boolean;
}
const triggerCorn = (state: CropState) => ({ corn: !state.corn });
const triggerOther = (state: CropState) => ({ other: !state.other });

class Page1 extends React.Component<PropsType<typeof mstp, typeof mdtp> & LoadingState & CropState> {
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
        <BaseLayer id="base-layer" type="Google_Normal_Map"/>
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
            corn: "#47d1af",
            other: "#6c94ea",
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
        <Tabs colorPalette={globalColorPalette1}>
          <TabPanel title="第一个" key="1" >
          <SimpleCard colorPalette={globalColorPalette1} rightComponent={null}>
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
        </SimpleCard>
        <SimpleCard colorPalette={globalColorPalette1} rightComponent={null}>
        <Row>
          <Col span={24}>
            <Checkbox checked={corn} onChange={this.triggerCorn_}>
              玉米
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox checked={other} onChange={this.triggerOther_}>
              其他
            </Checkbox>
          </Col>
        </Row>
        </SimpleCard>
        </TabPanel>
        </Tabs>

      </div>
    );
  }
  private triggerCorn_ = () => {
    this.setState(triggerCorn);
  }
  private triggerOther_ = () => {
    this.setState(triggerOther);
  }
}

const mstp = (store: Store) => ({ store });
const mdtp = (dispatch: Dispatch<AppAction>) => ({ dispatch });
export default connect(mstp, mdtp)(withContext(LoadingContext)(Page1));
