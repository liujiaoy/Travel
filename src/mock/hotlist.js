import Mock from 'mockjs'

// 获取 mock.Random 对象
const Random = Mock.Random
const hotlistData =  function(){
  return Mock.mock({
      //热门景点
      "addresslist|10": [{
        "id|+1": 1,
        "imgUrl|1": [
          "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
        ],
        "title|1": Random.ctitle(),
        "desc|1": Random.csentence()
      }],
      //热门路线
      "routelist|10":[{
        "id|+1": 1,
        "imgUrl|1": [
          "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
          "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
        ],
        "title|1": Random.ctitle(),
        "desc|1": Random.csentence()
      }]
      
      }
    )
  


}
export default {
  hotlistData:hotlistData
}