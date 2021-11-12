import React, {Component} from "react";

class R033_ReturnMap extends Component {
    render() {
        const ele_Arr = [
            <li>React</li>,
            <li>200</li>,
            <li>ArrayMap</li>
        ]

        return (
            <ul style={{listStyle:"none"}}>
                {ele_Arr.map((array_val) => array_val)}
            </ul>
        );
    }
}

export default R033_ReturnMap