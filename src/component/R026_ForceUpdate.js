import React, {Component} from "react";

class R026_ForceUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StateString2 : "react",
        }
    }

    StateChange = (flag) => {
        if (flag == "direct") {
            this.state.StateString2 = "리액트";
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.StateChange("direct",e)}>
                    forceUpdate 로 강제로 state 변경.
                </button><br/>
                StateString2 : {this.state.StateString2}
            </div>
        );
    }
}

export default R026_ForceUpdate;