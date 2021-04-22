import { Component, CSSProperties } from 'react';
import { Layout, Button, List } from 'antd';
import { PlusCircleOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import SiderMenu from '../userAdminPosts/SiderMenu';
import { Link } from 'react-router-dom';

export interface User {
    id: number
    userName: string
    email: string
    role: string
}

const { Content } = Layout;

export const users: User[] = [{
    id: 1,
    userName: 'User Name 1',
    email: 'info@hejhej1.com',
    role: 'publisher',
},
{
    id: 2,
    userName: 'User Name 2',
    email: 'info@hejhej2.com',
    role: 'publisher',
},
{
    id: 3,
    userName: 'User Name 3',
    email: 'info@hejhej3.com',
    role: 'admin',
}];

class AdminUserList extends Component {
    render () {
        return (
            <Layout style={{ background: '#fff' }}>
                <SiderMenu />
                <Content style={{ margin: '8rem', background: '#fff' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Link to ={'/admin/adduser'}> 
                        <Button 
                            type="primary" 
                            icon={<PlusCircleOutlined />} 
                            style={{ marginBottom: '4rem' }} 
                            onClick={() => console.log('new user clicked')}
                        >
                            Add New User
                        </Button>
                    </Link>
                        <List
                            itemLayout="horizontal"
                            dataSource={users}
                            renderItem={item => (
                            <List.Item actions={[
                                <Link to={'/admin/edit/user/' + item.id}>
                                    <Button key="edit-user" 
                                    onClick={() => console.log('edit-clicked')}
                                    style={editStyle}
                                    icon={<FormOutlined />}
                                    >
                                        edit
                                    </Button>
                                </Link>,
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
        ); 
    }    
}

export default AdminUserList;


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