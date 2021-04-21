import { Component } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, CameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

class SiderMenu extends Component {
    render () {
        return (
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
                        <Link to={'/user'}>Posts</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Users
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SiderMenu;