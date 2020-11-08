import axios from "axios";

export default {
  saveCustomerSignUpForm: function (signUpData) {
    return axios.post('/signup', signUpData)
      .then(data => window.location = '/signin');
  },

  logInCustomer: function (logInData) {
    return axios.post('/login', logInData)
      .then(data => {
        window.location = '/';
        return data;
      })
      .catch(error => {
        console.log(error);
        if (error) {
          alert('Incorrect username or password');
          return;
        }
      });
  },

  logOutCustomer: function () {
    return axios.get('/logout ')
      .then(data => {
        localStorage.removeItem('user');
        window.location = '/';
      }
      )
      .catch(error => {
        console.log(error)
      })
  },

  sendOrderToBackend: function (orders) {
    return axios.post('/sendorder', orders)
      .catch(error => {
        console.log(error);
        if (error) {
          return
        }
      })
  },

  getCustomerDetails: function (req, res) {
    return axios.get('/api/getCustomerDetails')
  },

  getOrders: function () {
    return axios.get('/api/getOrders')
  },

  getCurrentLoggedInCustomerDetails: function (user) {
    return axios.post('/api/getCurrentLoggedInCustomerDetails', user)
      .then(data => {
        return data
      })
  },

  getCurrentLoggedInCustomerOrderHistory: function (user) {
    return axios.post('/api/getCurrentLoggedInCustomerOrderHistory', user)
    .then(data => {
      return data
    })
  }

};