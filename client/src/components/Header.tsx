import React from 'react';
import { Row, Col, Menu } from "antd";
import { Header} from "antd/lib/layout/layout";
import { CSSProperties } from "react";
import logo from '../assets/logo-white.png'; 
import { Link } from 'react-router-dom';


function Navbar() {
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
            <Menu.Item key="1"><Link to='/login' style={{ color: 'white' }} > Log in</Link>

            </Menu.Item>
          </Menu>
          </Col> 
      </Row>
    </Header> 
)}; 


const layoutStyle: CSSProperties = {
    width: '100%', 
    background: '#78757C',
    height: window.innerWidth > 768 ? '6rem' : '5rem',
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
  fontSize: '1.5rem', 
  fontWeight: 'bold'
}

export default Navbar; 