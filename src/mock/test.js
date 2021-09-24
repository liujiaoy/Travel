import Mock from 'mockjs'

// 获取 mock.Random 对象
const Random = Mock.Random

// // mock一组数据
// const simulateData = function () {
//   let dataarr = []
//   for (let i = 0; i < 8; i++) {
//     let data = {
//       name: Random.cname(), 
//       date: Random.date(), 
//       city: Random.city() 
//     }
//     dataarr.push(data)
//   }

//   return { 
//     data: dataarr
//   }
// }


const indexData =  function(){
  return Mock.mock({
      "swiperList|1-5":[{
        "id|+1": 1,
        "imgUrl|1": [
          "//imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg",
          "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/abe3418971067bd655fb2794d6e2eeec.jpg",
          "//imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg"
        ]
      }] ,
      
      "iconList|5-10":[{
        "id|+1": 1,
        "imgUrl|1":["http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png","http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png"],
        "desc|1": ['景点门票','国庆游']
      }],
      //榜单推荐
      "hotList|2-10": [{
        "id|+1": 1,
        "imgUrl|1": [
          "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
        ],
        "title|1": Random.ctitle(),
        "desc|1": Random.csentence(),
        "price|1-500": 20
      }],
      //必游景点
      "recommendList|3": [{
        "id|+1": 1,
        "imgUrl|1": [
          "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
        ],
        "title|1": Random.ctitle(),
        "desc|1": Random.csentence()
      }],
      //周末去哪儿
      "weekendList|5":[{
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
  data:indexData
}