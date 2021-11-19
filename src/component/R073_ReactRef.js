import React, {Component} from "react";

class R073_ReactRef extends Component {

    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }

    refFocus = (e) => {
        this.InputRef.current.focus();
    }

    jsFocus() {
        document.getElementById("refId").focus();
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <input id="refId" type="text" ref={this.InputRef}/>
                <input type="button" value="Ref Focus" onClick={this.refFocus}/>
                <input type="button" value="JS Focus"
                       onClick={this.jsFocus}/>
            </div>
        );
    }

}

export default R073_ReactRef;