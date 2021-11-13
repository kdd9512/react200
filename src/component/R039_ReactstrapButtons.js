import React, {Component} from "react";
import {Button} from "reactstrap";

class R039_ReactstrapButtons extends Component {

    render() {
        return (
            <div style={{padding: "0px"}}>
                <Button color="primary"> primary </Button>
                <Button color="info"> info </Button>
                <Button color="success"> success </Button>
                <Button color="warning"> warning </Button>
                <Button color="danger"> danger </Button>
                <Button color="dark"> dark </Button>
                <Button color="secondary"> secondary </Button>
                <Button color="light"> light </Button>
            </div>
        );
    }
}
export default R039_ReactstrapButtons