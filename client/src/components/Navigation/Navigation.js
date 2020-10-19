import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navigation.css';
import {
    Icon,
    Menu,
    Sidebar,
  } from 'semantic-ui-react';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const Navigation = ({ items }) => {
    const [visible, setVisible] = React.useState(false);
    console.log(visible);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
                <Container>
                    <Navbar.Brand className='circle'>
                        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                            <p className='circle-content'>
                            Pure
                            <br />
                            Fruit
                            </p>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {items.map(({ label, name, link }) => (
                                <Nav.Link key={name} ><Link to={link} style={{ color: 'gray', textDecoration: 'none' }}>{label}</Link></Nav.Link>
                            ))}
                        </Nav>
                        <Nav.Link style={{ color: 'gray', textDecoration: 'none' }}>
                            Log In
                        </Nav.Link>
                        <IconButton aria-label="cart" style={{ outline: 'none' }}>
                            <StyledBadge badgeContent={0} color="secondary">
                                <ShoppingCartIcon
                                label={{ children: <code>visible</code> }}
                                onClick={() => setVisible(true)}
                                />
                            </StyledBadge>
                        </IconButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
          <Sidebar
            style={{backgroundColor: '#f1bbe4', zIndex: '100000'}}
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

export default Navigation;