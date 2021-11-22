import React, {Component} from "react";
import cookie from "react-cookies";

class R085_cookieSave extends Component {

    componentDidMount() {
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save("userid", "react200" ,
            {
                path: "/",
                expires,
                // secure - 웹 브라우저 / 서버가 HTTPS 로 통신하는 경우에만 쿠키를 저장.
                // httpOnly - document.cookie 라는 JS 코드로 쿠키에 비정상적 접근하는 것을 막는다.
                // secure: true,
                // httpOnly: true,
            });

    }

    render() {
        return (
            <div>
                <h3>R085 react cookies Save</h3>
            </div>
        );
    }

}

export default R085_cookieSave;