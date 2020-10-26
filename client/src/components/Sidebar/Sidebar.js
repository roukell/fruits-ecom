import React, { useContext } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import './Sidebar.css';
import OrderContext from '../../utils/Contexts/OrderContext.js';
import CancelIcon from '@material-ui/icons/Cancel';

const MyRightSidebar = ({ visible, setVisible }) => {
    const orderState = useContext(OrderContext);

    const mapMenuItems = orderState.orders.map((item, i) => {
        return (
            <Menu.Item key={i}>
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
                { orderState.orders[0] ? <button
                onClick={orderState.placeOrder}
                >Place Order
                </button> : <p>No items in cart</p>}
                
            </Sidebar>
        </>
    )
}

export default MyRightSidebar;