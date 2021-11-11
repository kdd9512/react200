import React, {Component} from "react";
import {shallowEqualArrays} from "shallow-equal";

// shallow-equal 을 이용하면 Component 클래스에서 PureComponent 와 같이
// state 의 값을 비교해 render() 를 실행할지를 결정할 수 있다.
class R029_ShallowEqual extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StateString: "react",
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualArrays(this.state, nextState);
    }

    componentDidMount() {
        const obj = {react: "200"};
        const Arr1 = ["리액트", obj];
        const Arr2 = ["리액트", obj];
        const Arr3 = ["리액트", {react: "200"}];

        // 두 변수가 같은 값인지 비교한다. Arr1 과 Arr2 는 완전히 같으므로 true 출력.
        console.log("shallowEqualArrays(Arr1, Arr2) : ", shallowEqualArrays(Arr1, Arr2));

        // Arr2 는 obj 를 참고하고 Arr3 역시 obj 와 같은 내용을 갖는 object 를 갖지만,
        // 두 object 는 서로 다른 객체이다.
        console.log("shallowEqualArrays(Arr2, Arr3) : ", shallowEqualArrays(Arr2, Arr3));
    }


    render() {
        console.log("start R029 render()...")
        return (
            <div style={{padding: "0px"}}>
                <h2> R029 </h2>
            </div>
        );
    }
}

export default R029_ShallowEqual;