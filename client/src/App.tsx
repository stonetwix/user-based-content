import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import StartPageView from './components/startpage/StartPageView';
import LogInView from './components/login/LogInView';
import RegisterSuccess from "./components/login/RegisterSuccess";
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';
import EditPost from './components/userAdminPosts/UserEditPost';
import PostDetail from './components/detailview/PostDetail';
import Header from './components/Header';
import AdminUserList from "./components/admin/AdminUserList";

function App() {
  return (   
    <Router>
      <AdminUserList />
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={StartPageView} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/login" component={LogInView} />
        <Route path="/user/:id" component={PostsListUser} />
        <Route path="/user/:id/post/:id" component={EditPost} />
        <Route path="/registered" component={RegisterSuccess} />
      </Switch>
  </Router>
  );
}

export default App;