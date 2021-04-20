import React, { Component, CSSProperties } from 'react';
import { List, Row, Col, Image } from 'antd';
import { Link } from 'react-router-dom';


const listData: any[] | undefined = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    title: `Post ${i}`,
    description: 'Username123',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  });
}
class StartPagePost extends Component {

render() {
    return(
        <Row style={postContainer}>
        <Col span={24} style={columnStyle}>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={item => (
                  <List.Item style={postBox}
                  extra={
                    <img
                      width={'100%'}
                      alt="logo"
                      src="https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel2.png?raw=true"
                    />
                  }
                    key={item.title}
                    actions={[
                    ]}
                  >
                  <List.Item.Meta
                      title={item.title}
                      description={item.description}
                    />
                    {item.content.substring(0, 300) + '...'}
                  </List.Item>
                )}
                   
            />
        </Col>
    </Row>      
    )
}};

export default StartPagePost;


const postContainer: CSSProperties = {
    display: 'flex',
    width: '60%',
    margin: 'auto',
    paddingBottom: '8rem',
}

const postBox: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

const columnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3rem',
}