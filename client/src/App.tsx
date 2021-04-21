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
import AdminEditUser from "./components/admin/AdminEditUser";

function App() {
  return (   
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={StartPageView} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/login" component={LogInView} />
        <Route path="/user" component={PostsListUser} />
        <Route path="/edit-post/:id" component={EditPost} />
        <Route path="/registersuccess" component={RegisterSuccess} />
        <Route path="/admin/users" component={AdminUserList} />
        <Route path="/admin/edit/user/:id" component={AdminEditUser} />
      </Switch>
  </Router>
  );
}

export default App;