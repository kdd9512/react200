import React, {Component} from "react";

class R019_PropsBool extends Component {


    render() {
        let {
            TrueFalse
        } = this.props;

        return (
            <div style={{padding:"0px"}}>
                {TrueFalse ? "2. R019_bool : ": "1. R019_bool : "}
                {TrueFalse.toString()}
            </div>
        );
    }
}
export default R019_PropsBool;