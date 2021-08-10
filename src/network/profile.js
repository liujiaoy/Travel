import {request} from './request';

export function testMockData(){
  return request({url:'/profile/goods.json'})
}