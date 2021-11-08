import React, {Component} from "react";

class R013_ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFunc: "React 200",
            num: 3
        };
    }

    componentDidMount() {
        Func1(1);
        this.Func2(1, 1);
        this.Func3(1, 3);
        this.Func4();
        this.Func5(0, 2, 3);

        function Func1(num1) {
            return console.log(num1 + '. Es5 Function');
        }
    }


    Func2 = (num1, num2) => {
        let sum = num1 + num2;
        console.log(sum + '. Arrow Function : ' + this.state.arrowFunc)
    }

    Func3 () {
        let this_bind = this;
        setTimeout(
            function () {
                console.log(this_bind.state.num +
                    ' . Es5 Callback Function noBind : ');
                // console.log(this.state.arrowFunc);
            }, 100);
    }

    Func4() {
        setTimeout(
            function () {
                console.log('4. Es5 Callback Function Bind : ' + this.state.arrowFunc);
            }.bind(this), 100);
    }

    Func5 = (n1, n2, n3) => {
        const sum = n1 + n2 + n3;
        setTimeout(() => {
                console.log(sum + ' . Arrow Callback Function : ' + this.state.arrowFunc)
            }, 100);
    }

    render() {
        return (
          <h2>13. Arrow Function 사용하기.</h2>
        );
    }

}

export default R013_ArrowFunction;