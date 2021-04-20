import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { CSSProperties, Component } from "react";
import { Link } from "react-router-dom";

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
  onFinish = (values: any) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
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
              <Form.Item label="E-mail" name="E-mail">
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
                <Link to={"/"}>
                  {/*OBS! LÄGG TILL RÄTT LÄNK */}
                  <Button type="primary" htmlType="submit" style={buttonStyle}>
                    Log in
                  </Button>
                </Link>
              </Form.Item>
            </Form>

            <hr style={hrText} />
            <div style={{ display: "flex", justifyContent: "center"}}>
              <h1 style={{ fontWeight: "bold", marginTop: '1rem' }}>
                NOT YET REGISTERED?
              </h1>
            </div>

            <h2 style={{ display: "flex", justifyContent: "center", fontWeight: "bold"}}>
              Sign up here
            </h2>

            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item label="User Name" name="username">
                <Input />
              </Form.Item>

              <Form.Item
                label="E-mail"
                name="E-mail"
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
                <Link to={"/"}>
                  {/*OBS! LÄGG TILL RÄTT LÄNK */}
                  <Button type="primary" htmlType="submit" style={buttonStyle}>
                    Sign up
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
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
  marginBottom: "10rem",
  float: "right",
  fontWeight: "bold",
};

const hrText: CSSProperties = {
  width: "80%",
  display: "flex",
  justifyContent: "center",
};

export default LogIn;
