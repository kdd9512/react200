import React,{Component} from "react";

class R010_Variable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let name = 'react';
        console.log("name : " + name);

        // 중복선언 불가.
        // let name = "200"
        // console.log("name : " + name);

        // 변수 let 은 재선언이 가능하며 가장 최근에 재선언한 값만 저장한다.
        name = "react200"
        console.log("name(재선언) : " + name);

        const constName = "react const";
        console.log("constName : " + constName);

        // 상수 const 는 재선언이 불가능.
        // constName = "react";
    }

    render() {
        return (
            <h2>10. 변수(let/const) 사용하기.</h2>
        )
    }
}

export default R010_Variable;