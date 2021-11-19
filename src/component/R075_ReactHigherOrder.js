import React, {Component} from "react";
import withHoc from "../hoc/withHocComponent";

class R075_ReactHigherOrder extends Component{

    render() {
        console.log("2. HocComponent render")
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h3>R075_ReactHigherOrder</h3>
                <h2>props.name : {this.props.name}</h2>
            </div>
        );
    }

}

export default withHoc(R075_ReactHigherOrder, "R075_ReactHigherOrder");