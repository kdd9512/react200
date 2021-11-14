import React, {Component} from "react";
import {Button} from "reactstrap";

class R046_ReactstrapJumbotron extends Component {

    // ReactStrap 에 jumbotron 이 없으므로, bootstrap 라이브러리 다운받아서 className="jumbotron" 으로 사용함.
    // 실제로는 React 가 전혀 필요 없는 작업.
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet"/>
                <div className="jumbotron" style={{backgroundColor: "#d38c7c", margin:"30px"}}>
                    <h1 className="display-4">REACT200</h1>
                    <p className="h4">sdfaegawerbaw;fjbna;</p>
                    <hr className="my2"/>
                    <p>ds;fljgs;dgnb;eorgn;aoenagdg</p>
                    <p className="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </div>
            </div>
        );
    }

}

export default R046_ReactstrapJumbotron;