import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import DetailView from "./components/detailview/DetailView";
import Header from './components/Header';
import LogInView from './components/login/LogInView';
import ScrollToTop from './components/ScrollToTop';
import PostsListUser from './components/userAdminPosts/PostsList';
import EditPost from './components/userAdminPosts/UserEditPost';

function App() {
  return (   
    <Router>
      {/* <Header />  */}
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
