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

function App() {
  return (
    <div className="App">
        <h1>Hello React 200제</h1>
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
    </div>
  );
}

export default App;
