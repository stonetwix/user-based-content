import { Component, ContextType } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, CameraOutlined } from '@ant-design/icons';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { UserContext } from '../context';
import PropTypes from 'prop-types';

const { Sider } = Layout;

interface Props extends RouteComponentProps {
    location: any
}

class SiderMenu extends Component<Props> {
    context!: ContextType<typeof UserContext>
    static contextType = UserContext;

    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render () {
        const { location } = this.props;
        return (
            <UserContext.Consumer>
                {({ isAdmin }) => {
                    const adminMenu = isAdmin ?     
                    <Menu.Item key="/admin/users" icon={<UserOutlined />}>
                        <Link to={'/admin/users'}>Users</Link>
                    </Menu.Item> : <div></div>

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
                                background: '#D3D5D4'
                            }}
                        >
                            <Menu mode="inline" defaultSelectedKeys={['/user']} selectedKeys={[location.pathname]} style={{ marginTop: '8rem', background: '#D3D5D4' }}>
                                <Menu.Item key="/user" icon={<CameraOutlined />}>
                                    <Link to={'/user'}>Posts</Link>
                                </Menu.Item>
                                {adminMenu}
                            </Menu>
                        </Sider>
                    )
                }}
            </UserContext.Consumer>
        )
    }
}

export default withRouter(SiderMenu);