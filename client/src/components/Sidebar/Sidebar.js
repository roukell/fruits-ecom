import React, { useContext } from 'react';
import { Icon, Menu, Sidebar, Button } from 'semantic-ui-react';
import './Sidebar.css';
import OrderContext from '../../utils/Contexts/OrderContext.js';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';

const MyRightSidebar = ({ visible, setVisible }) => {
    const orderState = useContext(OrderContext);

    const mapMenuItems = orderState.orders.map((item, i) => {
        return (
            <Menu.Item key={i} >
                {item.title} x {item.quantity}
                <span className='cancelIcon'>
                    <CancelIcon
                        onClick={() => orderState.onDelete(i)}
                    />
                </span>
            </Menu.Item>
        )
    });

    return (
        <>
            {/* sidebar component from Semantic ui */}
            <Sidebar
                className='sidebar'
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                direction='right'
                visible={visible}
                width='wide'
            >
                {/* sidebar menu */}
                <Menu.Item>
                    <Icon name='cart' />
                        Your Order
                    </Menu.Item>

                <div>
                    {mapMenuItems}
                </div>
                {/* {orderState.orders[0] ? <button
                    onClick={orderState.placeOrder}
                >Place Order
                </button> : <h4>No items in cart</h4>} */}

                {orderState.orders[0] ? <Button
                    as={Link} 
                    to='/checkout'>
                       Checkout 
                </Button> 
                : 
                <h4>No items in cart</h4>}
                <br />
                <br />
                <Button animated='vertical'
                    onClick={() => setVisible(false)}
                >
                    <Button.Content visible>Continue Shopping</Button.Content>
                    <Button.Content hidden>
                        <Icon name='shopping bag' />
                    </Button.Content>
                </Button>
            </Sidebar>
        </>
    )
}

export default MyRightSidebar;