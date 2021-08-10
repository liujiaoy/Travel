const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const simulateData = function () {
  let dataarr = []
  for (let i = 0; i < 8; i++) {
    let data = {
      name: Random.cname(), 
      date: Random.date(), 
      city: Random.city() 
    }
    dataarr.push(data)
  }

  return {
    data: dataarr
  }
}

Mock.mock('/user/login', 'get', simulateData)