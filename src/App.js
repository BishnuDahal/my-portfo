
import React from 'react';

import './App.css';
import Navbar from './Navbar';
import Landingpage from './Landingpage';
import Blog from './Blog';
import Project from './Project';
import Clientsection from './Clientsection';
import Footer from './Footer';

import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Aboutproject from './Aboutproject';
import SinglePost from './SinglePost';
import SingleProject from './SingleProject';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Switch>
    <Route exact path="/">
    <Landingpage />
    <Clientsection />
      </Route>
      <Route exact path="/blog">
      <Blog />
      </Route>
      <Route exact path="/aboutproject">
      <Aboutproject />
      </Route>
      <Route exact path="/blog:slug">
      <SinglePost />
      </Route>
      <Route exact path="/project">
      <Project />
      </Route>
      <Route exact path="/project:slug">
      <SingleProject />
      </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
