import React, {Component} from "react";

// LifeCycle 쓰려면 반드시 class 를 이용하여 extends Components 해야한다.
class R006_LifeCycle extends Component {
    static getDerivedStateFromProps (props, state) {
        console.log("2 .R006 getDerivedStateFromProps Call... " + props.prop_value);
        return {};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log("1. R006 constructor Call...");
    }

    render() {
        console.log("3. R006 render Call..");
        return (
            <h2>6. LifeCycle 사용</h2>
        )
    }
}

export default R006_LifeCycle;