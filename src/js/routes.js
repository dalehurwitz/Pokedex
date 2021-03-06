import React, { Component } from "react";
import App from "./components/app";
import Home from "./components/home";
import PokemonPage from "./components/pokemonPage";
import Router from "react-router/lib/Router";
import Route from "react-router/lib/Route";
import IndexRoute from "react-router/lib/IndexRoute";
import browserHistory from "react-router/lib/browserHistory";

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/pokemon/:pokemonId" component={PokemonPage} />
            </Route>
        </Router>
    )
};

export default Routes;
