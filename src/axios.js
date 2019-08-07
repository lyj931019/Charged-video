import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 40000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/educate/advanced/api/web/v1/';


export default axios;

