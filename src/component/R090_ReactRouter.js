import React, {Component} from "react";
import {Link} from "react-router-dom";

class R090_ReactRouter extends Component {

    render() {
        return (
            <div>
                <h1>R090 ReactRouter</h1>
                <Link to={"/reactRouter"}>Go To reactRouter</Link><br/>
                <Link to={"/reactRouter2"}>Go To reactRouter2</Link><br/>
            </div>
        );
    }

}

export default R090_ReactRouter