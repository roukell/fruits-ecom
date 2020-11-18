/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Table } from 'react-bootstrap';

const CustomerTable = props => (
    <>
        <h2>Customer details</h2>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.customers.map(customer => {
                    if (customer.username !== 'admin') {
                        return (
                            <tr key={customer._id}>
                                <td>{customer._id}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.username}</td>
                                <td>{customer.email}</td>
                            </tr>
                        );
                    }
                })}
            </tbody>
        </Table>
    </>
);

export default CustomerTable;
