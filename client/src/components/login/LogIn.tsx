import { Form, Input, Button, Row, Col } from "antd";
import { CSSProperties, Component } from "react";
import { Route } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class LogIn extends Component {

  handleLogInClick = (history: any) => {
    //history.push('/user');
  }

  onFinish = (values: any) => {
    login(values.email, values.password);
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <Row style={containerStyle}>
        <Col span={24} style={columnStyle}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            LOG IN{" "}
          </h1>

          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item 
              label="E-mail" 
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Route render={({ history }) => (
                <Button
                  type="primary"
                  htmlType="submit" 
                  style={buttonStyle}
                  onClick={() => this.handleLogInClick(history)}
                >
                  Log in
                </Button>
              )}/>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const containerStyle: CSSProperties = {
  display: "flex",
  width: "60%",
  margin: "auto",
};

const columnStyle: CSSProperties = {
  marginTop: "14rem",
};

const buttonStyle: CSSProperties = {
  float: "right",
  fontWeight: "bold",
};

export default LogIn;

const login = async (email: string, password: string) => {
  try {
      await fetch('/api/login/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });
  } catch (error) {
      console.error(error);
  }
}