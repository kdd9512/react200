import React,{Component} from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

class R050_ReactstrapPagination extends Component {

    pagination = (type) => {
        alert("GO " + type)
    }

    render() {
        return (
            <>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("previous")}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("1")}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("2")}>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination("last")}/>
                    </PaginationItem>
                </Pagination>
            </>
        );
    }

}
export default R050_ReactstrapPagination;