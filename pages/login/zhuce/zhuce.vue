<template>
  <view class="box">

    <view class="input-box">
      <view class="input-boxname">
        <view class="input-boxname1">
          <text class="txt" @click="yu()" :style="Color1">服主注册</text>
          <text class="txt" @click="yi()" :style="Color2">玩家注册</text>
        </view>
      </view>
      <text>用户名</text>
      <input type="text" v-model="username" placeholder="请输入邮箱格式的用户名" />
    </view>
    <view class="input-box">
      <text>密码</text>
      <input v-model="password" placeholder="密码" type="password" />
    </view>
    <view class="input-box">
      <text>{{ServiceIo}}</text>
      <input v-model="ServiceIp" :placeholder="ServiceIo" type="text" />
    </view>
    <view>
      <view class="input-box">
        <text>{{Switch}}</text>
        <input v-model="Plugins" placeholder="token" type="text" />
      </view>
    </view>

    <view class="but-box">
      <button @click="login()" size="mini" class="btn">注册</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        ServiceIp: '',
        api: 'Service',
        Plugins: '',
        Service: '服务器ip',
        Switch: '插件token',
        Color1: 'color: red;',
        Color2: 'color: black;',
        ServiceIo: 'ip或域名',
      }
    },
    onReady() {
      if (getApp().globalData.code === true) {
        uni.showLoading({
          mask: true
        })
        this.login()
        setTimeout(() => {
          uni.hideLoading()
        }, 2000)
      }
    },
    onLoad() {

    },
    methods: {
      yu() {
        this.Service = '服务器ip'
        this.api = 'Service'
        this.Color1 = 'color: red;'
        this.Switch = '插件token'
        this.Color2 = 'color: black;'
        this.ServiceIo = 'ip或域名'
      },
      yi() {
        this.tu = '注册码'
        this.api = 'Player'
        this.Color1 = 'color: black;'
        this.Color2 = 'color: red;'
        this.Switch = '游戏UID'
        this.ServiceIo = '请输入注册码（也可不填）'
      },
      login() {
        if (getApp().globalData.code === false) {
          getApp().globalData.username = this.username
          // console.log(getApp().globalData.username);
          getApp().globalData.password = this.password
          // console.log(getApp().globalData.password);
          getApp().globalData.ServiceIp = this.ServiceIp
          // console.log(getApp().globalData.ServiceIp);
          getApp().globalData.Plugins = this.Plugins
          // console.log(getApp().globalData.Plugins);
          getApp().globalData.api = this.api
          // console.log(getApp().globalData.api);
          getApp().globalData.Switch = this.Switch
          // console.log(getApp().globalData.Switch);
          uni.navigateTo({
            url: '/pages/login/yanzhenma'
          })
          return
        }
        if (getApp().globalData.Switch === true) {
          //服主注册
          uniCloud.callFunction({
            name: 'user',
            data: {
              username: getApp().globalData.username,
              password: getApp().globalData.password,
              ip: getApp().globalData.ServiceIp,
              Plugins: getApp().globalData.Plugins,
              api: getApp().globalData.api
            }
          }).then(res => {
            if (res.result.code == 200) {
              uni.showToast({
                duration: 1500,
                title: '注册成功',
                icon: 'success'
              })
              getApp().globalData.code = false
              getApp().globalData.token = res.result.token
              getApp().globalData.Plugins = res.result.Plugins
              getApp().globalData.RandomNumber = res.result.RandomNumber
              setTimeout(() => {
                uni.redirectTo({
                  url: '/pages/index/index'
                })
              }, 1000)
            }
          }).catch(e => {
            getApp().globalData.code = false
            console.log(e.message);
            if (e.message === '用户已被注册') {
              uni.showToast({
                duration: 1500,
                title: '用户已被注册',
                icon: 'error'
              })
              this.username = ""
            }
          })
        } else {
          //玩家注册
          uniCloud.callFunction({
            name: 'user',
            data: {
              username: getApp().globalData.username,
              password: getApp().globalData.password,
              zhucheMa: getApp().globalData.ServiceIp,
              UID: getApp().globalData.Plugins,
              api: getApp().globalData.api
            }
          }).then(res => {
            if (res.result.code == 200) {
              uni.showToast({
                duration: 1500,
                title: '注册成功',
                icon: 'success'
              })
              getApp().globalData.code = false
              getApp().globalData.token = res.result.token
              getApp().globalData.UID = res.result.UID
              console.log(getApp().globalData.UID);
              if (res.result.plugins) {
                getApp().globalData.zhucheMa = res.result.zhucheMa
                getApp().globalData.Plugins = res.result.Plugins
                getApp().globalData.ServiceIp = res.result.ServiceIp
              }
              uni.redirectTo({
                url: '/pages/index/index'
              })
            }
          }).catch(e => {
            getApp().globalData.code = false
            if (e.message === '用户已被注册') {
              uni.showToast({
                duration: 1500,
                title: '用户已被注册',
                icon: 'error'
              })
              this.username = ""
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.a402064196a557540957b9fb7eea620b?rik=sdJhO009o7J7vQ&riu=http%3a%2f%2fuploadfile.bizhizu.cn%2f2014%2f0628%2f20140628113305228.jpg&ehk=a5YRgvYtMo9W9kuhs3ROrHuQXejDweWZJSZA12NMZ8g%3d&risl=&pid=ImgRaw&r=0');
    block-size: 100% 80%;
    background-position: 50% 50%;
    background-repeat: on-repeat;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700rpx;
    height: 760rpx;


    .input-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 10rpx;

      .input-boxname {
        display: flex;
        justify-content: center;
        width: 100%;

        .input-boxname1 {
          height: 20px;
          width: 50%;
          border: 1px solid #ffffff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .txt {
            font-size: 14px;
            display: inline;
            text-align: center;
          }

        }
      }


      .xxx {
        position: relative;
        left: 90%;
        top: 10px;
      }
    }

    .input-box>text {
      margin-bottom: 20rpx;
      color: rgba(255, 255, 255, 0.9);
    }

    .input-box>input {
      color: rgba(255, 255, 255, 0.9);
      font-size: 28rpx;
      height: 70rpx;
      width: 500rpx;
      background: rgba(255, 255, 255, 0.3);
      border: 2rpx solid #ffffff;
      border-radius: 20rpx;
      outline: none;
      padding: 0 20rpx;
    }

    .input-box {
      .btn {
        border: 2rpx solid rgba(255, 255, 255, 0.8);
      }
    }
  }
</style>
