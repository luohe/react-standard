import React from "react";

/**
 * 演示空页面
 *
 * @author 张卓诚
 * @date 2018-12-24
 * @class Page1
 * @extends {(React.Component<PropsType<typeof mstp, typeof mdtp> & LoadingState & CropState>)}
 */
class Home extends React.Component<{}> {

  render() {
    // tslint:disable:jsx-no-multiline-js
    // tslint:disable:jsx-no-lambda

    return (
      <div>
        wellcome home!
      </div >
    );
  }
}
export default Home;
