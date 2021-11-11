import React, {Component} from "react";

// Component 에서는 아래 예제와 같이 state 의 내용이 실제로 변경되었는지를
// 구분하지 않고 render 를 실행한다.
class R027_ComponentClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj: ['react', {react: "200"}],
        }
    }

    btnClick = (type) => {
        if (type == "String") {
            this.setState({StateString: "react"});
        } else {
            this.setState({StateArrayObj: ["react", {react: "200"}]} );
        }
    }

    render() {
        console.log("start R027 render()..")
        return (
            <div style={{padding:"0px"}}>
                <h2>R027 예제</h2>
                <button onClick={(e) => this.btnClick("String")}>
                    문자열 변경
                </button>
                <button onClick={(e) => this.btnClick("ArrayObject")}>
                    객체 배열 변경
                </button>
            </div>
        );
    }

}

export default R027_ComponentClass;