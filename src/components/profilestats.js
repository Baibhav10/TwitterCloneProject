import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class ProfileStats extends Component {
    render() {
        const { tweetsCount, following, followers, likes } = this.props;
        return (
            <Container fluid style={{ backgroundColor: '#f8f9fa', padding: '10px 0' }}>
                <Row className="text-center">
                    <Col>
                        <div>Tweets</div>
                        <div>{tweetsCount}</div>
                    </Col>
                    <Col>
                        <div>Following</div>
                        <div>{following}</div>
                    </Col>
                    <Col>
                        <div>Followers</div>
                        <div>{followers}</div>
                    </Col>
                    <Col>
                        <div>Likes</div>
                        <div>{likes}</div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfileStats;
