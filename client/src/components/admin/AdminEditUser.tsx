import { Form, Input, Button, message, Layout, Select } from "antd";
import { Component } from "react";
import SiderMenu from '../userAdminPosts/SiderMenu';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { User } from "./AdminUserList";
import ErrorPage from '../ErrorPage';

const { Content } = Layout;
const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 16,
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

interface Props extends RouteComponentProps<{ _id: string }> {}

interface State {
  user?: User;
  buttonSaveLoading: boolean;

}

const successSave = () => {
  message.success('The user has been updated', 3);
};

class AdminEditUser extends Component<Props, State> {
  state: State = {
    user: undefined,
    buttonSaveLoading: false,

  };


  async componentDidMount() {
    const user = await getUser((this.props.match.params as any)._id);
    this.setState({ user: user });
  }
  
  onFinish = async (values: any) => {
    this.setState({ buttonSaveLoading: true });
    await putUser(values.user, (this.props.match.params as any)._id);
    this.props.history.push('/admin/users');
    this.setState({ buttonSaveLoading: false });
  }
 

  componentWillUnmount() {
    this.setState({ user: undefined });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <ErrorPage />
    }

    return (
        <Layout style={{ background: '#fff' }}>
          <SiderMenu />
          <Content style={{ margin: '8rem', background: '#fff' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={this.onFinish}
              validateMessages={validateMessages}
              initialValues={{
                user: {
                  username: this.state.user?.username,
                  email: this.state.user?.email,
                  role: this.state.user?.role,
                }
              }}
            >
              <h1 style={{ fontWeight: "bold", marginBottom: '3rem' }}>EDIT USER</h1>
              <Form.Item name={["user", "username"]} label="Username: " rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name={["user", "email"]} label="E-mail: " rules={[{ required: true }]}>
                <Input disabled={true} />
              </Form.Item>
              
              <Form.Item name={["user", "role"]} label="Role: " rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="publisher">Publisher</Select.Option>
                    <Select.Option value="admin">Admin</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Button 
                    type="primary"
                    onClick={() => {console.log('Post updated'); successSave();}} 
                    htmlType="submit" 
                    loading={this.state.buttonSaveLoading}

                  >
                    Save
                  </Button>
                </div>
              </Form.Item>
            </Form>
            </div>
          </Content>
        </Layout>
    );
  }
}

export default withRouter(AdminEditUser);

const getUser = async (_id: string) => {
  try {
      let response = await fetch('/api/users/' + _id);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
  }
}

const putUser = async (user: User, _id: string) => {
  try {
      await fetch('/api/users/' + _id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });
  } catch (error) {
      console.error(error);
  }
}