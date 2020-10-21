import React from "react";

const OrderContext = React.createContext({
    orders:[],
    onClick: () => undefined,
    onDelete: () => undefined
});

export default OrderContext;