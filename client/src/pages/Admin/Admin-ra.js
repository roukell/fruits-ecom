/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react';
import { Admin, Resource, ShowGuesser } from 'react-admin';
import DataProvider from 'ra-data-fakerest';
import authProvider from './authProvider';
import API from '../../utils/API';
import OrderList from './OrderList';
import CustomerList from './CustomerList';
import Dashboard from './Dashboard';

const AdminRA = () => {
    const [customers, setCustomers] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // get customers details from API
        async function getCustomers() {
            const getAPIcustomer = await API.getCustomerDetails();
            setCustomers(getAPIcustomer.data);
        }
        getCustomers();
    }, []);

    useEffect(() => {
        // get order details from API
        async function getOrders() {
            const getAPIorder = await API.getOrders();
            setOrders(getAPIorder.data);
        }
        getOrders();
    }, []);

    const dataProvider = DataProvider({
        customers: customers,
        orders: orders
    });

    return (
        <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
            <Resource name="customers" list={CustomerList} />
            <Resource name="orders" list={OrderList} show={ShowGuesser} />
        </Admin>
    );
};

export default AdminRA;
