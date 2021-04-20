import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import DetailView from './components/detailview/DetailView';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={DetailView} />
      </Switch>
  </Router>
  );
}

export default App;
