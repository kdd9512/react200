import React, {Component} from "react";
// Jquery 사용시 $ 기호를 붙여 사용.
import $ from "jquery";

class R016_Jquery extends Component {

    input_alert = (e) => {
        // 이 함수를 실행하면, inputId 라는 ID 를 갖는 태그의 value 를 가져와 alert 창에 띄운다.
        let input_let = $("#inputId").val();
        alert(input_let);
    }

    render() {
        return (
            <div>
                <h2>16. JQuery 사용하기.</h2>
                <input id="inputId" name="inputName"/>
                <button id="btnId" onClick={e => this.input_alert(e)}>
                    JQUERY
                </button>
            </div>
        );
    }
}

export default R016_Jquery;