import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

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
import R021 from "./component/R021_PropsReq";
import R022 from "./component/R022_PropsDefault";
import R023 from "./component/R023_PropsNode";
import R024 from "./component/R024_ReactState";
import R025 from "./component/R025_SetState";
import R026 from "./component/R026_ForceUpdate";
import R027 from "./component/R027_ComponentClass";
import R028 from "./component/R028_PureComponentClass";
import R029 from "./component/R029_ShallowEqual";
import R030 from "./component/R030_FunctionComponent";
import R031 from "./component/R031_ReactHook";
import R032 from "./component/R032_Fragments";
import R033 from "./component/R033_ReturnMap";
import R034 from "./component/R034_ReactStrapAlert";
import R035 from "./component/R035_ReactStrapBadges";
import R036 from "./component/R036_ReactstrapBreadcrumbs";
import R037 from "./component/R037_ReactstrapDropdown";
import R038 from "./component/R038_ReactstrapButtonGroup";
import R039 from "./component/R039_ReactstrapButtons";
import R040 from "./component/R040_ReactstrapCard";
import R041 from "./component/R041_ReactstrapCarousel";
import R042 from "./component/R042_ReactstrapCollapse";
import R043 from "./component/R043_ReactstrapFade";
import R044 from "./component/R044_ReactstrapForm";
import R045 from "./component/R045_ReactstrapInputGroup";
import R046 from "./component/R046_ReactstrapJumbotron";
import R047 from "./component/R047_ReactstrapListGroup";
import R048 from "./component/R048_ReactstrapModal";
import R049 from "./component/R049_ReactstrapNavbar";
import R050 from "./component/R050_ReactstrapPagination";
import R051 from "./component/R051_ReactstrapPopover";
import R052 from "./component/R052_ReactstrapProgress";
import R053 from "./component/R053_ReactstrapSpinner";
import R054 from "./component/R054_ReactstrapTable";
import R055 from "./component/R055_ReactstrapTab";
import R056 from "./component/R056_Sweetalert2Basic";
import R057 from "./component/R057_Sweetalert2Position";
import R058 from "./component/R058_Sweetalert2Confirm";
import R059 from "./component/R059_FetchGet";
import R060 from "./component/R060_FetchPost";
import R061 from "./component/R061_AxiosGet";
import R062 from "./component/R062_AxiosPost";
import R063 from "./component/R063_CallbackFunc";
import R064 from "./component/R064_Promise";
import R065 from "./component/R065_Promise_Catch";
import R066 from "./component/R066_OnClick";
import R067 from "./component/R067_OnChange";
import R068 from "./component/R068_OnMouseMove";
import R069 from "./component/R069_OnMouseOver";
import R070 from "./component/R070_OnMouseOut";
import R071 from "./component/R071_OnKey";
import R072 from "./component/R072_OnSubmit";
import R073 from "./component/R073_ReactRef";


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
            <R021 ReactNum={200}/>
            <R022 ReactNum={200}/>
            <R023>
                <span>node from App.js</span>
            </R023>
            <R024 reactString={"react state "}/>
            <R025/>
            <R026/>
            <R027/>
            <R028/>
            <R029/>
            <R030 contents="R030. 함수형 Components"/>
            <R031/>
            <R032/>
            <R033/>
            <R034/>
            <R035/>
            <R036/>
            <R037/>
            <R038/>
            <R039/>
            <R040/>
            <R041/>
            <R042/>
            <R043/>
            <R044/>
            <R045/>
            <R046/>
            <R047/>
            <R048/>
            <R049/>
            <R050/>
            <R051/>
            <R052/>
            <R053/>
            <R054/>
            <R055/>
            <R056/>
            <R057/>
            <R058/>
            <R059/>
            <R060/>
            <R061/>
            <R062/>
            <R063/>
            <R064/>
            <R065/>
            <R066/>
            <R067/>
            <R068/>
            <R069/>
            <R070/>
            <R071/>
            <R072/>
            <R073/>
        </div>
    );
}

export default App;
