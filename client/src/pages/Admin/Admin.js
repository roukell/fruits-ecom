import React, { useEffect, useState } from "react";
import API from '../../utils/API.js';
import CustomerTable from '../../components/Tables/CustomerTable.js';
import OrderTable from '../../components/Tables/OrderTable.js';
import AdminNav from '../../components/Navigation/AdminNav.js';

const Administration = () => {
    const [customers, setCustomers] = useState();
    const [orders, setOrders] = useState();

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
            <AdminNav />
            {/* render customer table if customers is true */}
            {customers ? <CustomerTable customers={customers} /> : <p>rendering...</p>}
            
            {/* render order table if orders is true */}
            {orders ? <OrderTable orders={orders} /> : <p>rendering...</p>}
        </>
    )
}

export default Administration;