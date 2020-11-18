/* eslint-disable array-callback-return */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import dateFormat from 'dateformat';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import customerNavbarItems from '../../utils/Data/customerNavbaritems';
import './OrderHistory.css';
import API from '../../utils/API';

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const userFromLocal = JSON.parse(localStorage.getItem('user'));

        if (userFromLocal) {
            const username = userFromLocal.username;
            API.getCurrentLoggedInCustomerOrderHistory({
                username: username
            }).then(data => {
                setOrderHistory(data.data);
            });
        }
    }, []);

    const orderHistoryItems = orderHistory.map((item, i) => {
        const formattedDate = dateFormat(item.date, 'dddd, mmmm dS, yyyy');

        const array = [];

        item.orders.map(items => {
            const total = items.quantity * items.price;
            array.push(total);
        });

        const totalPrice = array.reduce((a, b) => a + b);

        return (
            <tr key={i}>
                <td>{formattedDate}</td>
                <td>{item.status}</td>
                <td>
                    {item.orders.map((order, k) => (
                        <li key={k}>
                            {order.title}
                        </li>
                    ))}
                </td>
                <td>
                    {item.orders.map((order, j) => (
                        <li key={j}>
                            {order.quantity}
                        </li>
                    ))}
                </td>
                <td>
                    {item.orders.map((order, z) => (
                        <li key={z}>
                            {order.price}
                        </li>
                    ))}
                </td>
                <td>
                    {totalPrice}
                </td>
            </tr>
        );
    });

    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='orderHistoryContainer'>
                <h3>Order History</h3>
                <Table
                    striped bordered hover
                    responsive='sm'
                >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price/Unit</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistoryItems}
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    );
};

export default OrderHistory;
