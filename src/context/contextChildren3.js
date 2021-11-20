import React, {Component} from "react";
import {Consumer} from "../component/R077_ContextApi";

class contextChildren3 extends Component {

    render() {
        return (
            <Consumer>
                {contextValue =>
                    <button onClick={e => contextValue.setStateFunc("contextApi")}>
                        {contextValue.name}_button
                    </button>
                }
            </Consumer>
        );
    }
}

export default contextChildren3;