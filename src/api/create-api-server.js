import axios from 'axios'
import config from './config-server'
import md5 from 'md5'

const parseCookie = cookies => {
  let cookie = ''
  Object.keys(cookies).forEach(item => {
    cookie += item + '=' + cookies[item] + '; '
  })
  return cookie
}

export default {
  async post(url, data = {cache: false}) {
    const key = md5(url + JSON.stringify(data));
    if (config.cached && config.cached.has(key)) {
      return Promise.resolve(config.cached.get(key))
    }
    const res = await axios({
      method: 'post',
      url: config.api + url,
      data,
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    if (config.cached && data.cache) config.cached.set(key, res);
    return res.data
  },
  async get(url, params = {cache: false}) {
    const key = md5(url + JSON.stringify(params));
    if (config.cached && config.cached.has(key)) {
      return Promise.resolve(config.cached.get(key))
    }
    const res = await axios({
      method: 'get',
      url: config.api + url,
      params,
      timeout: config.timeout,
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
      }
    })
    if (config.cached && params.cache) config.cached.set(key, res);
    return res.data
  }
}
