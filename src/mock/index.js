import Mock from 'mockjs'
import data from './test.js'
import hotlistData from './hotlist.js'

// Mock.mock(/\/user\/login/, 'get', simulateData)
Mock.mock(/\/index.json/, 'get', {
  "ret":true,
  "data":data.data
})
Mock.mock(/\/hotlist.json/, 'get', {
  "ret":true,
  "data":hotlistData.hotlistData
})