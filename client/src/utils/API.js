/* eslint-disable no-return-assign */
import axios from 'axios';

export default {
    saveCustomerSignUpForm(signUpData) {
        return axios.post('/signup', signUpData)
            .then(() => window.location = '/signin');
    },

    logInCustomer(logInData) {
        return axios.post('/login', logInData)
            .then(data => {
                window.location = '/';
                return data;
            })
            .catch(error => {
                if (error) {
                    console.error(error);
                }
            });
    },

    logOutCustomer() {
        return axios.get('/logout ')
            .then(() => {
                localStorage.removeItem('user');
                window.location = '/';
            })
            .catch(error => {
                console.error(error);
            });
    },

    sendOrderToBackend(orders) {
        return axios.post('/sendorder', orders)
            .catch(error => {
                if (error) {
                    console.error(error);
                }
            });
    },

    getCustomerDetails() {
        return axios.get('/api/getCustomerDetails');
    },

    getOrders() {
        return axios.get('/api/getOrders');
    },

    getCurrentLoggedInCustomerDetails(user) {
        return axios.post('/api/getCurrentLoggedInCustomerDetails', user)
            // eslint-disable-next-line arrow-body-style
            .then(data => {
                return data;
            });
    },

    getCurrentLoggedInCustomerOrderHistory(user) {
        return axios.post('/api/getCurrentLoggedInCustomerOrderHistory', user)
            // eslint-disable-next-line arrow-body-style
            .then(data => {
                return data;
            });
    }
};
