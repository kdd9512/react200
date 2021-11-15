import React, {Component} from "react";
import Swal from "sweetalert2";

class R057_Sweetalert2Position extends Component {

    saveAlert = (flag, positionFlag, e) => {
        Swal.fire({
            position: positionFlag,
            icon: "success",
            title: flag + " 되었습니다.",
            showConfirmButton: false,
            timer: 1500
        })
    }

    /**
     alert 창의 위치 조절은 positionFlag 가 결정.

     center : 중앙( 기본값 )
     center-start: 중앙 좌측
     center-end: 중앙 우측

     top: 중앙상단
     top-start: 좌상단
     top-end: 우상단

     bottom: 중앙 하단
     bottom-start: 우하단
     bottom-end: 좌하단
     **/
    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>sweetAlert2</h1>
                <button onClick={e => this.saveAlert("저장", "center")}>save</button>
                <button onClick={e => this.saveAlert("수정", "center")}>alter</button>
            </div>
        );
    }


}

export default R057_Sweetalert2Position;