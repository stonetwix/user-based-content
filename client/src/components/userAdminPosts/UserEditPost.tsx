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

interface Props extends RouteComponentProps<{ id: string }> {}
interface State {
  post?: Post;
  buttonSaveLoading: boolean;
}

const successSave = () => {
  message.success('The post has been updated', 3);
};

class EditPost extends Component<Props, State> {
  state: State = {
    post: undefined,
    buttonSaveLoading: false,

  };
  async componentDidMount() {
    const post = await getPost(Number((this.props.match.params as any).id));
    this.setState({ post: post });
  }

  onFinish = async (values: any) => {
    this.setState({ buttonSaveLoading: true });
    await putPost(values.post, (this.props.match.params as any).id);
    this.props.history.push('/');
    this.setState({ buttonSaveLoading: false });
  }
 
  componentWillUnmount() {
    this.setState({ post: undefined });
  }
  render() {
    const { post } = this.state;
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

export default withRouter(EditPost);


const getPost = async (id: number) => {
  try {
      let response = await fetch('http://localhost:3001/api/posts/' + id);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
  }
}

const putPost = async (post: Post, id: number) => {
  try {
      await fetch('http://localhost:3001/api/posts/' + id, {
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