import axios from 'axios';

export default class PostLoginDataService {
    getUserProfile(username) {
        return axios.get('/api/user/profile')
        .then(response => response.data)
        .catch(error => Promise.reject({
            data: error.response.data,
            status: error.response.status
        }));
    };
}
