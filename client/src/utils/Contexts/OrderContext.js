import React from "react";

const OrderContext = React.createContext({
    orders:[],
    onClick: () => undefined
});

export default OrderContext;