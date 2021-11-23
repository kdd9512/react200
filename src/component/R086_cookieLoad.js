import React, {Component} from "react";
import cookie from "react-cookies";

class R086_cookieLoad extends Component {

    // componentDidMount() {
    //     const expires = new Date();
    //     expires.setMinutes(expires.getMinutes() + 60);
    //     cookie.save("userid", "react200" ,
    //         {
    //             path:"/",
    //             expires,
    //             // secure:true,
    //             // httpOnly: true,
    //         });
    //
    // }

    cookieLoad(){
        setTimeout(function() {
            alert(cookie.load('userid'));
        }, 1000);
    }

    render() {
        return (
            <div style={{marginTop: "50px", marginBottom: "50px"}}>
                <h3>R086 React Cookies Load</h3>
                <button onClick={this.cookieLoad}>Load</button>
            </div>
        );
    }

}

export default R086_cookieLoad;