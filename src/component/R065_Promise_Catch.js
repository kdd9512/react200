import React,{Component} from "react";

class R065_Promise_Catch extends Component {

    promiseCatch = () => {

        // parameter 로 두 개의 함수를 받으면 하나는 이행(resolve),
        // 다른 하나는 거부(reject) 함수로 사용된다.
        new Promise((resolve, reject) => {

            // 거부 함수를 실행. Error 객체로 error 를 일부러 발생시킴.
            reject(Error("Error Msg"));

            // 거부 함수로 인해 예외 상황이 발생하여 이 함수는 실행되지 않을 것이다.
        }).then(result => {
            console.log(result)

            // 예외 상황이 발생하게 되면 이 .catch 함수가 실행된다.
            // 거부 함수에서 전달받은 parameter (= Error("Error Msg")) 를
            // 사용할 수 있게 된다. (이 경우는 console 에 출력.)
        }).catch(result => {
            console.log("catch : " + result);
        })
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R065 Promise Catch</h1>
                <button onClick={this.promiseCatch}>Run Promise Catch</button>
            </div>
        );
    }

}

export default R065_Promise_Catch;