import React from 'react';
import LandingPage from './pages/landingPage';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import "./app.scss"
const App=()=>{  
    return (
      <div>
       <Router>
                    <Switch>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Router>
      </div>
    );
  }


export default App;
