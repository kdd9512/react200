import React, {Component} from "react";
import Swal from "sweetalert2";

class R058_Sweetalert2Confirm extends Component {

    deleteAlert = () => {
        Swal.fire({
            title: "정말 삭제하시겠습니까>",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#4b088a",
            cancelButtonColor: "#01df01",
            confirmButtonText:"예",
            cancelButtonText:"아니오",
            confirmButtonAriaLabel:"confirm",
            cancelButtonAriaLabel:"cancel"
        }).then ((result) => {
            if (result.value) {
                document.getElementById("deleteThis").remove();
                Swal.fire(
                    "Deleted",
                    "Sweetalert2 삭제 완료",
                    "success"
                )
            }
        })
    }


    render() {
        return (
            <div id="deleteThis">
                <h1>DELETE THIS (R058)</h1>
                <button onClick={e => this.deleteAlert()}>DELETE</button>
            </div>
        );
    }

}

export default R058_Sweetalert2Confirm;