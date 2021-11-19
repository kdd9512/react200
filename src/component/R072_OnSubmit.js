import React, {Component} from "react";

class R072_OnSubmit extends Component {

    submit(e) {
        e.preventDefault();
        let inputValue = document.getElementById("onSubId").value;
        console.log("inputValue : " + inputValue);
    }

    render() {
        return (
            <form onSubmit={this.submit} style={{marginTop: "50px", marginBottom: "50px"}}>
                <input type="text" id="onSubId"/>
                <input type="submit" value="submit"/>
            </form>
        );
    }

}

export default R072_OnSubmit;