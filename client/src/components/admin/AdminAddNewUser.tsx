import { Component, CSSProperties } from "react";
import { Form, Input, Button, message, Select, Layout } from "antd";
import { RouteComponentProps, withRouter } from "react-router-dom";
import SiderMenu from '../userAdminPosts/SiderMenu';

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
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

interface Props extends RouteComponentProps<{ id: string }> {}

// interface State {
//   product: Product | undefined;
//   buttonSaveLoading: boolean;
// }

const success = () => {
  message.success('The user has been added', 3);
};
class AddNewUser extends Component<Props> {
  
//   state: State = {
//     product: undefined,
//     buttonSaveLoading: false,
//   };
  
//   onFinish = async (values: any) => {
//     this.setState({ buttonSaveLoading: true });
//     try {
//       await saveNewProductMockApi();
//     } catch (error) {
//         console.log(error);
//         return;
//     }
//     const existingProducts = JSON.parse(localStorage.getItem("products") as string) || [];
//     const newProduct: Product = {...values.product};
//     newProduct.id = Math.max(...existingProducts.map((item: Product) => item.id)) + 1;
//     existingProducts.push(newProduct)
//     localStorage.setItem('products', JSON.stringify(existingProducts));
//     this.props.history.push('/admin-list');
//     this.setState({ buttonSaveLoading: false });
//   };

  render() {
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
                    >
                        <h1 style={{ fontWeight: "bold", marginBottom: '3rem' }}>ADD NEW USER</h1>
                        <Form.Item name={["user", "userName"]} label="Username: " rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name={["user", "email"]} label="E-mail: " rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        
                        <Form.Item name={["user", "role"]} label="Role: " rules={[{ required: true }]}>
                        <Select defaultValue='Publisher'>
                            <Select.Option value="publisher">Publisher</Select.Option>
                            <Select.Option value="admin">Admin</Select.Option>
                        </Select>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button 
                                type="primary"
                                onClick={() => {console.log('User added'); success();}} 
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
    )
  }
}

const ContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "space-around",
  width: "70%",
  margin: "auto",
};
  
const columnStyle: CSSProperties = {
  marginTop: "10rem",
  paddingBottom: "8rem",
};

export default withRouter(AddNewUser); 
