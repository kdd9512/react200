import React,{Component} from "react";

class R068_OnMouseMove extends Component {

    onMouseMove (tag) {
        console.log("tag : " + tag)
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <div onMouseMove={e => this.onMouseMove("div")}>
                    <h1>R068 OnMouseMove</h1>
                </div>
                <input type="text" onMouseMove={e => this.onMouseMove("input")}/>
                <select onMouseMove={e => this.onMouseMove("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        );
    }

}

export default R068_OnMouseMove