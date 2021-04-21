import { Form, Input, Button, message, Layout, Menu } from "antd";
import { Component, CSSProperties } from "react";
import { Link } from 'react-router-dom';
import { UserOutlined, CameraOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
};


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};


const successAdd = () => {
  message.success('The post is published', 3);
};

class AddNewPost extends Component {

  render() {
    // if (!post) {
    //   return <ErrorPage />
    // }

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
            height: '100vh'
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
            <Form
              {...layout}
              name="nest-messages"
              onFinish={() => console.log('saved')}
              validateMessages={validateMessages}
              initialValues={{
              }}
            >
              <h1 style={{ fontWeight: "bold", marginBottom: '3rem' }}>ADD POST </h1>
              <Form.Item name={["post", "title"]} label="Title" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name={["post", "text"]} label="Text" rules={[{ required: true }]}>
                <Input.TextArea rows={8}/>
              </Form.Item>
              
              <Form.Item name={["post", "imageUrl"]} label="ImageUrl" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Button 
                    type="primary"
                    onClick={() => {console.log('Post added'); successAdd();}} 
                    htmlType="submit" 
                  >
                    Save
                  </Button>
                </div>
              </Form.Item>
            </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AddNewPost;

const logoStyle: CSSProperties = {
  width: '10rem',
  margin: '1rem',
}