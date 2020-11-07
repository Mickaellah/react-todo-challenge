import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from '../components/Form';
import NavBar from "../components/NavBar";

import All from '../components/AllPage';
import Active from '../components/ActivePage';
import Completed from '../components/CompletedPage';

function App() {
    return (
        <>
            <NavBar />
            <Form />
            <Switch>
                <Route path="/all"><All /></Route>
                <Route path="/active"><Active /></Route>
                <Route path="/completed"><Completed /></Route>
            </Switch>
        </>
    )
}

export default App