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
import AdminAddNewUser from "./components/admin/AdminAddNewUser";
import UserAddNewPost from "./components/userAdminPosts/UserAddNewPost";
import UserProvider from "./components/context";

function App() {
  return (   
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={StartPageView} />
          <Route path="/post/:_id" component={PostDetail} />
          <Route path="/login" component={LogInView} />
          <Route exact path="/user" component={PostsListUser} />
          <Route path="/user/add-new-post" component={UserAddNewPost} />
          <Route path="/edit-post/:_id" component={EditPost} />
          <Route path="/registersuccess" component={RegisterSuccess} />
          <Route path="/admin/users" component={AdminUserList} />
          <Route path="/admin/edit/user/:_id" component={AdminEditUser} />
          <Route path="/admin/adduser" component={AdminAddNewUser} />
        </Switch>
    </Router>
  </UserProvider>
  );
}

export default App;