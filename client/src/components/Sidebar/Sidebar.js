import React, { useContext } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import './Sidebar.css';
// import OrderContext from '../../utils/Contexts/OrderContext.js';
import CancelIcon from '@material-ui/icons/Cancel';

const MyRightSidebar = ({ visible, setVisible }) => {
    // const orderContext = useContext(OrderContext);
    // const newOrder = orderContext.orders;
    
    // get order data from localStorage
    const newOrder = JSON.parse(localStorage.getItem('orders'));

    // render order items in sidebar
    const mapMenuItems = newOrder.orders.map((item, i) => {
                return (
                <Menu.Item key={i}>
                <div>
                    {item.title.title} x {item.quantity.quantity}
                    <span className='cancelIcon'>
                        <CancelIcon />
                    </span>
                </div>
            </Menu.Item>
            )
            })

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
            </Sidebar>
        </>
    )
}

export default MyRightSidebar;