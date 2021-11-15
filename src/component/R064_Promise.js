import React, {Component} from "react";
import {func} from "prop-types";

class R064_Promise extends Component {

    examplePromise = () => {
        new Promise(resolve => {
            setTimeout(function () {

                // resolve 의 값을 정의.
                resolve("react");

                // 설정한 시간 이후에 이 function 을 실행.
            }, 1500);
        }).then(function (result) {

            // result 를 출력 (=전달받은 resolve 값)
            console.log(result);

            return result + 200;
        }).then(result => {

            // 위에서 받은 result 값인 "react + 200"을 출력
            // result : react200
            console.log(result);
        })
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R064 Promise</h1>
                <button onClick={this.examplePromise}>Run examplePromise</button>
            </div>
        );
    }

}

export default R064_Promise;