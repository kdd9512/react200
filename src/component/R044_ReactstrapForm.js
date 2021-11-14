import React, {Component} from "react";
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";



class R044_ReactstrapForm extends Component {

    render() {
        return (
            <Form>
                <Label for="exampleGender">Gender</Label>
                <Input type="select" bsSize="sm">
                    <option>none</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label><br/>
                            <input type="text" name="address" id="address"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleMobile">Mobile</Label><br/>
                            <input type="text" name="mobile" id="mobile"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleAge">Age</Label><br/>
                            <input type="text" name="age" id="age"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default R044_ReactstrapForm;