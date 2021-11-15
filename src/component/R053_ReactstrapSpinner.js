import React,{Component} from "react";
import {Spinner} from "reactstrap";


class R053_ReactstrapSpinner extends Component {

    render() {
        return (
            <div style={{margin:"40px"}}>
                <Spinner color="secondary"/>
                <Spinner color="success"/>
                <Spinner color="dark" type="grow"/>
                <Spinner color="info" type="grow"/>
                <Spinner color="primary" size="sm"/>
                <Spinner color="dark" style={{width: "10rem", height:"0.5rem"}}/>
                <Spinner color="secondary" style={{width: "10rem", height:"10rem"}}/>
                <Spinner color="primary" style={{width: "3rem", height:"10rem"}}
                type="grow"/>
            </div>
        );
    }

}
export default R053_ReactstrapSpinner;