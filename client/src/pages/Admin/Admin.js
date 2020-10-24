import React, { useEffect, useState } from "react";
import API from '../../utils/API.js';

const Administration = () => {
    const [customerDetails, setCustomerDetails] = useState({
        user: []
    });

    useEffect(() => {
        API.getCustomerDetails()
            .then(data => {
                setCustomerDetails(data.data);
            })

    }, [])

    return (
        <p>
            {JSON.stringify(customerDetails)}
        </p>
    )
}

export default Administration;