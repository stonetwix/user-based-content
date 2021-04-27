import { Component, CSSProperties  } from 'react';
import { List, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

export interface Post {
  _id: string
  title: string
  author: string
  date: string
  text: string
  imageUrl: string
}


interface State {
  posts?: Post[]
}
class StartPagePost extends Component < {}, State> {

  state: State ={
    posts: []
  }
  async componentDidMount() {
    const posts = await getPosts();
    this.setState({ posts: posts });
}
render() {
    return(
      <Row style={postContainer}>
        <Col span={24} style={columnStyle}>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={this.state.posts}
            renderItem={item => (
              
              <List.Item 
                style={postBox}
                extra={
                  <img style={imageStyle}
                    src={item.imageUrl} 
                    alt={item.title}
                  />   
                }
              >
                <Link to={'/post/' + item._id}>
                  <List.Item.Meta
                      title={item.title}
                      description={item.text.substring(0, 300) + '...'}
                  />
                </Link>
              </List.Item>
            )}
          />
        </Col>
      </Row>      
    )
  }
};

export default StartPagePost;


const postContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '60%',
  margin: 'auto'
}

const columnStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10rem',
  marginBottom: '5rem',
}

const postBox: CSSProperties = {
    display: 'flex',
    flexDirection: 'column-reverse',  
}

const imageStyle: CSSProperties = {
    width: '100%',
    marginBottom: '1rem',
    marginTop: '2rem'
}

const getPosts = async () => {
  try {
      let response = await fetch('/api/all_posts');
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
  }
}