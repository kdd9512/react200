import React, {Component} from "react";

class R069_OnMouseOver extends Component {

    mouseOver(tag) {
        console.log("tag : " + tag)
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <div onMouseOver={e => this.mouseOver("div")}>
                    <h1>R069 OnMouseOver</h1>
                </div>
                <input type="text" onMouseOver={e => this.mouseOver("input")}/>
                <select onMouseOver={e => this.mouseOver("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        );
    }

}

export default R069_OnMouseOver