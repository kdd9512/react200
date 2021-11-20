import React, {Component} from "react";
import Children from "../context/contextChildren"

const {Provider, Consumer} = React.createContext();
export {Consumer}

class R076_ContextApi extends Component{

    render() {
        return (
            <Provider value="React 200" style={{marginTop: "50px", marginBottom: "50px"}}>
                <h3>R076 ContextApi</h3>
                <Children/>
            </Provider>
        );
    }

}

export default R076_ContextApi;