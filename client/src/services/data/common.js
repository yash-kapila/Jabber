import axios from 'axios';

export default class CommonDataService {
  constructor() {
    this.tokenValidity = false;
  }

  getTokenValidity() {
    return this.tokenValidity;
  };

  setTokenValidity(status) {
    this.tokenValidity = status;
  };

  verifyToken() {
    return axios.get('/api/verify')
      .then(response => response.data)
      .catch(error => Promise.reject({
        data: error.response.data,
        status: error.response.status
      }));
  };

}
