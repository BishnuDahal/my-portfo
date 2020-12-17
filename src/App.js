import React from 'react';

import './App.css';
import Navbar from './Navbar';
import Landingpage from './Landingpage';
import Project from './Project'
import Clientsection from './Clientsection';
import Footer from './Footer';

import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Aboutproject from './Aboutproject';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Switch>
    <Route exact path="/">
    <Landingpage />
      </Route>
      <Route exact path="/project">
      <Project />
      </Route>
     
      <Route exact path="/aboutproject">
      <Aboutproject />
      </Route>
    </Switch>
    <Clientsection />
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
