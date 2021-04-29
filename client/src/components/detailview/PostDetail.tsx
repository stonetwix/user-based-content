import { Component, CSSProperties } from 'react';
import { Row, Col } from 'antd';
import { Post} from '../startpage/Post';
import ErrorPage from '../ErrorPage';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import dayjs from 'dayjs';

interface State {
    post?: Post;
    loading: boolean;
}
interface Props extends RouteComponentProps {
    _id: string
}
class PostDetail extends Component<Props, State> {
    state: State = {
        post: undefined,
        loading: true,
    }

    async componentDidMount() {
        const post = await getPost((this.props.match.params as any)._id);
        this.setState({ post: post, loading: false })
    }

    render () {
        if (this.state.loading) {
            return <div></div>
        }
        if (!this.state.post) {
            return <ErrorPage />
        }
        const date = dayjs(this.state.post.date).format('YYYY-MM-DD');
        return (
            <Row style={containerStyle}>
                <Col lg={{span: 24}} style={columnStyle}>
                    <img src={this.state.post.imageUrl} alt={this.state.post.title}/>          
                    <h1 style={titleStyle}>{this.state.post.title}</h1>
                    <h3 style={usernameStyle}>{this.state.post.author}&nbsp;|&nbsp;{date}</h3>
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
    color: '#352D39'
 }

 const usernameStyle: CSSProperties = {
     fontWeight: 'bold',
     color: '#aaa',
     textTransform: 'uppercase',
 }

 const getPost = async (_id: string) => {
    try {
        let response = await fetch('/api/posts/' + _id);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
  }