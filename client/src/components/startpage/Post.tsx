import { Component, CSSProperties } from 'react';
import { List, Row, Col } from 'antd';
import { Link } from 'react-router-dom';


// const listData: any[] | undefined = [];
// for (let i = 0; i < 3; i++) {
//   listData.push({
//     imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel2.png?raw=true',
//     title: `Post ${i}`,
//     description: 'Username123',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   });
// }
export interface Post {
  id: number
  title: string
  userName: string
  date: string
  text: string
  imageUrl: string
}

export const posts: Post[] = [{
  id: 1,
  title: 'Lorem ipsum dolor sit amet',
  userName: 'User Name',
  date: '2021-04-20',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu augue, euismod at viverra ac, facilisis ac ante. Vivamus nunc erat, rutrum sit amet neque vitae, luctus aliquet ipsum. Sed dapibus facilisis feugiat. Suspendisse vestibulum at elit et sodales. Praesent leo odio, pulvinar eget ex in, fringilla varius sapien. Aliquam vitae mi in libero efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin augue erat, faucibus quis enim nec, vestibulum faucibus mauris. Suspendisse sagittis massa ut nibh blandit dapibus. In tincidunt quis magna non congue. Aliquam erat volutpat. Phasellus blandit semper malesuada. Etiam augue ipsum, tincidunt ut egestas nec, porttitor vitae ligula. Mauris vestibulum lorem vitae neque sagittis aliquam. Maecenas eros nulla, molestie ac lacinia ornare, dapibus ut purus. Aliquam erat volutpat. Praesent fermentum non nisl mollis fringilla. Maecenas eu dui et mi blandit fringilla. Mauris porttitor, metus eget euismod viverra, purus est dapibus ipsum, auctor commodo urna odio id mi. Aenean a lectus rutrum, feugiat lectus nec, scelerisque metus. Vivamus nec diam in mauris convallis vestibulum. Sed lorem quam, pulvinar scelerisque ultricies nec, euismod ut nunc. Vestibulum eget efficitur orci.',
  imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel1.png?raw=true',
},
{
id: 2,
  title: 'Lorem ipsum dolor sit amet',
  userName: 'User Name',
  date: '2021-04-20',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu augue, euismod at viverra ac, facilisis ac ante. Vivamus nunc erat, rutrum sit amet neque vitae, luctus aliquet ipsum. Sed dapibus facilisis feugiat. Suspendisse vestibulum at elit et sodales. Praesent leo odio, pulvinar eget ex in, fringilla varius sapien. Aliquam vitae mi in libero efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin augue erat, faucibus quis enim nec, vestibulum faucibus mauris. Suspendisse sagittis massa ut nibh blandit dapibus. In tincidunt quis magna non congue. Aliquam erat volutpat. Phasellus blandit semper malesuada. Etiam augue ipsum, tincidunt ut egestas nec, porttitor vitae ligula. Mauris vestibulum lorem vitae neque sagittis aliquam. Maecenas eros nulla, molestie ac lacinia ornare, dapibus ut purus. Aliquam erat volutpat. Praesent fermentum non nisl mollis fringilla. Maecenas eu dui et mi blandit fringilla. Mauris porttitor, metus eget euismod viverra, purus est dapibus ipsum, auctor commodo urna odio id mi. Aenean a lectus rutrum, feugiat lectus nec, scelerisque metus. Vivamus nec diam in mauris convallis vestibulum. Sed lorem quam, pulvinar scelerisque ultricies nec, euismod ut nunc. Vestibulum eget efficitur orci.',
  imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel2.png?raw=true',
},
{
  id: 3,
    title: 'Lorem ipsum dolor sit amet',
    userName: 'User Name',
    date: '2021-04-20',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu augue, euismod at viverra ac, facilisis ac ante. Vivamus nunc erat, rutrum sit amet neque vitae, luctus aliquet ipsum. Sed dapibus facilisis feugiat. Suspendisse vestibulum at elit et sodales. Praesent leo odio, pulvinar eget ex in, fringilla varius sapien. Aliquam vitae mi in libero efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin augue erat, faucibus quis enim nec, vestibulum faucibus mauris. Suspendisse sagittis massa ut nibh blandit dapibus. In tincidunt quis magna non congue. Aliquam erat volutpat. Phasellus blandit semper malesuada. Etiam augue ipsum, tincidunt ut egestas nec, porttitor vitae ligula. Mauris vestibulum lorem vitae neque sagittis aliquam. Maecenas eros nulla, molestie ac lacinia ornare, dapibus ut purus. Aliquam erat volutpat. Praesent fermentum non nisl mollis fringilla. Maecenas eu dui et mi blandit fringilla. Mauris porttitor, metus eget euismod viverra, purus est dapibus ipsum, auctor commodo urna odio id mi. Aenean a lectus rutrum, feugiat lectus nec, scelerisque metus. Vivamus nec diam in mauris convallis vestibulum. Sed lorem quam, pulvinar scelerisque ultricies nec, euismod ut nunc. Vestibulum eget efficitur orci.',
    imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel4.png?raw=true',
  },
];
class StartPagePost extends Component {

render() {
    return(
        <Row style={postContainer}>
        <Col span={24} style={columnStyle}>
          
            <List
                itemLayout="vertical"
                size="large"
                dataSource={posts}
                renderItem={item => (
                  
                  <List.Item style={postBox}
                  extra={
                    <img style={imageStyle}
                      src={item.imageUrl} 
                      alt={item.title}
                    />   
                  }
                  
                  >
                  <Link to={'/post/' + item.id}>
                    <List.Item.Meta
                        title={item.title}
                        description={item.text.substring(0, 300) + '...'}
                    />
                  </Link>
                  </List.Item>
                )}
                   
            />
        </Col>
    </Row>      
    )
}};

export default StartPagePost;


const postContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '60%',
  margin: 'auto'
}

const columnStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10rem',
  marginBottom: '5rem',
}

const postBox: CSSProperties = {
    display: 'flex',
    flexDirection: 'column-reverse',  
}

const imageStyle: CSSProperties = {
    width: '100%',
    margin: '1rem',
}