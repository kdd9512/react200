import React, {Component} from "react";
import axios from "axios";

class R061_AxiosGet extends Component {

    axiosGet = () => {
        axios.get("http://date.jsontest.com/axiosget")
            .then(resp => {
                alert(resp.data.date)
            });
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R061 AxiosGet</h1>
                <button onClick={this.axiosGet}>AxiosGet</button>
            </div>
        );
    }

}

export default R061_AxiosGet;