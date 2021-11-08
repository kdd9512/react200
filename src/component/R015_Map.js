import React, {Component} from "react";

class R015_Map extends Component {

    componentDidMount() {

        let mapArr = [1, 2, 3, 4, 5];
        // mapArr 에서 가져온 값 x 를 그대로 반환(x => x)하여 newMapArr 에 삽입.
        let newMapArr = mapArr.map(x => x);
        console.log("1. mapArr : [" + newMapArr + "]");

        // mapArr 에서 가져온 값 x 를 *2하여 반환(x => x)후 multiMapArr 에 삽입.
        let multiMapArr = mapArr.map(x => x * 2);
        console.log("2. multiMapArr : [" + multiMapArr + "]");

        // Object 설정. key 와 value 값 설정.
        let objArr = [
            {key: 'react', value: '200'},
            {key: "리액트", value: "이백"}
        ]

        // 배열 내 객체를 순서대로 가져온다(obj). index 는 기존 배열의 index.
        let mapObjArr = objArr.map((obj, index) => {
            console.log((index + 3) + ". obj : " + JSON.stringify(obj));

            // 새 객체 Obj 선언. 기존 객체(objArr)의 key, value 값을 이 객체에 저장.
            // 모든 반복이 종료되면 mapObjArr 에 반환 값들을 저장한다.
            let Obj = {};
            Obj[obj.key] = obj.value;

            return Obj
        });
        console.log("5. mapObjArr : " + JSON.stringify(mapObjArr));
    }

    render() {
        return (
            <h2>15. Map 사용하기.</h2>
        );
    }
}

export default R015_Map;