import React, {Component} from "react";

class R060_FetchPost extends Component {

    fetchPost = async () => {
        const resp = await fetch("http://date.jsontest.com/post", {
            method: "POST",
            headers: {
                // 이 부분 틀리면 안된다. Content-Type 이다.
                "Content-Type": "application/json",
            },
            body: {
                a: "react",
                b: "200"
            }
        });
        const body = await resp.json();
        console.log(resp)
        alert(body.date);
    }


    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h1>R060 Fetch Post</h1>
                <button onClick={this.fetchPost}>POST</button>
            </div>
        );
    }

}

export default R060_FetchPost;