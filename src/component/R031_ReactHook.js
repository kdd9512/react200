import React, {useEffect, useState} from "react";

function R031_ReactHook(props) {
    const [contents, setContents] = useState("R031. 리액트 Hooks");

    useEffect(() => {
        console.log("useEffect");
    });

    return (
        <div style={{padding:"0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents("useState")}>REACT HOOKS</button>
        </div>
    )
}

export default R031_ReactHook