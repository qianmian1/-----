<script>
  export default {
    globalData: {
      username: '',
      password: '',
      date: null,
      ServiceIp: '',
      Plugins: '',
      zhucheMa: '',
      code: false,
      list: [],
      UID: '',
      asstoken: '',
      assxtoken: '',
      name: '',
      img: '',
      copy: true
    },
    onLaunch: function() {
      console.log('App Launch')
      let token = uni.getStorageSync('asstoken')
      if (!token) {
        uni.redirectTo({
          url: '/pages/login/login'
        })
      } else {
        uni.showLoading({
          title: '登陆中',
          mask: true
        })
        uniCloud.callFunction({
          name: 'user',
          data: {
            api: 'login_token',
            asstoken: uni.getStorageSync('asstoken'),
            date: {
              api: true
            }
          }
        }).then(res => {
          if (res.result == -1) {
            uniCloud.callFunction({
              name: 'user',
              data: {
                api: 'login_token',
                assxtoken: uni.getStorageSync('assxtoken'),
                date: {
                  api: false
                }
              }
            }).then(res => {
              getApp().globalData.UID = res.result.user.UID
              getApp().globalData.Plugins = res.result.user.token
              getApp().globalData.ServiceIp = res.result.user.ip
              getApp().globalData.zhucheMa = res.result.user.zhucema
              getApp().globalData.asstoken = res.result.asstoken
              getApp().globalData.assxtoken = res.result.assxtoken
              getApp().globalData.name = res.result.user.name
              getApp().globalData.img = res.result.user.img
              uni.hideLoading()
              uni.showToast({
                title: '登录成功',
                icon: 'success'
              })
              setTimeout(() => {
                uni.redirectTo({
                  url: '/pages/index/index'
                })
              }, 1600)
            })
          } else if (res.result == -2) {
            uni.showToast({
              title: '未登录',
              icon: 'error',
              duration: 1600
            })
            setTimeout(() => {
              uni.redirectTo({
                url: '/pages/login/login'
              })
            }, 1600)
          } else {
            getApp().globalData.UID = res.result.user.UID
            getApp().globalData.Plugins = res.result.user.token
            getApp().globalData.ServiceIp = res.result.user.ip
            getApp().globalData.zhucheMa = res.result.user.zhucema
            getApp().globalData.asstoken = res.result.asstoken
            getApp().globalData.assxtoken = res.result.assxtoken
            getApp().globalData.name = res.result.user.name
            getApp().globalData.img = res.result.user.img
            uni.hideLoading()
            uni.showToast({
              title: '登录成功',
              icon: 'success'
            })
            setTimeout(() => {
              uni.redirectTo({
                url: '/pages/index/index'
              })
            }, 1600)
          }
        })
      }
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      uni.setStorageSync('asstoken', getApp().globalData.asstoken)
      uni.setStorageSync('assxtoken', getApp().globalData.assxtoken)
    }
  }
</script>

<style>
  /*每个页面公共css */
  @import "./static/iconfont.css";
</style>
