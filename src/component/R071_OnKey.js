import React, {Component} from "react";

class R071_OnKey extends Component {

    // ev 는  문자열, e 는 event 객체
    onkey = (ev, e) => {
        let val = e.target.value;
        console.log("event : " + ev + ", value : " + val);
    }

    // onKeyDown / Up 은 키를 누르고 떼는 데에 반응한다. 한영키/print screen 은 인식 못한다.
    // onKeyPress 는 실제 문자가 입력되었을 때 반응하며, Ctrl/Alt/Shift 등을 인식하지 못한다.
    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                onKeyDown : <input type="text"
                                   onKeyDown={e => this.onkey("onKeyDown", e)}/><br/>
                onKeyPress : <input type="text"
                                    onKeyPress={e => this.onkey("onKeyPress", e)}/><br/>
                onKeyUP : <input type="text"
                                 onKeyUp={e => this.onkey("onKeyUp", e)}/>
            </div>
        );
    }

}

export default R071_OnKey;