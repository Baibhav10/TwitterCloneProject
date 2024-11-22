import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class NewTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTweetDescChange = this.handleTweetDescChange.bind(this); 
    }

    handleInputChange(event) {
        this.setState({ tweet: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.handleTweetDescChange();
    };

    handleTweetDescChange() {
        if (this.props.onNewTweet) {
            this.props.onNewTweet(this.state.tweet);
        }
        this.setState({ tweet: '' });
    }

    render() {
        return (
            <div>
                <h4>What's happening?</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="newTweet">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={this.state.tweet}
                            onChange={this.handleInputChange}
                            placeholder="What's happening?"
                            style={{ marginBottom: '10px' }}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!this.state.tweet}>
                        Tweet
                    </Button>
                </Form>
            </div>
        );
    }
}

export default NewTweet;