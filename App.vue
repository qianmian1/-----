<script>
  export default {
    globalData: {
      username: '',
      password: '',
      api: '',
      Switch: '',
      ServiceIp: 'xiaosu520.xyz',
      Plugins: '470683',
      code: false,
      zhucheMa: '',
      token: '',
      UID: '10012'
    },
    onLaunch: function() {
      console.log('App Launch')
      //   getApp().globalData.token = uni.getStorageSync('token')
      // if (!token) {
      //   uni.redirectTo({
      //     url: '/pages/login/login'
      //   })
      // }
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      uni.setStorageSync('token', getApp().globalData.token)
    }
  }
</script>

<style>
  /*每个页面公共css */
  @import "./static/iconfont.css";
</style>
