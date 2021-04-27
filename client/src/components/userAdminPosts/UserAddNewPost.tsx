import { Form, Input, Button, message, Layout } from "antd";
import { Component,  } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Post from "../startpage/Post";
import SiderMenu from "./SiderMenu";

const { Content } = Layout;
const layout = {
  labelCol: {
    span: 2,
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


const successAdd = () => {
  message.success('The post is published', 3);
};



interface Props extends RouteComponentProps<{ id: string }> {}
interface State {
  post: Post | undefined;
  }
class UserAddNewPost extends Component<Props, State>{
 
  state: State = {
    post: undefined,
  };

onFinish = async (values: any) => {
  await addPost(values.post);
  this.props.history.push('/user');
};

// componentWillUnmount() {
//   this.setState({ post: undefined });
// };

  render() {
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
        >
          <h1 style={{ fontWeight: "bold", marginBottom: '3rem' }}>ADD POST</h1>
          <Form.Item name={["post", "title"]} label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name={["post", "text"]} label="Text" rules={[{ required: true }]}>
            <Input.TextArea rows={10}/>
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
    )
  }};

export default withRouter(UserAddNewPost);

const addPost = async (post: Post) => {
  try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
      });
  } catch (error) {
      console.error(error);
  }
}
