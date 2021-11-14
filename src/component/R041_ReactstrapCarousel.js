import React, {Component} from "react";
import {UncontrolledCarousel} from "reactstrap";

// carousel  내용들을 Array 상수 로 만든다.
const items = [
    {
        src: "https://image.freepik.com/free-vector/dark-background-with-dynamic-shapes_23-2148865191.jpg",
        altTest: "slide1 image",
        caption: "slide1 desc",
        header: "slide1 title",
        key: "1"
    },
    {
        src: "https://image.freepik.com/free-vector/dark-background-with-dynamic-shapes_23-2148865191.jpg",
        altTest: "slide2 image",
        caption: "slide2 desc",
        header: "slide2 title",
        key: "2"
    },
    {
        src: "https://image.freepik.com/free-vector/dark-background-with-dynamic-shapes_23-2148865191.jpg",
        altTest: "slide3 image",
        caption: "slide3 desc",
        header: "slide3 title",
        key:"3"
    }
]

class R041_ReactstrapCarousel extends Component {

    render() {
        return (
            <UncontrolledCarousel items={items} style={{padding:"0px"}}/>
        );
    }
}

export default R041_ReactstrapCarousel;