import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import LogInView from './components/login/LogInView';
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';
import EditPost from './components/userAdminPosts/UserEditPost';

function App() {
  return (
    
    <Router>
  
      <Header /> 
      <Switch>
        {/* <Route path="/product/:id" component={ProductDetails} /> */}
        <LogInView /> 
        </Switch>
      <ScrollToTop />
     
      <Switch>
        {/* <Route path="/" component={DetailView} /> */}
        {/* <Route path="/" component={PostsListUser} /> */}
        <Route path="/" component={EditPost} />
      </Switch>
  </Router>
 
  );
}

export default App;
