import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Sidebar from '../Sidebar/Sidebar.js';
import API from '../../utils/API.js';
import UserContext from '../../utils/Contexts/UserContext.js';
import './Navigation.css';

const Navigation = ({ items }) => {
    // visible variable for Sidebar
    const [visible, setVisible] = React.useState(false);
    // useContext to access customer details in localStorage
    const [customerDetails, setCustomerDetails] = useContext(UserContext);

    // sytle badbe for shopping cart icon
    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);

    const signOutCustomer = event => {
        event.preventDefault();
        API.logOutCustomer()
            .then(data => setCustomerDetails())
    };

    return (
        <>
            <Navbar collapseOnSelect expand='lg' style={{ backgroundColor: '#FFFFFF'}} sticky='top'>
                <Container>

                    {/* site logo */}
                    <Navbar.Brand className='circle'>
                        <Link to='/' style={{ color: '#F4F3EE', textDecoration: 'none' }}>
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
                                <Nav.Link key={i} as={Link} to={link}>{label}</Nav.Link>
                            ))}
                        </Nav>
                        <Nav>
                            {customerDetails ?
                                <NavDropdown
                                    id="dropdown-basic-button"
                                    title={'Welcome ' + customerDetails['firstName']}
                                    variant='light'
                                >
                                    <NavDropdown.Item as={Link} to='/profile' variant="success">Profile</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/orderHistory'>Order History</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Nav.Item></Nav.Item>}
                        </Nav>

                        {/* login */}
                        <Nav className='login'>
                            {customerDetails ? <Nav.Link onClick={signOutCustomer}>Log out</Nav.Link> : <Nav.Link as={Link} to='/signin'>Log In</Nav.Link>}
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