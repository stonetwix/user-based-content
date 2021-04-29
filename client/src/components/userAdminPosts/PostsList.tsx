import { Component, ContextType, CSSProperties } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Layout, Button, List, Avatar, message } from 'antd';
import { PlusCircleOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import SiderMenu from './SiderMenu';
import { User } from '../admin/AdminUserList';
import { UserContext } from '../context';

const { Content } = Layout;

export interface Post {
    _id: string
    title: string
    author: string
    date: string
    text: string
    imageUrl: string
}

interface Props extends RouteComponentProps<{ _id: string }> {}
 
interface State {
    posts?: Post[];
    user?: User;
    loading: boolean;
}

const successDelete = () => {
    message.success('The product has been deleted', 3);
};
class PostsListUser extends Component <Props, State> {
    context!: ContextType<typeof UserContext>
    static contextType = UserContext;

    state: State ={
        posts: [],
        user: undefined,
        loading: true,
    }
    
    async componentDidMount() {
        const posts = await getPosts();
        this.setState({ posts: posts, loading: false });
    }

    handleDelete = async (_id: string) => {
        await deletePost(_id);
        const posts = await getPosts();
        this.setState({ posts: posts });
    }
    
    render() {
        if (this.state.loading) {
            return <div></div>
        }
        return (
            <UserContext.Consumer>
            {({ username }) => {
            return (
                <Layout style={{ background: '#fff' }}>
                    <SiderMenu />
                    <Content style={{ margin: '8rem', background: '#fff' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <h1 style={{ marginBottom: '2rem' }}>Welcome {username}</h1>
                        <Link to={'/user/add-new-post'}> 
                            <Button type="primary" 
                                icon={<PlusCircleOutlined />} 
                                style={{ marginBottom: '4rem' }} 
                                onClick={() => console.log('new post clicked')}
                            > 
                                Create New Post 
                            </Button> 
                        </Link>
                            <List
                                itemLayout="horizontal"
                                dataSource={this.state.posts}
                                renderItem={item => (
                                <List.Item actions={[
                                    <Link to={'/user/edit-post/' + item._id}>  
                                        <Button 
                                        key="edit-post" 
                                        onClick={() => console.log('edit-clicked')}
                                        style={editStyle}
                                        icon={<FormOutlined />}
                                        >
                                            edit
                                        </Button>
                                    </Link>, 
                                    <Button 
                                        key="delete-post" 
                                        onClick={() => {this.handleDelete(item._id); successDelete();}}                                 
                                        style={deleteStyle}
                                        icon={<DeleteOutlined />}
                                    >
                                        delete
                                    </Button>]}
                                >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.imageUrl} style={{ width: '4rem', height: '4rem' }}/>}
                                    title={item.title}
                                    description={item.text.substring(0, 35) + '...'}
                                />
                                </List.Item>
                                )}
                            />
                        </div>
                    </Content>
                </Layout>
                )
            }}
            </UserContext.Consumer>
        )
    }    
}

export default PostsListUser;

const deleteStyle: CSSProperties = {
    color: 'red',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.2rem',
    marginLeft: '1rem',
    boxShadow: 'none'
}

const editStyle: CSSProperties = {
    backgroundColor: 'white',
    color: '#78757C',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.2rem',
    marginRight: '1rem',
    boxShadow: 'none'
}

const getPosts = async () => {
    try {
        let response = await fetch('/api/posts/', {
            credentials: 'include',
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
} 

const deletePost = async (_id: string) => {
    try {
        await fetch('/api/posts/' + _id, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error(error);
    }
}