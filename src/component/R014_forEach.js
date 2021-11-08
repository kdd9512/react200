import React, {Component} from "react";

class R014_forEach extends Component {
    componentDidMount() {

        let forArr = [1, 2, 3, 4, 5];
        let newArr = [];

        // 일반적인 for 문.
        // let i 로 초기값 을 설정하고 forArr 의 배열 크기만큼 함수를 반복하며, i는 점점 증가한다.
        for (let i = 0; i < forArr.length; i++) {
            newArr.push(forArr[i]);
        }
        console.log("1. newArr : [" + newArr + "]");

        // forEach 함수는 순번, 배열의 크기정보를 사용하지 않고,
        // 0부터 배열의 크기만큼 반복하며 순서대로 배열값을 반환한다.
        // 반복문이 실행될 때 마다 콜백 함수로 결과값을 받아 newForEachArr 에 삽입한다.
        let forEachArr = [2, 3, 4, 5, 6];
        let newForEachArr = [];
        forEachArr.forEach((result) => {
            newForEachArr.push(result);
        })
        console.log("2. newForEachArr : [" + newForEachArr + "]");

    }

    render() {
        return (
            <h2>14. forEach 사용.</h2>
        )
    }
}

export default R014_forEach;