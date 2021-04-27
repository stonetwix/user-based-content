import { Form, Input, Button, Row, Col } from "antd";
import { CSSProperties, Component, ContextType } from "react";
import { Route } from 'react-router-dom';
import { UserContext } from "../context";

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
  context!: ContextType<typeof UserContext>
  static contextType = UserContext;

  onFinish = async (values: any, history: any) => {
    const { setUser } = this.context;
    const user = await login(values.email, values.password);
    if (user) {
      setUser(user.username, user.role === 'admin');
      history.push('/user/');
    } else {
      alert('Not valid e-mail or password')
    }
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
            LOG IN
          </h1>
          <Route render={({ history }) => (
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={(values) => this.onFinish(values, history)}
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
                  <Button
                    type="primary"
                    htmlType="submit" 
                    style={buttonStyle}
                  >
                    Log in
                  </Button>
              </Form.Item>
            </Form>
          )}/>
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
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
  } catch (error) {
      console.error(error);
  }
}