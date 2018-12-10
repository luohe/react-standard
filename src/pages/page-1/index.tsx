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
import { Tabs, TabPanel } from "@gago/frame/es/packages/package-1/siders/side-bar";
import { globalColorPalette1 } from "@gago/frame/es/packages/package-1/colors/default";
import { SimpleCard } from "@gago/frame/es/packages/package-1/cards/simple-card/simple-card";
import { Row, Col, Checkbox } from "antd";
import { ITable } from "@gago/frame/es/interface/chart";
import { CropAreaBadge } from "@gago/frame/es/charts/crop-area-badge";
import { CropAreaChart } from "@gago/frame/es/charts/crop-area-chart";
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

    // ITable<2, 1> 表示 data 字段中 除ID外的字符串有2列， 数字有1列
    const cropAreaChartTable: ITable<2, 1> = {
      title: "种植面积（万亩）",
      subtitle: "",
      description: "",
      defaultValue: [0, 0, 0, 0],

      // range 的每一列与 data 字段的每一列一一对应
      // 其中 ["玉米", "其他"]表示 data 字段中第一列的集合，用来展示图表的图例和区分类别，为必填
      // ["2015", "2016", "2017"] 表示纵坐标
      range: [[], ["玉米", "其他"], ["2015", "2016", "2017"], []],

      // head 表示 data 每一列数据的意义
      head: ["ID", "作物名称", "年份", "种植面积（万亩）"],

      // 第一列表示 ID
      // 第二列表示 作物名称
      // 第三列表示 年份
      // 第四列表示 某一作物的种植面积
      data: [
        ["0", "玉米", "2017", 38.1],
        ["1", "玉米", "2016", 46.1],
        ["2", "玉米", "2015", 12.3],
        ["3", "其他", "2017", 32.1],
        ["4", "其他", "2016", 22.1],
        ["5", "其他", "2015", 12.4]
      ],
    };

    const cropAreaBadgeTable: ITable<1, 2> = {
      title: "种植面积（万亩）",
      subtitle: "",
      description: "",
      defaultValue: [0, 0, 0, 0],
      range: [[], ["玉米", "其他"], [], []],

      // head 表示 data 每一列数据的意义
      head: ["ID", "作物名称", "变化趋势", "种植面积（万亩）"],

      // 第一列表示 ID
      // 第二列表示 作物名称
      // 第三列表示 某一作物的某一年与前一年的面积变化趋势，公式：（今年x作物面积 - 去年x作物面积）/ 今年x作物面积
      // 第四列表示 某一作物的种植面积
      data: [
        ["0", "玉米", -0.096, 39.0],
        ["1", "其他", 0.495, 7.8],
      ],
    };

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
        <Tabs key="1" colorPalette={globalColorPalette1}>
          <TabPanel tab="第一个" key="1" >
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
              <CropAreaBadgeCard colorPalette={globalColorPalette1} chartData={cropAreaBadgeTable} />
            </SimpleCard>
        <SimpleCard colorPalette={globalColorPalette1} rightComponent={null}>
            
            <div style={{height: 200}}>
                <CropAreaChartCard colorPalette={globalColorPalette1} chartData={cropAreaChartTable} />
            </div>
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
