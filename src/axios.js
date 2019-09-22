/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 22:08:39
 * @LastEditTime: 2019-08-25 00:54:43
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 40000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';


export default axios;

