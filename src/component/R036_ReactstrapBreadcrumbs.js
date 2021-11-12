import React,{Component} from "react";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">bottom</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{marginTop:"1000px"}}>
                    <span>buttom</span>
                </div>
            </div>
        );
    }
}
export default R036_ReactstrapBreadcrumbs