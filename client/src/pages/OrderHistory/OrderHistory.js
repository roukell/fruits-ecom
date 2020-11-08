import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';
import './OrderHistory.css';
import API from '../../utils/API.js';

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const userFromLocal = JSON.parse(localStorage.getItem('user'));

        if (userFromLocal) {
            const username = userFromLocal.username;
            API.getCurrentLoggedInCustomerOrderHistory({
                username: username
            }).then(data => {
                setOrderHistory(data.data)
            })
        }
    }, []);

    const orderHistoryItems = orderHistory.map((item, i) => {
        return (
            <tr key={i}>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>
                    {item.orders.map((order, j) => {
                        return (
                            <li key={j}>
                                {order.title} x {order.quantity}
                            </li>
                        )
                    })}
                </td>
            </tr>
        )
    })

    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='orderHistoryContainer'>
                <h3>Order History</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Product name x Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistoryItems}
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    )
}

export default OrderHistory;