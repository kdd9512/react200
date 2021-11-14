import React, {Component} from "react";
import {Button, InputGroup, InputGroupText} from "reactstrap";

class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
                <InputGroup>
                    <input placeholder="user id"/>
                    <InputGroupText addonType="append">
                        <span>@email.com</span>
                    </InputGroupText>
                </InputGroup>
                <InputGroup>
                    <InputGroupText addonType="prepend">
                        <Button>Button</Button>
                    </InputGroupText>
                    <input/>
                </InputGroup>
            </>
        );
    }
}

export default R045_ReactstrapInputGroup;