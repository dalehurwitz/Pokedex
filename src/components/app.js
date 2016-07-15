import React, { Component } from "react";

// const App = (store) => {
//     return (
//         <div>
//             <h1>Pokedex</h1>
//         </div>
//     )
// };

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Pokedex</h1>
            </div>
        )
    }
}

export default App;