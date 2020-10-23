import axios from "axios";

export default {
  saveCustomerSignUpForm: function (signUpData) {
    return axios.post('/signup', signUpData);
  },

  logInCustomer: function (logInData) {
    return axios.post('/login', logInData)
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
        if (error) {
          alert('Incorrect username or password')
        }
      });
  },

  logOutCustomer: function () {
    return axios.get('/logout ')
      .then(localStorage.removeItem('user'))
      .catch(error => {
        console.log(error)
      })
  }
};