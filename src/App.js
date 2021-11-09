import React from "react";
import "./App.css";
import R003 from "./component/R003_Component";
import R004 from "./component/R004_UsingRender";
import R005 from "./component/R005_UsingConstructorProps";
import R006 from "./component/R006_LifeCycle";
import R007 from "./component/R007_ComponentDidMount";
import R008 from "./component/R008_shouldComponentUpdate";
import R009 from "./component/R009_Es6";
import R010 from "./component/R010_Variable";
import R011 from "./component/R011_SpreadOperator";
import R012 from "./component/R012_Class&Prototype";
import R013 from "./component/R013_ArrowFunction";
import R014 from "./component/R014_forEach";
import R015 from "./component/R015_Map";
import R016 from "./component/R016_Jquery";
import R017 from "./component/R017_Props";
import R018 from "./component/R018_PropTypes";
import R019 from "./component/R019_PropsBool";
import R020 from "./component/R020_PropsObjVal";

function App() {
    return (
        <div className="App">
            <h1>Hello React 200제</h1>
            <h2>예제 결과는 console 참고</h2>
            <p>1. HTML 적용.</p>
            <p>2. CSS 적용.</p>
            <R003/>
            <R004/>
            <R005/>
            <R006 prop_value="LifeCycle"/>
            <R007 prop_value="LifeCycle"/>
            <R008 prop_value="LifeCycle"/>
            <R009/>
            <R010/>
            <R011/>
            <R012/>
            <R013/>
            <R014/>
            <R015/>
            <R016/>
            <R017 props_val="R017_Props"/>
            <R018
                // 다양한 유형의 props 를 전달.
                String="react"
                Number={100}
                Boolean={1 == 1}
                Array={[0, 1, 2]}
                ObjectJson={{react: "리액트", num: "200"}}
                Function={console.log("FunctionProps : function")}
            />
            <R019 TrueFalse={false}/>
            <R019 TrueFalse/>
            <R020 ObjectJson={
                {
                    react: "리액트",
                    num: "200"
                }}
            />
        </div>
    );
}

export default App;
