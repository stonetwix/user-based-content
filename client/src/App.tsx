import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LogInView from './components/login/LogInView';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Header /> 
      <Switch>
        {/* <Route path="/product/:id" component={ProductDetails} /> */}
        <LogInView /> 
      </Switch>
  </Router>
  );
}

export default App;
