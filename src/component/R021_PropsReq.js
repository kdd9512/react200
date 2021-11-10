import React, {Component} from "react";
import datatype from "prop-types";

class R021_PropsReq extends Component {

    render() {
        let {
            ReactString,
            ReactNum
        } = this.props;

        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNum}
            </div>
        );
    }
}

R021_PropsReq.propTypes = {
    // 반드시 필요한 속성을 지정하여 해당 속성이 없다면 console 창에서 오류를 출력하게 한다.
    ReactString: datatype.string.isRequired,
}

export default R021_PropsReq;