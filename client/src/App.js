import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
