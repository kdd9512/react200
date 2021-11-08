import React, {Component} from "react";

class R012_ClassPrototype extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        // Es5 prototype
        let ExamCountFunc = (
            function () {
                function ExamCount(num) {
                    this.number = num;
                }

                ExamCount.prototype.showNum =
                    function () {
                        console.log("1. react_" + this.number);
                    };
                return ExamCount;
                // () : 초기값을 설정하기 위함.
            }());

        let cnt = new ExamCountFunc('200');
        cnt.showNum();


        // Es6 class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
            }

            showNum() {
                console.log(`2. react_${this.number2}`);
            }

        }

        let cnt2 = new ExamCountClass('이백');
        cnt2.showNum();
    }

    render() {
        return (
            <h2>12. 클래스와 프로토타입</h2>
        )
    }
}

export default R012_ClassPrototype;