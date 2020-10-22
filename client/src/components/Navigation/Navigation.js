import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Sidebar from '../Sidebar/Sidebar.js';
import './Navigation.css';

const Navigation = ({ items }) => {
    // visible variable for Sidebar
    const [visible, setVisible] = React.useState(false);

    // sytle badbe for shopping cart icon
    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);

    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='light' sticky='top'>
                <Container>

                    {/* site logo */}
                    <Navbar.Brand className='circle'>
                        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                            <p className='circle-content'>
                                Pure
                            <br />
                                Fruit
                            </p>
                        </Link>
                    </Navbar.Brand>

                    {/* render navbar from navbar data */}
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            {items.map(({ label, name, link }, i) => (
                                <Nav key={i} ><Link to={link}>{label}</Link></Nav>
                            ))}
                        </Nav>

                        {/* login */}
                        <Nav className='login'>
                            <Link to='/signin'>Log In</Link>
                        </Nav>

                        {/* shopping cart icon */}
                        <IconButton aria-label='cart' style={{ outline: 'none' }}>
                            <StyledBadge badgeContent={0} color='secondary'>
                                <ShoppingCartIcon
                                    label={{ children: <code>visible</code> }}
                                    onClick={() => setVisible(true)}
                                />
                            </StyledBadge>
                        </IconButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Sidebar component */}
            <Sidebar
            visible={visible}
            setVisible={setVisible} 
            />
        </>
    )
}

export default Navigation;