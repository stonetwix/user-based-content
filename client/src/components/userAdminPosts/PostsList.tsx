import { Component, CSSProperties } from 'react';
import { Layout, Menu, Button, List, Avatar } from 'antd';
import { UserOutlined, CameraOutlined, PlusCircleOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const data = [{
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    userName: 'User Name',
    date: '2021-04-20',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu augue, euismod at viverra ac, facilisis ac ante. Vivamus nunc erat, rutrum sit amet neque vitae, luctus aliquet ipsum. Sed dapibus facilisis feugiat. Suspendisse vestibulum at elit et sodales. Praesent leo odio, pulvinar eget ex in, fringilla varius sapien. Aliquam vitae mi in libero efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin augue erat, faucibus quis enim nec, vestibulum faucibus mauris. Suspendisse sagittis massa ut nibh blandit dapibus. In tincidunt quis magna non congue. Aliquam erat volutpat. Phasellus blandit semper malesuada. Etiam augue ipsum, tincidunt ut egestas nec, porttitor vitae ligula. Mauris vestibulum lorem vitae neque sagittis aliquam. Maecenas eros nulla, molestie ac lacinia ornare, dapibus ut purus. Aliquam erat volutpat. Praesent fermentum non nisl mollis fringilla. Maecenas eu dui et mi blandit fringilla. Mauris porttitor, metus eget euismod viverra, purus est dapibus ipsum, auctor commodo urna odio id mi. Aenean a lectus rutrum, feugiat lectus nec, scelerisque metus. Vivamus nec diam in mauris convallis vestibulum. Sed lorem quam, pulvinar scelerisque ultricies nec, euismod ut nunc. Vestibulum eget efficitur orci.',
    imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel1.png?raw=true',
},
{
    id: 2,
    title: 'Lorem ipsum dolor sit amet 2',
    userName: 'User Name',
    date: '2021-04-21',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu augue, euismod at viverra ac, facilisis ac ante. Vivamus nunc erat, rutrum sit amet neque vitae, luctus aliquet ipsum. Sed dapibus facilisis feugiat. Suspendisse vestibulum at elit et sodales. Praesent leo odio, pulvinar eget ex in, fringilla varius sapien. Aliquam vitae mi in libero efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin augue erat, faucibus quis enim nec, vestibulum faucibus mauris. Suspendisse sagittis massa ut nibh blandit dapibus. In tincidunt quis magna non congue. Aliquam erat volutpat. Phasellus blandit semper malesuada. Etiam augue ipsum, tincidunt ut egestas nec, porttitor vitae ligula. Mauris vestibulum lorem vitae neque sagittis aliquam. Maecenas eros nulla, molestie ac lacinia ornare, dapibus ut purus. Aliquam erat volutpat. Praesent fermentum non nisl mollis fringilla. Maecenas eu dui et mi blandit fringilla. Mauris porttitor, metus eget euismod viverra, purus est dapibus ipsum, auctor commodo urna odio id mi. Aenean a lectus rutrum, feugiat lectus nec, scelerisque metus. Vivamus nec diam in mauris convallis vestibulum. Sed lorem quam, pulvinar scelerisque ultricies nec, euismod ut nunc. Vestibulum eget efficitur orci.',
    imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel2.png?raw=true',
},
{
    id: 3,
    title: 'Lorem ipsum dolor sit amet 3',
    userName: 'User Name',
    date: '2021-04-22',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu augue, euismod at viverra ac, facilisis ac ante. Vivamus nunc erat, rutrum sit amet neque vitae, luctus aliquet ipsum. Sed dapibus facilisis feugiat. Suspendisse vestibulum at elit et sodales. Praesent leo odio, pulvinar eget ex in, fringilla varius sapien. Aliquam vitae mi in libero efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin augue erat, faucibus quis enim nec, vestibulum faucibus mauris. Suspendisse sagittis massa ut nibh blandit dapibus. In tincidunt quis magna non congue. Aliquam erat volutpat. Phasellus blandit semper malesuada. Etiam augue ipsum, tincidunt ut egestas nec, porttitor vitae ligula. Mauris vestibulum lorem vitae neque sagittis aliquam. Maecenas eros nulla, molestie ac lacinia ornare, dapibus ut purus. Aliquam erat volutpat. Praesent fermentum non nisl mollis fringilla. Maecenas eu dui et mi blandit fringilla. Mauris porttitor, metus eget euismod viverra, purus est dapibus ipsum, auctor commodo urna odio id mi. Aenean a lectus rutrum, feugiat lectus nec, scelerisque metus. Vivamus nec diam in mauris convallis vestibulum. Sed lorem quam, pulvinar scelerisque ultricies nec, euismod ut nunc. Vestibulum eget efficitur orci.',
    imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel5.png?raw=true',
}];

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
                <img src={'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/logo-white.png?raw=true'} style={logoStyle} alt={'logo'}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<CameraOutlined />}>
                        Posts
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                        Users
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ background: '#fff' }}>
                    <Content style={{ margin: '4rem', background: '#fff' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Button type="primary" icon={<PlusCircleOutlined />} style={{ marginBottom: '5rem' }} onClick={() => console.log('new post clicked')}>Create New Post</Button>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                <List.Item actions={[
                                    <Button key="edit-post" 
                                    onClick={() => console.log('edit-clicked')}
                                    style={editStyle}
                                    icon={<FormOutlined />}
                                    >
                                        edit
                                    </Button>, 
                                    <Button key="delete-post" 
                                    onClick={() => console.log('delete-clicked')}
                                    style={deleteStyle}
                                    icon={<DeleteOutlined />}
                                    >
                                        delete
                                    </Button>]}
                                >
                                    <List.Item.Meta
                                    avatar={<Avatar src={item.imageUrl} />}
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

const logoStyle: CSSProperties = {
    width: '10rem',
    margin: '1rem'
}

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
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.2rem',
    marginRight: '1rem',
    boxShadow: 'none'
}