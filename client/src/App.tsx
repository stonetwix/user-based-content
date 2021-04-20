import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import LogInView from './components/login/LogInView';
import RegisterSuccess from "./components/login/RegisterSuccess";
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';

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
      <RegisterSuccess />
      </Switch>
      <Switch>
        {/* <Route path="/" component={DetailView} /> */}
        <Route path="/" component={PostsListUser} />
      </Switch>
  </Router>
 
  );
}

export default App;
