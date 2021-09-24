import axios from 'axios'
export function getHotListData () {
  // return axios.get('/user/login')
  return axios.get('/hotlist')
}