import React, {Component} from "react";

class R008_shouldComponentUpdate extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("2. R008 getDerivedStateFromProps call..." + props.prop_value);
        return {tmp_state: props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log("1. R008 constructor call...");
    }

    componentDidMount() {
        console.log("4. R008 componentDidMount call...")
        console.log("5. R008 tmp_state : " + this.state.tmp_state);
        this.setState({tmp_state2: true})
    }

    shouldComponentUpdate(props, state) {
        console.log("6. R008 shouldComponentUpdate call... / tmp_state2 : " + state.tmp_state2);
        return state.tmp_state2;
    }

    render() {
        console.log("3. R008 render call...")
        return (
            <>
                <h2>8. shouldComponentUpdate 사용. </h2>
                <h2>boolean 값이 true 면 render 를 다시 한 번 호출한다.</h2>
            </>
        )
    }

}

export default R008_shouldComponentUpdate;