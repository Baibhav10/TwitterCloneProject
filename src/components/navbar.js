import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

class AppNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#moments">Moments</Nav.Link>
                            <Nav.Link href="#notifications">Notifications</Nav.Link>
                            <Nav.Link href="#messages">Messages</Nav.Link>
                        </Nav>
                        <Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search Twitter" className="mr-sm-2" />
                            </Form>
                            <Button variant="primary">Tweet</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavbar;
