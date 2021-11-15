import React, {Component} from "react";

class R059_FetchGet extends Component {

    fetchGet = async () => {
        const resp = await fetch("http://date.jsontest.com/get");
        const body = await resp.json();
        console.log(resp)
        alert(body.date);
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R059 FetchGet</h1>
                <button onClick={this.fetchGet}>GET</button>
            </div>
        );
    }

}

export default R059_FetchGet