import { Component, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, List, Avatar } from 'antd';
import { UserOutlined, CameraOutlined, PlusCircleOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const data = [{
    id: 1,
    userName: 'User Name',
    role: 'publisher',
},
{
    id: 2,
    userName: 'User Name',
    role: 'publisher',
},
{
    id: 3,
    userName: 'User Name',
    role: 'admin',
}];

class AdminUserList extends Component {
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
                    <Link to='/'>
                        <img src={'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/logo-white.png?raw=true'} style={logoStyle} alt={'logo'}/>
                    </Link>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
                            <Button type="primary" icon={<PlusCircleOutlined />} style={{ marginBottom: '4rem' }} onClick={() => console.log('new user clicked')}>New User</Button>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                <List.Item actions={[
                                    <Button key="edit-user" 
                                    onClick={() => console.log('edit-clicked')}
                                    style={editStyle}
                                    icon={<FormOutlined />}
                                    >
                                        edit
                                    </Button>, 
                                    <Button key="delete-user" 
                                    onClick={() => console.log('delete-clicked')}
                                    style={deleteStyle}
                                    icon={<DeleteOutlined />}
                                    >
                                        delete
                                    </Button>]}
                                >
                                    <List.Item.Meta
                                    title={item.userName}
                                    description={'Role: ' + item.role}
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

export default AdminUserList;

const logoStyle: CSSProperties = {
    width: '10rem',
    margin: '1rem',
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
    color: '#78757C',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1.2rem',
    marginRight: '1rem',
    boxShadow: 'none'
}