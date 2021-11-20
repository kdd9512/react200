import React, {Component, createContext} from "react";
import Children from "../context/contextChildren3";

const {Provider, Consumer} = createContext();
export {Consumer}

class R077_ContextApi extends Component {
    constructor(props) {
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this);
    }

    setStateFunc(val) {
        this.setState({
            name: val
        });
    }

    render() {
        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc
        }
        return (
            <Provider value={content}
                style={{marginTop: "50px", marginBottom: "50px"}}>
                <h3>R077 ContextApi</h3>
                <Children/>
            </Provider>
        );
    }

}

export default R077_ContextApi;