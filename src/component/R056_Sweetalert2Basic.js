import React, {Component} from "react";
import Swal from "sweetalert2";
import {Button} from "reactstrap";

class R056_Sweetalert2Basic extends Component {
    // 예제에서는 componentDidMount 를 이용하여 페이지를 띄우자마자 함수가 실행되게 했으나,
    // 거추장스러우므로 함수로 빼서 버튼을 누를 시 작동되게 변경.
    swalFire = () => {
        // Swal.fire("1. Sweetalert")
        // alert("2. alert()")
        Swal.fire("1. Sweetalert").then(
            result => {
                alert("2. result.value : " + result.value);
            }
        )
    }

    render() {
        return (
            <div style={{marginTop:"50px", marginBottom:"50px"}}>
                <h1>Test Sweetalert2 (R056)</h1>
                <Button onClick={this.swalFire}>Test Sweetalert</Button>
            </div>
        );
    }

}

export default R056_Sweetalert2Basic;