import React, {Component} from "react";
import {add} from "../actions";

class R078_StrAddButton extends Component {

    render() {
        return (
            <input value="add200" type="button" onClick={this.addString}/>
        );
    }

    addString = () => {
        this.props.store.dispatch(add())
    }

}

export default R078_StrAddButton;