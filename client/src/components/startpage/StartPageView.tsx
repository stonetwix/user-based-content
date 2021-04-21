import { Component } from 'react';
import StartPagePost from './Post';
import Header from '../Header';

class StartPageView extends Component {
    render() {
        return(
            <div>
                <StartPagePost />
            </div>
        )
    }
}

export default StartPageView;