import React, {Component} from "react";
import {Button, PopoverBody, PopoverHeader, UncontrolledPopover} from "reactstrap";


class R051_ReactstrapPopover extends Component {

    render() {
        return (
            <>
                <Button id="popover_id" type="button">
                    Popover btn
                </Button>
                <UncontrolledPopover target="popover_id" placement="right">
                    <PopoverHeader>REACT 200</PopoverHeader>
                    <PopoverBody>
                        al;gfn;dlfgn  aewr ognaon ng  unar eiog    unaerg
                        al;gfn;dlfgn  aewr ognaon ng  unar eiog    unaerg
                        al;gfn;dlfgn  aewr ognaon ng  unar eiog    unaerg
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        );
    }

}
export default R051_ReactstrapPopover;