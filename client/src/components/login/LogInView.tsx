import { Component } from 'react';
import Header from '../Header';
import LogIn from './LogIn';

class LogInView extends Component {
  render() {
      return(
          <div>
              <Header />
              <LogIn />
          </div>
      )
  }
}

export default LogInView;