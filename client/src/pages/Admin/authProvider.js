import axios from "axios";
const jwt = require("jsonwebtoken");

export default {
    // called when the user attempts to log in
    login: (request) => {
        axios.post('/admin/login', request)
            .then(res => {
                if (res.status < 200 || res.status >= 300) {
                    throw new Error(res.statusText);
                } else {
                    console.log(res);
                    // decode token for setting up permission
                    const token = res.data.token;
                    const decodedToken = jwt.decode(token, {
                        complete: true
                       });
                    localStorage.setItem('token', token);
                    // decoded.permissions will be undefined because it's not setup yet.
                    localStorage.setItem('permissions', decodedToken.permissions);
                    return res.json();
                }
            })
        .catch(err => {
            window.location = '/admin';
            return;
        })
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};