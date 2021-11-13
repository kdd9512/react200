import React, {Component} from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

class R040_ReactstrapCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg
                        top height="200px"
                        src="https://image.freepik.com/free-vector/dark-background-with-dynamic-shapes_23-2148865191.jpg"
                        alt="Card Image"
                    />
                    <CardBody>
                        <CardTitle>Card Title</CardTitle>
                        <CardSubtitle>Card Subtitle</CardSubtitle>
                        <CardText>Card Text Card Text Card Text Card Text Card Text Card Text </CardText>
                        <Button>BUTTON</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default R040_ReactstrapCard