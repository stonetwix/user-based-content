import { Form, Input, Button, message, Layout, Select } from "antd";
import { Component } from "react";
import SiderMenu from '../userAdminPosts/SiderMenu';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { User, users } from "./AdminUserList";
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

interface Props extends RouteComponentProps<{ id: string }> {}

interface State {
  user?: User;
}

const successSave = () => {
  message.success('The user has been updated', 3);
};

class AdminEditUser extends Component<Props, State> {
  state: State = {
    user: undefined,
  };

//   onFinish = async (values: any) => {
//     this.setState({ buttonSaveLoading: true });
//     try {
//       await saveDeleteProductMockApi();
//     } catch (error) {
//         console.log(error);
//         return;
//     }
//     const products = JSON.parse(localStorage.getItem("products") as string) || [];
//     const editedProduct: Product = {...this.state.product, ...values.product};
//     const updatedProducts = products.map((item: Product) => item.id === editedProduct.id ? editedProduct : item);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//     this.props.history.push('/admin-list');
//     this.setState({ buttonSaveLoading: false });
//   }

  componentDidMount() {
    const user = users.find((u: User ) => u.id === Number(this.props.match.params.id));
    this.setState({ user: user });
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
              onFinish={() => console.log('saved')}
              validateMessages={validateMessages}
              initialValues={{
                user: {
                  userName: this.state.user?.userName,
                  email: this.state.user?.email,
                  role: this.state.user?.role,
                }
              }}
            >
              <h1 style={{ fontWeight: "bold", marginBottom: '3rem' }}>EDIT USER</h1>
              <Form.Item name={["user", "userName"]} label="Username: " rules={[{ required: true }]}>
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