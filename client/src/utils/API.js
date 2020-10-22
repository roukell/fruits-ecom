import axios from "axios";

export default {
    saveCustomerSignUpForm: function(signUpData) {
      return axios.post('/signup', signUpData);
    },

    logInCustomer: function(logInData) {
      return axios.post('/login', logInData)
    },

    logOutCustomer: function() {
      return axios.get('/logout ')
    }
   
  };