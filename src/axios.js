import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://dev2.people71.com/github/educate/advanced/api/web/v1/';
// axios.defaults.baseURL = 'http://192.168.1.12/github/educate/advanced/api/web/v1/';
// axios.defaults.baseURL = 'http://47.244.63.58/educate/advanced/api/web/v1/';
axios.defaults.baseURL = 'http://api.e-l.ink/v1/';


export default axios;

