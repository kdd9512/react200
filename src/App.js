import React from "react";
import "./App.css";
import R003 from "./R003_Component";
import R004 from "./R004_UsingRender";
import R005 from "./R005_UsingConstructorProps"

function App() {
  return (
    <div className="App">
        <h1>Hello React 200제</h1>
        <p>1. HTML 적용.</p>
        <p>2. CSS 적용.</p>
        <R003/>
        <R004/>
        <R005/>
    </div>
  );
}

export default App;
