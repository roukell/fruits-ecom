import axios from "axios";

export default {
    saveCustomerSignUpForm: function(signUpData) {
      return axios.post('/signup', signUpData);
    },

    logInCustomer: function() {
      return axios.post('/login')
    },

    logOutCustomer: function() {
      return axios.get('/logout ')
    }
   
  };