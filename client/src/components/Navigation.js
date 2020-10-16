import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const Navigation = ({ items }) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>YSS Fruits</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {items.map(({ label, name, link }) => (
                            <Nav.Link key={name}><Link to={link} />{label}</Nav.Link>
                        ))}
                    </Nav>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={0} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;