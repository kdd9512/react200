import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import reducers from "./reducers"
import {Provider} from "react-redux";

const store = createStore(reducers);

const listener = () => {
    // R078~80
    // ReactDOM.render(
    //     <App store={store}/>,
    //     document.getElementById('root')
    // );

    // R081~083
    ReactDOM.render(
        <Provider store={store}>
            <App indexProp="react"/>
        </Provider>,
        document.getElementById("root")
    );
};

store.subscribe(listener);
listener();

