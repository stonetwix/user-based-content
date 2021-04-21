import { Component, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, List, Avatar } from 'antd';
import { UserOutlined, CameraOutlined, PlusCircleOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { posts } from '../startpage/Post';

const { Content, Sider } = Layout;

class PostsListUser extends Component {
    render () {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{
                        height: '100vh',
                    }}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ marginTop: '8rem'}}>
                        <Menu.Item key="1" icon={<CameraOutlined />}>
                            Posts
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            Users
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout style={{ background: '#fff' }}>
                    <Content style={{ margin: '8rem', background: '#fff' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Button type="primary" icon={<PlusCircleOutlined />} style={{ marginBottom: '4rem' }} onClick={() => console.log('new post clicked')}>Create New Post</Button>
                            <List
                                itemLayout="horizontal"
                                dataSource={posts}
                                renderItem={item => (
                                <List.Item actions={[
                                    <Link to={'/edit-post/' + item.id}>  
                                        <Button key="edit-post" 
                                        onClick={() => console.log('edit-clicked')}
                                        style={editStyle}
                                        icon={<FormOutlined />}
                                        >
                                            edit
                                        </Button>
                                    </Link>, 
                                    <Button key="delete-post" 
                                    onClick={() => console.log('delete-clicked')}
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
            </Layout>
        ); 
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