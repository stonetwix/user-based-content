
import { Row, Col, Menu, Button } from "antd";
import { Header} from "antd/lib/layout/layout";
import React, { Component, ContextType, CSSProperties } from "react";
import logo from '../assets/logo-white.png'; 
import { Link, Route } from 'react-router-dom';
import { UserContext } from './context';


class Navbar extends Component {
  context!: ContextType<typeof UserContext>
  static contextType = UserContext;

  handleLogout = async (history: any) => {
    const { logoutUser } = this.context;
    const ok = await logout();
    if (ok) {
      logoutUser();
      history.push('/');
    } else {
      alert('Problem logging out, try again')
    }
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ isLoggedIn }) => {
          const userMenuItem = !isLoggedIn ?
            <Menu.Item key="1">
              <Link to='/login' style={{ color: 'white' }}> 
                Log in
              </Link>
            </Menu.Item> :
            <Route render={({ history }) => (
              <>
              <Menu.Item key="2">
              <Link to='/user' style={{ color: 'white', marginRight: '3rem' }}> 
                Admin
              </Link>
            </Menu.Item>
              <Menu.Item key="3">
                <Button
                  onClick={() => this.handleLogout(history)}
                  style={{ borderRadius: '10rem' }}
                > 
                  Log out 
                </Button>
              </Menu.Item>
              </>
            )}/>;
          return (
          <Header style={layoutStyle}>
            <Row style={{ width: '100%' }}>
              <Col span={8}>
                <Link to='/'>
                  <img src={logo} alt="logo" style={logoStyle} />
                </Link>
              </Col>

              <Col span={10} offset={6}>
              <Menu mode="horizontal" style={menuStyle}>
              {userMenuItem}
              </Menu>
              </Col> 
          </Row>
        </Header> 
    )}}
    </UserContext.Consumer>)
  }
}; 


const layoutStyle: CSSProperties = {
    width: '100%', 
    background: '#78757C',
    height: window.innerWidth > 768 ? '5rem' : '4rem',
    display: 'flex', 
    alignItems:'center',
    justifyItems:'center',
    textDecoration: 'none',
    zIndex: 100,
    borderBottom: 'none',
    position: 'fixed',
  }

  const logoStyle: CSSProperties = {
   marginLeft: window.innerWidth > 768 ? '-1rem' : '-3rem',
   padding: '2rem',
   width: window.innerWidth > 768 ? '15.5rem' : '10rem',
  }

const menuStyle: CSSProperties = {
  float: 'right',
  background: '#78757C', 
  color: 'white', 
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: window.innerWidth > 768 ? '1.8rem' : '-0.3rem',
  marginRight: window.innerWidth > 768 ? '0' : '-2rem',
  fontSize: '1.3rem', 
  fontWeight: 'bold'
}

export default Navbar;

const logout = async () => {
  try {
      const response = await fetch('/api/logout/', {
        method: 'DELETE',
      });
      return response.ok;
  } catch (error) {
      console.error(error);
  }
}