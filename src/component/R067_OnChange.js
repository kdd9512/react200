import React,{Component} from "react";

class R067_OnChange extends Component{

    change = (e) => {
        let val = e.target.value;
        console.log("param : " + val)
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <input type="text" onChange={this.change}/>
                <select onChange={this.change}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        );
    }

}

export default R067_OnChange