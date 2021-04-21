import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import DetailView from "./components/detailview/DetailView";
import StartPageView from './components/startpage/StartPageView';
import Header from './components/Header';
import LogInView from './components/login/LogInView';
import RegisterSuccess from "./components/login/RegisterSuccess";
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';
import EditPost from './components/userAdminPosts/UserEditPost';

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
        {/* <Route path="/" component={LogInView} /> */}
        {/* <Route path="/" component={DetailView} /> */}
        {/* <Route path="/" component={PostsListUser} /> */}
        <Route path="/" component={EditPost} />
      </Switch>
  </Router>
  );
}

export default App;
