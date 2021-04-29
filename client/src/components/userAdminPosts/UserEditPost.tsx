import { Form, Input, Button, message, Layout } from "antd";
import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Post } from '../startpage/Post';
import ErrorPage from '../ErrorPage';
import SiderMenu from './SiderMenu';

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

interface Props extends RouteComponentProps<{ _id: string }> {}
interface State {
  post?: Post;
  loading: boolean;
}

const successSave = () => {
  message.success('The post has been updated', 3);
};

class EditPost extends Component<Props, State> {
  state: State = {
    post: undefined,
    loading: true,
  };
  async componentDidMount() {
    const post = await getPost((this.props.match.params as any)._id);
    this.setState({ post: post, loading: false });
  }

  onFinish = async (values: any) => {
    await putPost(values.post, (this.props.match.params as any)._id);
    this.props.history.push('/user');
  }
  
  render() {
    const { post } = this.state;
    if (this.state.loading) {
      return <div></div>
    }
    if (!post) {
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
              post: {
                title: this.state.post?.title,
                text: this.state.post?.text,
                imageUrl: this.state.post?.imageUrl,
              }
            }}
          >
            <h1 style={{ fontWeight: "bold", marginBottom: '3rem' }}>EDIT POST</h1>
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
                  onClick={() => {successSave()}} 
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

export default withRouter(EditPost);


const getPost = async (_id: string) => {
  try {
      let response = await fetch('/api/posts/' + _id);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
  } catch (error) {
      console.error(error);
  }
}

const putPost = async (post: Post, _id: string) => {
  try {
      await fetch('/api/posts/' + _id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
      });
  } catch (error) {
      console.error(error);
  }
}