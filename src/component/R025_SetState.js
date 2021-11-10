import React, {Component} from "react";

class R025_SetState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StateString: "react setState"
        }
    }

    StateChange = (flag) => {
        if (flag == "direct") {
            this.state.StateString = "리액트 setState"
            console.log(this.state.StateString)
        }
        if (flag == "setState") {
            this.setState({StateString: "REACT"});
            console.log(this.state.StateString)
        }
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChange("direct",e)}>
                    state 직접변경
                </button>
                <button onClick={(e) => this.StateChange("setState",e)}>
                    setState 사용하여 변경
                </button><br/>
                StateString : {this.state.StateString}
            </div>
        );
    }
}

export default R025_SetState;