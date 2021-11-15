import React, {Component} from "react";
import axios from "axios";

class R062_AxiosPost extends Component {

    axiosPost = () => {
        axios.post("http://date.jsontest.com/axiospost", {
            a: "react", b: "200"
        }).then(
            resp => {
                alert(resp.data.date)
            }
        )
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R062 AxiosPost</h1>
                <button onClick={this.axiosPost}>AxiosPost</button>
            </div>
        );
    }

}

export default R062_AxiosPost;