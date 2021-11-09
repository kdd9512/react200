import React, {Component} from "react";
import proptypes from "prop-types";

class R018_PropTypes extends Component {


    render() {
        // props 가져오기.
        let {
            String,
            Number,
            Boolean,
            Array,
            ObjectJson,
            Function
        } = this.props;

        // 전달받은 props 를 출력.
        return (
            <div style={{padding: "0px"}}>
                <p>StringProps : {String}</p>
                <p>NumberProps : {Number}</p>
                <span>booleanProps : {Boolean.toString()}</span>
                <p>ArrayProps : {Array.toString()}</p>
                <p>ObjectJsonProps : {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps : {Function}</p>
            </div>
        );
    }

}

// prop_type 을 이용하여 자료형을 지정하고,
// 일치하지 않는 경우 console 창에서 error 를 출력.
R018_PropTypes.propTypes = {
    // 실제 자료형은 String 타입이지만 일부러 경고를 보기 위해
    // 일부러 자료유형을 number 로 설정.
    String: proptypes.number,
    Number: proptypes.number,
    Boolean: proptypes.bool,
    Array: proptypes.array,
    ObjectJson: proptypes.object,
    Function: proptypes.func,
}


export default R018_PropTypes;