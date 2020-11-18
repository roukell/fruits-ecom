/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'react-bootstrap';

const OrderTable = props => (
    <>
        <h2>Orders</h2>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Customer username</th>

                    <th>Item Title</th>
                    <th>Quantity</th>

                    <th>Processing Status</th>
                </tr>
            </thead>
            <tbody>
                {props.orders.map(order => (
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.username}</td>
                        <td>
                            {order.orders.map((item, i) => (
                                <div key={i}>
                                    {item.title}
                                </div>
                            ))}
                        </td>
                        <td>
                            {order.orders.map((item, i) => (
                                <div key={i}>
                                    {item.quantity}
                                </div>
                            ))}
                        </td>
                        <td>Processing...</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
);

export default OrderTable;
