import { Component, CSSProperties } from 'react';
import { Row, Col } from 'antd';
//import { RouteComponentProps, withRouter } from 'react-router-dom';

const post = {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    userName: 'User Name',
    date: '2021-04-20',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu augue, euismod at viverra ac, facilisis ac ante. Vivamus nunc erat, rutrum sit amet neque vitae, luctus aliquet ipsum. Sed dapibus facilisis feugiat. Suspendisse vestibulum at elit et sodales. Praesent leo odio, pulvinar eget ex in, fringilla varius sapien. Aliquam vitae mi in libero efficitur consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin augue erat, faucibus quis enim nec, vestibulum faucibus mauris. Suspendisse sagittis massa ut nibh blandit dapibus. In tincidunt quis magna non congue. Aliquam erat volutpat. Phasellus blandit semper malesuada. Etiam augue ipsum, tincidunt ut egestas nec, porttitor vitae ligula. Mauris vestibulum lorem vitae neque sagittis aliquam. Maecenas eros nulla, molestie ac lacinia ornare, dapibus ut purus. Aliquam erat volutpat. Praesent fermentum non nisl mollis fringilla. Maecenas eu dui et mi blandit fringilla. Mauris porttitor, metus eget euismod viverra, purus est dapibus ipsum, auctor commodo urna odio id mi. Aenean a lectus rutrum, feugiat lectus nec, scelerisque metus. Vivamus nec diam in mauris convallis vestibulum. Sed lorem quam, pulvinar scelerisque ultricies nec, euismod ut nunc. Vestibulum eget efficitur orci.',
    imageUrl: 'https://github.com/stonetwix/user-based-content/blob/main/client/src/assets/travel1.png?raw=true',
};

class DetailView extends Component {
    render () {
        return (
            <Row style={containerStyle}>
                <Col lg={{span: 24}} style={columnStyle}>
                    <img src={post.imageUrl} alt={post.title}/>          
                    <h1 style={titleStyle}>{post.title}</h1>
                    <h3 style={usernameStyle}>{post.userName}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{post.date}</h3>
                    <p>{post.text}</p>
                </Col>
            </Row>
        ); 
    }    
}

export default DetailView;

const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
    margin: 'auto',
}

const columnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10rem',
    marginBottom: '5rem',
}

const titleStyle: CSSProperties = {
    fontSize: '2rem',
    marginTop: '2rem',
    fontWeight: 'bold',
 }

 const usernameStyle: CSSProperties = {
     fontWeight: 'bold',
     color: '#aaa',
     textTransform: 'uppercase',
 }