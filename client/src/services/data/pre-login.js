import axios from 'axios';

export default class PreLoginDataService {
    login(username, password) {
        return axios.post('/api/login', {
            username,
            password
        })
        .then(response => response.data)
        .catch(error => Promise.reject({
            data: error.response.data,
            status: error.response.status
        }));
    };

    register(username, password, email) {
        return axios.post('/api/register', {
            username,
            password,
            email
        })
        .then(response => response.data)
        .catch(error => Promise.reject({
            data: error.response.data,
            status: error.response.status
        }));
    };
}