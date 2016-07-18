import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import Routes from "./routes.js";
import actions from "./actions/actions";

const store = configureStore();

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("app")
);

// store.dispatch(actions.getPokemom());
