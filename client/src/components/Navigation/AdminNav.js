import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import API from '../../utils/API.js';

const AdminNav = () => {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Admin</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Customer details</Nav.Link>
                    <Nav.Link href="#">Orders</Nav.Link>
                    {/* <Nav.Link href="#">Fruit Season Reminder</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            <Form inline>
                {/* <FormControl
                    name="term"
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    // passing search event to the App component after text is entered
                    // value={props.search}
                    // onChange={props.onSearch}
                    id="term"
                /> */}
                <Button
                    onClick={API.logOutCustomer}
                >Log out</Button>
            </Form>
        </Navbar>
    </>
    )
}

export default AdminNav;
