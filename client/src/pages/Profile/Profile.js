import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import API from '../../utils/API';
import customerNavbarItems from '../../utils/Data/customerNavbaritems';
import Footer from '../../components/Footer/Footer';
import './Profile.css';
import Navigation from '../../components/Navigation/Navigation';

const Profile = () => {
    const useStyles = makeStyles(theme => ({
        appBar: {
            position: 'relative'
        },
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3)
            }
        },
        stepper: {
            padding: theme.spacing(3, 0, 5)
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1)
        }
    }));

    const classes = useStyles();
    const [currentCustomer, setCurrentCustomer] = useState('null');

    useEffect(() => {
        const userFromLocal = JSON.parse(localStorage.getItem('user'));

        if (userFromLocal) {
            const { username } = userFromLocal;
            API.getCurrentLoggedInCustomerDetails({
                username
            }).then(data => {
                setCurrentCustomer(data.data);
            });
        }
    }, []);

    const profileItems = (
        <>
            <Typography variant="h6" gutterBottom>
                Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="username"
                        name="username"
                        label='Username'
                        value={currentCustomer.username}
                        fullWidth
                        autoComplete="username"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label='First name'
                        value={currentCustomer.firstName}
                        fullWidth
                        autoComplete="given-name"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label='Last name'
                        value={currentCustomer.lastName}
                        fullWidth
                        autoComplete="family-name"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label='Email'
                        value={currentCustomer.email}
                        fullWidth
                        autoComplete="email"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );

    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='profileContainer'>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h4" variant="h4" align="center">
                            My Account
                        </Typography>
                        {profileItems}
                    </Paper>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Profile;
