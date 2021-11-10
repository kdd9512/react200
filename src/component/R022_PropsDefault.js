import React, {Component} from "react";

class R022_PropsDefault extends Component {

    render() {
        let {
            ReactString,
            ReactNum
        } = this.props;

        return (
            <div style={{padding:"0px"}}>
                {ReactString}{ReactNum}
            </div>
        );
    }
}

// .defaultProps
// 해당 props 의 default 값을 지정한다.
// 이 예제의 경우처럼 해당 props 가 없을 경우 이하의 값을 기본으로 사용한다.
// 만약 지정한 값이 있는 경우, 해당 값이 우선시 된다.
// 즉, props 의 값이 이미 지정된 ReactNum 은 999가 아니라 200을 출력.

R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNum: 999,
}

export default R022_PropsDefault;