import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import StartPageView from './components/startpage/StartPageView';
import DetailView from './components/detailview/DetailView';
import Header from './components/Header';
import LogInView from './components/login/LogInView';
import RegisterSuccess from "./components/login/RegisterSuccess";
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';

function App() {
  return (
    
    <Router>
      {/* <ScrollToTop />
      <Header /> */}
  
      <StartPageView />
  
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
