import React, {Component} from "react";
import {UncontrolledCarousel} from "reactstrap";

// carousel  내용들을 Array 상수 로 만든다.
const items = [
    {
        src: "https://image.freepik.com/free-vector/dark-background-with-dynamic-shapes_23-2148865191.jpg",
        altTest: "slide1 image",
        caption: "1",
        header: "slide1 title"
    },
    {
        src: "https://image.freepik.com/free-vector/dark-background-with-dynamic-shapes_23-2148865191.jpg",
        altTest: "slide2 image",
        caption: "2",
        header: "slide2 title"
    },
    {
        src: "https://image.freepik.com/free-vector/dark-background-with-dynamic-shapes_23-2148865191.jpg",
        altTest: "slide3 image",
        caption: "3",
        header: "slide3 title"
    }
]

class R041_ReactstrapCarousel extends Component {

    render() {
        return (
            <UncontrolledCarousel items={items}/>
        );
    }
}

export default R041_ReactstrapCarousel;