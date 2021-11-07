import React, {Component} from "react";

class R005_UsingConstructorProps extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("Constructor Call..")
    }

    render() {
        console.log("R005 render Call..")
        return (
            <h2>5. constructor(props) 사용하기.</h2>
        )
    }
}

export default R005_UsingConstructorProps;