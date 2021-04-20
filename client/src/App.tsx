import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import DetailView from './components/detailview/DetailView';
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';
import EditPost from './components/userAdminPosts/UserEditPost';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <Header /> */}
      <Switch>
        {/* <Route path="/" component={DetailView} /> */}
        {/* <Route path="/" component={PostsListUser} /> */}
        <Route path="/" component={EditPost} />
      </Switch>
  </Router>
  );
}

export default App;
