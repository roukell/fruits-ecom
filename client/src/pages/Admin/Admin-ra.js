import React, { useEffect, useState } from 'react';
import authProvider from './authProvider';
import { Admin, Resource, ListGuesser } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
// import customer array
import customers from './customersDetails';
// import orders array
import orders from './ordersDetails';
import API from '../../utils/API';

const AdminRA = () => {
    const [APIcustomers, setAPIcustomers] = useState([]);
    const [APIorders, setAPIorders] = useState([]);

    // get customers details from API
    async function getAPIcustomers() {
        const getAPIcus = await API.getCustomerDetails();
        setAPIcustomers(getAPIcus.data);
        console.log(APIcustomers);
    }

    useEffect(() => {
        getAPIcustomers();
    }, [])

    // get order details from API
    async function getOrders() {
        const getAPIord = await API.getOrders();
        setAPIorders(getAPIord.data);
        console.log(APIorders)
    }

    useEffect(() => {
        getOrders();
    },[])

    const dataProvider = fakeDataProvider({
        customers,
        orders,
        APIcustomers,
        APIorders
    })

    return (
         <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="customers" list={ListGuesser} />
        <Resource name="orders" list={ListGuesser} />
        <Resource name="APIcustomers" list={ListGuesser} />
        <Resource name="APIorders" list={ListGuesser} />
    </Admin>
    )
};

export default AdminRA;