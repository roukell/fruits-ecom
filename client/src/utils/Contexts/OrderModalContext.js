import React from 'react';

const OrderModalContext = React.createContext({
    placeOrderWarning: '',
    open: '',
    handleOpen: () => undefined,
    handleClose: () => undefined
});

export default OrderModalContext;
