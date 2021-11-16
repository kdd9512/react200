import React,{Component} from "react";

class R066_OnClick extends Component {

    btnClick = (param) => {
        if (typeof param != "string") {
            param = "Click a";
        }
        console.log("param : " + param)
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R066 OnClick</h1>
                <button onClick={(e) => this.btnClick("Click Button")}>
                    Click Button
                </button>
                <div onClick={(e) => this.btnClick("Click div")}>Click div</div>

                {/*parameter 없이 onClick 에 반응하여 함수 실행.*/}
                <a href="/" onClick={this.btnClick}>Click a</a>
            </div>
        );
    }

}

export default R066_OnClick;