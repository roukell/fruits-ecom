import React, { useEffect, useState } from "react";
import API from '../../utils/API.js';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import CustomerTable from '../../components/Tables/CustomerTable.js';
import OrderTable from '../../components/Tables/OrderTable.js';

const Administration = () => {
    const [customers, setCustomers] = useState();
    const [orders, setOrders] = useState();
    console.log(customers, orders);

    useEffect(() => {
        API.getCustomerDetails()
            .then(data => {
                setCustomers(data.data);
            })
    }, [])

    useEffect(() => {
        API.getOrders()
            .then(data => {
                setOrders(data.data);
            })
    }, [])

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Admin</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="mr-auto">
                        <Nav.Link href="#">Customer details</Nav.Link>
                        <Nav.Link href="#">Orders</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
                <Form inline>
                    <Button
                        onClick={API.logOutCustomer}
                    >Log out</Button>
                </Form>
            </Navbar>
            <h2>Customer details</h2>
            {customers ? <CustomerTable customers={customers} /> : <p>rendering...</p>}
            <h2>Orders</h2>
            {orders ? <OrderTable orders={orders} /> : <p>rendering...</p>}
        </>
    )
}

export default Administration;