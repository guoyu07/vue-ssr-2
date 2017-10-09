import axios from 'axios'

axios.interceptors.request.use((config) => {
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error)
});

export default {
  /**
   * 封装get请求
   * @param url
   * @param params
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params,
        timeout: 100000
      }).then(res => {
        resolve(res.data);
      }).catch(error => {
        reject(error);
      });
    })
  }
}