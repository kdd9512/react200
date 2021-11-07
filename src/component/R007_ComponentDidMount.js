import React, {Component} from "react";

class R007_ComponentDidMount extends Component {
    static getDerivedStateFromProps (props, state) {
        console.log("2. R007 getDerivedStateFromProps call..." + props.prop_value);
        return {tmp_state : props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log("1. R007 constructor call...")
    }

    componentDidMount() {
        console.log("4. R007 componentDidMount call...")
        console.log("5. R007 tmp_state " + this.state.tmp_state);
    }

    render() {
        console.log("3. R007 render call...")
        return (
            <h2>7. ComponentDidMount 사용. 첫 렌더링을 마치고 호출된다.</h2>
        )
    }
}

export default R007_ComponentDidMount;