import React, {Component} from "react";

class R074_ReactCurring extends Component {

    plusNumOrString(c, d) {
        return c + d;
    }

    plusFunc1(a) {
        return function (b) {
            return this.plusNumOrString(a, b);
        }.bind(this)
    }

    // plusFunc 을 arrow function 화 한 것.
    plusFunc2 = a => b => this.plusNumOrString(a, b);

    plusFunc(a) {
        return this.plusFunc1(a)(200)
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <input type="button" value="NumberPlus"
                       onClick={e => alert(this.plusFunc1(100))}/>
                <input type="button" value="StringPlus"
                       onClick={e => alert(this.plusFunc("react"))}/>
            </div>
        );
    }

}

export default R074_ReactCurring;