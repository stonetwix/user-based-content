import { Component, CSSProperties } from 'react';
import { Layout, Button, List, message } from 'antd';
import { PlusCircleOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import SiderMenu from '../userAdminPosts/SiderMenu';
import { Link } from 'react-router-dom';

export interface User {
    _id: string
    username: string
    email: string
    role: string
}

const { Content } = Layout;

interface State {
    users?: User []
}

const successDelete = () => {
    message.success('The user has been deleted', 3);
};

class AdminUserList extends Component < {}, State>{
    state: State ={
        users: []
    }

    async componentDidMount() {
        const users= await getUsers();
        this.setState({ users: users });
    }

    handleDelete = async (_id: string) => {
        await deleteUser(_id);
        const users = await getUsers();
        this.setState({ users: users });
    }

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
                            dataSource={this.state.users}
                            renderItem={item => (
                            <List.Item actions={[
                                <Link to={'/admin/edit/user/' + item._id}>
                                    <Button key="edit-user" 
                                    onClick={() => console.log('edit-clicked')}
                                    style={editStyle}
                                    icon={<FormOutlined />}
                                    >
                                        edit
                                    </Button>
                                </Link>,
                                <Button key="delete-user" 
                                onClick={() => {this.handleDelete(item._id); successDelete();}}
                                style={deleteStyle}
                                icon={<DeleteOutlined />}
                                >
                                    delete
                                </Button>]}
                            >
                                <List.Item.Meta
                                title={item.username}
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

const getUsers = async () => {
    try {
        let response = await fetch('/api/users');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteUser = async (_id: string) => {
    try {
        await fetch('/api/users/' + _id, {
          method: 'DELETE',
        });
    } catch (error) {
        console.error(error);
    }
}