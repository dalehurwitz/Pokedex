import React, { Component } from "react";
import Nav from "./layout/navigation";

const App = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
};

export default App;
