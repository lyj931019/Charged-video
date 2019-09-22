/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 22:26:51
 * @LastEditTime: 2019-09-17 23:13:45
 * @LastEditors: Please set LastEditors
 */
import axios from '@/axios'
import { Base64 } from 'js-base64';

export function getPoint() {
  return new Promise((resolve, reject) => {
    let id = localStorage.getItem('user_id');
    id = Base64.decode(id)
    axios({
      method: 'get',
      url: `/v2/users/${id}/point`,
    }).then(res => {
      if (res.data.state.code == 0) {
        resolve(res.data)
      }else{
        reject(res.data)
      }
    })
  })
}
