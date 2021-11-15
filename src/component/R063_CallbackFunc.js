import React, {Component} from "react";

class R063_CallbackFunc extends Component {

    callbackFunc = () => {

        // parameter 로 int 값 1, callback function 을 전달.
        this.logPrint(1, function (return1) {

            // logPrint 에서 전달받은 param 인 return1 을 출력.
            console.log("return1 : " + return1);

            // return1 값과 또 다른 callback function 을 다시 한 번 전달.
            this.logPrint(return1, function (return2) {

                // logPrint 에서 전달받은 param 인 return2 출력.
                console.log("return2 : " + return2);
            })

            // this 를 정의하는 부분.
            // 이 예제의 경우 callbackFunc 외부에 있는 함수 logPrint 를 이용하고 있으므로,
            // 함수 밖의 this 를 함수 내부에서도 동일하게 사용하기 위해
            // class R063_CallbackFunc 로 this 를 통일시켜야 한다.
        }.bind(this));
    }

    logPrint(param, callback) {
        console.log("logPrint param : " + param);

        // 받은 param 에 자기자신(param) 을 더한다.
        param += param;

        // callback 함수에 다시 param 으로 전달하여 실행.
        callback(param);
    }


    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R063 CallbackFunc</h1>
                <button onClick={this.callbackFunc}>CallbackFunc</button>
            </div>
        );
    }

}

export default R063_CallbackFunc;