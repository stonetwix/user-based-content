import { Component, CSSProperties } from 'react';
import { Row, Col } from 'antd';
import { Post, posts } from '../startpage/Post';
import ErrorPage from '../ErrorPage';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface State {
    post?: Post;
}

interface Props extends RouteComponentProps {
    id: number
}

class PostDetail extends Component<Props, State> {

    state: State = {
        post: undefined,
    }

    componentDidMount() {
        const postId = Number((this.props.match.params as any).id)
        const post = posts.find((p: Post) => p.id === postId);
        this.setState({post: post})
    }

    render () {
        if (!this.state.post) {
            return <ErrorPage />
        }
        return (
            <Row style={containerStyle}>
                <Col lg={{span: 24}} style={columnStyle}>
                    <img src={this.state.post.imageUrl} alt={this.state.post.title}/>          
                    <h1 style={titleStyle}>{this.state.post.title}</h1>
                    <h3 style={usernameStyle}>{this.state.post.userName}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{this.state.post.date}</h3>
                    <p>{this.state.post.text}</p>
                </Col>
            </Row>
        ); 
    }    
}

export default withRouter(PostDetail as any);

const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
    margin: 'auto',
}

const columnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10rem',
    marginBottom: '5rem',
}

const titleStyle: CSSProperties = {
    fontSize: '2rem',
    marginTop: '2rem',
    fontWeight: 'bold',
 }

 const usernameStyle: CSSProperties = {
     fontWeight: 'bold',
     color: '#aaa',
     textTransform: 'uppercase',
 }