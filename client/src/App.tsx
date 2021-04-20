import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import StartPageView from './components/startpage/StartPageView';
import DetailView from './components/detailview/DetailView';
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';

function App() {
  return (
    <Router>
      {/* <ScrollToTop />
      <Header /> */}
  
      <StartPageView />
      <ScrollToTop />
      {/* <Header /> */}
      <Switch>
        {/* <Route path="/" component={DetailView} /> */}
        <Route path="/" component={PostsListUser} />
      </Switch>
  </Router>
  );
}

export default App;
