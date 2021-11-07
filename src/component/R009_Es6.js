import React, {Component} from "react";

class R009_Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let jsString1 = "javascript";
        let jsString2 = "\n call.."
        console.log(jsString1 + '문자열' + jsString2 + '~');

        let Es6String1 = 'This is';
        let Es6String2 = 'Es6';
        console.log(`${Es6String1} ${Es6String2}`);

        let LongString = "Es6 에 추가된 String 함수";
        console.log("startsWith : " + LongString.startsWith("Es6 에 추가된"));
        console.log("endsWith : " + LongString.endsWith("함수"));
        console.log("includes : " + LongString.includes("String"));
    }

    render() {
        return (
            <h2>9. Es6 사용하기.</h2>
        );
    }
}

export default R009_Es6;