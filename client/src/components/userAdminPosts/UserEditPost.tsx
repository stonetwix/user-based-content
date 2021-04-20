import { Form, Input, Button, message, Layout, Menu } from "antd";
import { Component, CSSProperties } from "react";
import { Link } from 'react-router-dom';
import { UserOutlined, CameraOutlined } from '@ant-design/icons';
//import { RouteComponentProps, withRouter } from "react-router-dom";

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

// interface Props extends RouteComponentProps<{ id: string }> {}

// interface State {
//   products: Product[];
//   product: Product | undefined;
//   buttonSaveLoading: boolean;
//   buttonDeleteLoading: boolean;
// }

const successSave = () => {
  message.success('The post has been updated', 3);
};

class EditPost extends Component {
//   state: State = {
//     products: JSON.parse(localStorage.getItem('products') as string) || [],
//     product: undefined,
//     buttonSaveLoading: false,
//   };

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

//   componentDidMount() {
//     const products = JSON.parse(localStorage.getItem('products') as string) || [];
//     const product = products.find((p: Product) => p.id === Number(this.props.match.params.id));
//     this.setState({ product: product });
//   }

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
                // product: {
                //   title: this.state.product?.title,
                //   description: this.state.product?.description,
                //   imageUrl: this.state.product?.imageUrl,
                // }
              }}
            >
              <h1 style={{ fontWeight: "bold", marginBottom: '3rem' }}>EDIT POST</h1>
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
                    onClick={() => {console.log('Post updated'); successSave();}} 
                    htmlType="submit" 
                    //loading={this.state.buttonSaveLoading}
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

export default EditPost;

const logoStyle: CSSProperties = {
  width: '10rem',
  margin: '1rem',
}