import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import OrderContext from './utils/Contexts/OrderContext';
import UserContext from './utils/Contexts/UserContext';
import OrderModalContext from './utils/Contexts/OrderModalContext';
import API from './utils/API';
import AdminRA from './pages/Admin/Admin-ra';
import Home from './pages/Home/Home';
import Preorder from './pages/Preorder/Preorder';
import Profile from './pages/Profile/Profile';
import OrderHistory from './pages/OrderHistory/OrderHistory';
import Checkout from './pages/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
    const [orderState, setOrderState] = useState({
        orders: []
    });
    // state for place order warning
    const [placeOrderWarning, setPlaceOrderWarning] = useState('null');
    // variable and functions for warning modal
    const [open, setOpen] = React.useState(false);
    // place order warning modal functions: hanldOpen and handleClose
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // when componentDidMount, get orders from localStorage
    useEffect(() => {
        const ordersFromLocal = JSON.parse(localStorage.getItem('orders'));
        if (ordersFromLocal) {
            setOrderState(ordersFromLocal);
        }
    }, []);

    // when Add to cart is clicked, then setOrderState to push new order to orders array
    const onClick = (title, quantity, price) => {
        const testNegative = Math.sign(quantity);
        if (quantity !== '0' && testNegative !== -1 && quantity !== '') {
            const orders = [...orderState.orders, { title, quantity, price }];
            localStorage.setItem('orders', JSON.stringify({ ...orderState, orders }));
            setOrderState({ ...orderState, orders });
        } else {
            setPlaceOrderWarning('Quantity cannot be 0 or nagative');
            handleOpen();
        }
    };

    const onDelete = i => {
        const copyState = [...orderState.orders];
        copyState.splice(i, 1);
        setOrderState({ orders: copyState });
        localStorage.setItem('orders', JSON.stringify({ orders: copyState }));
    };

    const [customerDetails, setCustomerDetails] = useState();

    if (customerDetails) {
        const customerDetailsCopy = customerDetails;
        localStorage.setItem('user', JSON.stringify(customerDetailsCopy));
    }

    // when componentDidMount, get user from localStorage
    useEffect(() => {
        const userFromLocal = JSON.parse(localStorage.getItem('user'));
        if (userFromLocal) {
            setCustomerDetails(userFromLocal);
        }
    }, []);

    // use when order has been placed
    const resetOrder = () => {
        localStorage.removeItem('orders');
        setOrderState({ orders: [] });
    };

    // need to use api to send order to backend
    const placeOrder = () => {
        if (customerDetails === undefined) {
            setPlaceOrderWarning('Please log in before placing an order');
            handleOpen();
        } else {
            setPlaceOrderWarning('Thank you for shopping with us');
            handleOpen();
            API.sendOrderToBackend({
                orders: orderState.orders,
                // eslint-disable-next-line dot-notation
                username: customerDetails['username']
            });
            resetOrder();
        }
    };

    return (
        <UserContext.Provider value={[customerDetails, setCustomerDetails]}>
            <OrderContext.Provider
                value={{
                    orders: orderState.orders, onClick, onDelete, placeOrder
                }}
            >
                <OrderModalContext.Provider
                    value={{
                        placeOrderWarning, open, handleOpen, handleClose
                    }}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/preorder' component={Preorder} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/signin' component={SignIn} />
                            <Route exact path='/signup' component={SignUp} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/checkout' component={Checkout} />
                            <Route exact path='/orderHistory' component={OrderHistory} />
                            <Route exact path='/admin' component={AdminRA} />
                        </Switch>
                    </Router>
                </OrderModalContext.Provider>
            </OrderContext.Provider>
        </UserContext.Provider>
    );
};

export default App;
