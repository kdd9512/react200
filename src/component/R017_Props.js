import React, {Component} from "react";

class R017_Props extends Component {

    render() {
        // this.props.전달받은 props 변수명 으로 해당 데이터를 사용.
        let props_val = this.props.props_val;

        // props 를 가공하고자 할 때, props 자체를 수정하지 말고, render 에서 가공한다.
        props_val += ' from App.js';


        return (
            <div>{props_val}</div>
        )
    }
}

export default R017_Props;