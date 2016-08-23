import React, { Component } from "react";

const App = ({ children }) => {
    return (
        <div>
            <nav>--- Navigation bar ---</nav>
            {children}
        </div>
    )
};

export default App;
