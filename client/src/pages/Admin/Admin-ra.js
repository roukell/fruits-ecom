import React, { useEffect, useState } from 'react';
import authProvider from './authProvider';
import { Admin, Resource, ListGuesser } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import API from '../../utils/API';
import OrderList from './OrderList';
import CustomerList from './CustomerList';

const AdminRA = () => {
    const [customers, setCustomers] = useState([]);
    const [orders, setOrders] = useState([]);

    // get customers details from API
    async function getCustomers() {
        const getAPIcus = await API.getCustomerDetails();
        setCustomers(getAPIcus.data);
        console.log(customers);
    }

    useEffect(() => {
        getCustomers();
    }, [])

    // get order details from API
    async function getOrders() {
        const getAPIord = await API.getOrders();
        setOrders(getAPIord.data);
        console.log(orders)
    }

    useEffect(() => {
        getOrders();
    },[])

    const dataProvider = fakeDataProvider({
        customers,
        orders
    })

    return (
         <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="customers" list={CustomerList} />
        <Resource name="orders" list={OrderList} />
    </Admin>
    )
};

export default AdminRA;