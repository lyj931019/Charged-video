import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://dev2.people71.com//github/educate/advanced/api/web/v1/';


export default axios;

