import React, {Component} from "react";

class R011_SpreadOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // JS Array
        let letArray1 = ["123", "234"];
        let letArray2 = ["345", "456"];
        // let sumLetArray = [letArray1[0], letArray1[1], letArray2[0], letArray2[1]];
        let sumLetArray1 = [].concat(letArray1, letArray2);
        console.log("1. sumLetArray1 : " + sumLetArray1);

        // Es6 Array
        let sumLetArray2 = [...letArray1, ...letArray2];
        console.log("2. sumLetArray2 : " + sumLetArray2);

        const [sum1, sum2, ...remain] = sumLetArray2;
        console.log("3. sum1 : " + sum1 + ", sum2 : " + sum2 + ", remain : " + remain);


        // Object
        let letObj1 = {key1: "let1", key2: "let2"};
        let letObj2 = {key2: "noob1", key3: "let3"};

        // JS Object
        let sumLetObj1 = Object.assign({}, letObj1, letObj2);
        console.log("4. sumLetObj1 : " + JSON.stringify(sumLetObj1));

        // Es6 Object
        let sumLetObj2 = {...letObj1, ...letObj2};
        console.log("5. sumLetObj2 : " + JSON.stringify(sumLetObj2));

        let {key1, key2, ...etc} = sumLetObj2;
        console.log(
            "6. key1 : " + key1 +
            ", key2 : " + key2 +
            ", etc : " + JSON.stringify(etc)
        );
    }

    render() {
        return (
            <h2>11. Spread Operator 사용.(Es6 의 rest 표현 사용)</h2>
        )
    }
}

export default R011_SpreadOperator;