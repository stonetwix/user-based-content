import { Result, Button, Row, Col } from 'antd';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

function SuccessMessage() {
    return (
        <Row style={containerStyle}>
            <Col span={24} style={colStyle}>
                <Result
                    status="success"
                    title="You successfully registered an account on Traveler"
                    extra={[
                    <Link to='/'>
                        {/*OBS! Lägg in rätt länk */ }
                        <Button type="primary" key="console">Log in</Button>
                    </Link>
                    ]}
                />
              
            </Col>
        </Row>
    ) 
}

export default SuccessMessage; 

const containerStyle: CSSProperties = {
    margin: 'auto'
}

const colStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10rem',
    marginBottom: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
}