import React, { Component } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

class RightPanel extends Component {
    render() {
        const suggestions = [
            { name: 'Leo Messi', username: '@leomessi', id: 1 },
            { name: 'Neymar Jr', username: '@neymar', id: 2 },
            { name: 'Kendrick Lamar', username: '@klamar', id: 3 }
        ];

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    Who to follow
                    <span style={{ float: 'right' }}>
                        <a href="#" style={{ margin: '0 5px' }}>Refresh</a>
                        <a href="#">View all</a>
                    </span>
                </Card.Header>
                <ListGroup variant="flush">
                    {suggestions.map(user => (
                        <ListGroup.Item key={user.id}>
                            <strong>{user.name}</strong> {user.username}
                            <Button variant="outline-primary" size="sm" style={{ float: 'right' }}>Follow</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        );
    }
}

export default RightPanel;
