import { Form, Input, Button, Row, Col, Divider } from "antd";
import { CSSProperties, Component } from "react";
import { Route } from "react-router-dom";

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

class Register extends Component {

  handleRegisterClick = (history: any) => {
    history.push('/registersuccess');
  }

  onFinish = (values: any) => {
    console.log("Success:", values);
  };
  
  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
    
  render() {
    return (
      <Row style={containerStyle}>
        <Col span={24}>
          <Divider plain>Or</Divider>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <h1 style={{ fontWeight: "bold", marginTop: '2rem', lineHeight: '80%' }}>
              NOT YET REGISTERED?
            </h1>
          </div>

          <h3 style={{ display: "flex", justifyContent: "center", marginBottom: '2rem', color: '#888' }}>
            Sign up here
          </h3>

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
              label="User Name" 
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your user name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your e-mail!",
                },
              ]}
            >
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
            
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
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
                  onClick={() => this.handleRegisterClick(history)}
                >
                  Sign up
                </Button>
              )}/>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Register;

const containerStyle: CSSProperties = {
    display: "flex",
    width: "60%",
    margin: "auto",
  };
  
  const buttonStyle: CSSProperties = {
    marginBottom: "10rem",
    float: "right",
    fontWeight: "bold",
  };
  
