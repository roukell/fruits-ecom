import React, { useContext } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import './Sidebar.css';
import OrderContext from '../../utils/Contexts/OrderContext.js';

const MyRightSidebar = ({  visible, setVisible }) => {
    const order = useContext(OrderContext);
    console.log(order);

    return(
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
                    Shopping Cart
                </Menu.Item>
                <Menu.Item as='a'>
                    <p>
                        {/* {order.orders.productTitle.title}
                        <br/>
                        <span>
                        Quantity: {order.orders.quantity.quantity} 
                        </span> */}
                    </p>
                </Menu.Item>
                
            </Sidebar>
        </>
    )
}

export default MyRightSidebar;