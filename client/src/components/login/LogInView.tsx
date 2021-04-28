import { Component } from 'react';
import LogIn from './LogIn';
import Register from './Register'

class LogInView extends Component {
    render() {
        return(
            <div>
                <LogIn />
                <Register />
            </div>
        )
    }
}

export default LogInView;