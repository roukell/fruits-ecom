import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import './Sidebar.css';

const MyRightSidebar = ({  visible, setVisible }) => {
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
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
            </Sidebar>
        </>
    )
}

export default MyRightSidebar;