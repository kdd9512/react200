import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers"
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";

// R084 redux 미들웨어
const CallMiddleware = store => nextMiddle => action => {
    console.log("R084 1. reducer 실행 전.");
    console.log("R084 2. action.type : " + action.type + ", store.str : " +
        store.getState().data.str);

    let result = nextMiddle(action);

    console.log("R084 3. reducer 실행 후");
    console.log("R084 4. action.type : " + action.type + ", store.str : " +
        store.getState().data.str);

    return result;
}

const store = createStore(reducers, applyMiddleware(CallMiddleware));

const listener = () => {
    // R078~80
    // ReactDOM.render(
    //     <App store={store}/>,
    //     document.getElementById('root')
    // );

    // R081~083
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App indexProp="react"/>
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

store.subscribe(listener);
listener();

