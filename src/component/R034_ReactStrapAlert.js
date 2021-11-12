import React,{Component} from "react";
import {Alert, UncontrolledAlert} from "reactstrap";


class R034_ReactStrapAlert extends Component {
    render() {
        return (
            <div>
                <Alert color="light">
                    simple Alert : [color: light]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert : [color:warning]
                </UncontrolledAlert>
            </div>
        );
    }
}

export default R034_ReactStrapAlert;