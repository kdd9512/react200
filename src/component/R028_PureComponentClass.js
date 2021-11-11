import React, {PureComponent} from "react";

// PureComponent 에서는 Component 와는 달리,
// state 에 저장되어 있는 내용을 기존값과 비교했을 때 변경되었을 때만 변경된 것으로 간주하고 render 를 실행한다.
class R028_PureComponentClass extends PureComponent {

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
        console.log("start R028 render()..")
        return (
            <div style={{padding:"0px"}}>
                <h2>R028 예제</h2>
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

export default R028_PureComponentClass