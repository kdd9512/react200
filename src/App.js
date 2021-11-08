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
        </div>
    );
}

export default App;
