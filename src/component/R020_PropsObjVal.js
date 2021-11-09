import React, {Component} from "react";
import proptypes from "prop-types";

class R020_PropsObjVal extends Component {

    render() {
        let {
            ObjectJson
        } = this.props;

        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        );
    }
}


R020_PropsObjVal.propTypes = {
    ObjectJson: proptypes.shape({
        react: proptypes.string,
        num: proptypes.number,
    })
}

export default R020_PropsObjVal;