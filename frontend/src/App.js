// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClassesList from './Components/classesList';
import SignUpForm from './Components/SignUpForm';
import ManageClasses from './Components/ManageClasses'; 



const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={ClassesList} />
                    <Route exact path="/signup" component={SignUpForm} /> 
                    <Route exact path="/manage" component={ManageClasses} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
