import React, {Component} from "react";
import {Button, ButtonGroup} from "reactstrap";

class R038_ReactstrapButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: "10",
            default: "10"
        }
    }

    move = (type, e) => {
        switch (type) {
            case "left" : {
                this.setState({num: this.state.num - 1});
                break;
            }
            case "middle" : {
                this.setState({num: parseInt(this.state.default)});
                break;
            }
            case "right" : {
                this.setState({num: this.state.num + 1});
                break;
            }
            default : {
                break;
            }
        }
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <ButtonGroup style={{padding: "0px"}}>
                    <Button onClick={e => this.move("left")}>left</Button>
                    <Button onClick={e => this.move("middle")}>middle</Button>
                    <Button onClick={e => this.move("right")}>right</Button>
                </ButtonGroup>
                <br/>{this.state.num}
            </div>

        );
    }
}

export default R038_ReactstrapButtonGroup