import axios from 'axios'
import config from './config-client'

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
    return axios({
      method: 'get',
      url,
      params,
      timeout: 100000
    }).then(res => res.data)
  },
  post(url, data) {
    return axios({
      method: 'post',
      url: config.api + url,
      data,
      timeout: config.timeout,
    }).then(res => res.data)
  }
}