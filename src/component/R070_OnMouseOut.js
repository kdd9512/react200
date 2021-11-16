import React, {Component} from "react";

class R070_OnMouseOut extends Component {

    onMouseOut(tag) {
        console.log("tag : " + tag)
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <div onMouseOut={e => this.onMouseOut("div")}>
                    <h1>R069 OnMouseOver</h1>
                </div>
                <input type="text" onMouseOut={e => this.onMouseOut("input")}/>
                <select onMouseOut={e => this.onMouseOut("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        );
    }

}

export default R070_OnMouseOut