import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';  // Make sure Button is imported correctly

class TweetCard extends Component {
    render() {
        const { name, username, date, tweetDesc, replies, retweets, likes, onDelete, id } = this.props;

        return (
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{name} (@{username}) - {date}</Card.Title>
                    <Card.Text>{tweetDesc}</Card.Text>
                    <div className="tweet-interactions">
                        <span className="mr-3">💬 {replies}</span>
                        <span className="mr-3">🔁 {retweets}</span>
                        <span className="mr-3">❤️ {likes}</span>
                        {}
                        <span>
                            <Button onClick={() => onDelete(id)}
                                    variant="link"
                                    className="float-right">
                                🗑️
                            </Button>
                        </span>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default TweetCard;