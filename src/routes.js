import React, { Component } from "react";
import App from "./components/app";
import { Router, Route, Link, browserHistory } from "react-router";

// const Routes = () => {
//     console.log(this.props);
//     return (
//         <Router history={browserHistory}>
//             <Route path="/" component={App} />
//         </Router>
//     )
// };

class Routes extends Component {
    render() {
        return (
            <Router store={this.props.store} history={browserHistory}>
                <Route path="/" component={App} />
            </Router>
        )
    }
}

export default Routes;

