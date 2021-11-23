import React, {Component} from "react";
import cookie from "react-cookies";

class R087_cookieRemove extends Component {

    // componentDidMount() {
    //     const expires = new Date();
    //     expires.setMinutes(expires.getMinutes() + 60);
    //     cookie.save("userid", "react200",
    //         {
    //             path: "/",
    //             expires,
    //             // secure:true,
    //             // httpOnly: true,
    //         });
    // }

    removeCookie() {
        setTimeout(function () {
                cookie.remove("userid", {path: "/"});
            }, 1000
        )
        setTimeout(function () {
            alert("Cookie Deleted. Please Reload the DevTools.");
        }, 3000);
    }

    render() {
        return (
            <div>
                <h3>R087 React Cookies Remove</h3>
                <button onClick={this.removeCookie}>Remove</button>
            </div>
        );
    }

}

export default R087_cookieRemove;