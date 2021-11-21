import React, {Component} from "react";
import {connect} from "react-redux";
import {add} from "../actions";

class R081_ReactReduxStrAddBtn extends Component {

    render() {
        return (
            <div>
                {/*<input type="button" value="react200" onClick={this.addString}/>*/}
                <input type="button" value="react200" onClick={this.props.addString}/>
            </div>
        );
    }

    // addString = () => {
    //     this.props.store.dispatch(add());
    // }

}

// mapDispatchToProps 함수.
// reducer 에 action 을 전달하는 dispatch 를 인자로 받을 수 있다.
let mapDispatchToProps = (dispatch, props) => {
    console.log("Props from App.js : " + props.AppProp)
    return {
        // addString 을 바인딩. 이 함수는 props 에 할당된다.
        addString: () => dispatch(add())
    }
}

R081_ReactReduxStrAddBtn = connect(null, mapDispatchToProps)(R081_ReactReduxStrAddBtn);

export default R081_ReactReduxStrAddBtn;