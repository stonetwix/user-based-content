import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      {/* <ScrollToTop />
      <Header /> */}
      <Switch>
        {/* <Route path="/product/:id" component={ProductDetails} /> */}
      </Switch>
  </Router>
  );
}

export default App;
