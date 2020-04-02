//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '今天又是美好的一天呢！',
    userInfo: {},
    weather: {},
  },
  //事件处理函数
  bindViewTap: function() {
    this.getLocation()
  },
  onLoad: function () {
  },
  getLocation: function(){
    let that = this
    wx.getLocation({
      type: "wgs84",
      success: (res) => {
        let lat = res.latitude
        let long = res.longitude
        wx.request({
          url: 'https://api.seniverse.com/v3/weather/now.json?key=SYCxa0ouMImQrZ4xj&location=' + lat + ':'+ long,
          success: (res) =>{
            that.setData({
              weather:res.data.results[0]
            })
          }
        })
      }
    })
  }
})
