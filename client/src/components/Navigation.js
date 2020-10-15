import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Pre-Order</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <h2>Hello Fruits</h2>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">
                        Contact
                </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Navigation;