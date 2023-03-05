<template>
  <view class="box">

    <view class="input-box">
      <view class="input-boxname">
        <view class="input-boxname1">
          <view v-for="(item,index) in data.list" :key="index" class="txt" :class="{color:color===index}"
            @tap="chack(index)">{{item.name}}
          </view>
        </view>
      </view>
      <text>用户名</text>
      <input type="text" v-model="username" placeholder="请输入邮箱格式的用户名" />
      <text>密码</text>
      <uni-easyinput type="password" v-model="password" maxlength=16 placeholder="请输入密码,密码为字母、数字、特殊字符，任意2种组成，1-9位"
        :styles="data.styles">
      </uni-easyinput>
      <text v-show="color===0?true:false">{{text}}</text>
      <input type="text" v-model="ip" placeholder="请输入ip地址或域名" v-show="color===0?true:false" />
      <text>{{text_1}}</text>
      <input type="text" v-model="token" :placeholder="'请输入'+text_1" />
      <text>{{text_2}}</text>
      <input type="text" v-model="UID" placeholder="请输入游戏UID" />
    </view>

    <view class="but-box">
      <button @click="login()" size="mini" class="btn">注册</button>
    </view>
  </view>
</template>

<script setup>
  import {
    reactive,
    ref
  } from "vue";
  import {
    onLoad
  } from '@dcloudio/uni-app';
  let username = ref('')
  let password = ref('')
  let color = ref(0)
  let text = ref('IP地址或域名')
  let ip = ref('')
  let text_1 = ref('插件token')
  let token = ref('')
  let text_2 = ref('游戏UID')
  let UID = ref('')
  let api = ref('Service')
  let code = ref(getApp().globalData.code)
  let data = reactive({
    list: [{
        name: '服主注册'
      },
      {
        name: '玩家注册'
      }
    ],
    styles: {
      color: '#ffffff',
      background: 'rgba(255, 255, 255, .1)',
      borderColor: '#ffffff'

    }
  })
  onLoad(() => {
    if (getApp().globalData.code) {
      login()
    }
  })
  let chack = (index) => {
    color.value = index
    if (index === 1) {
      api.value = 'Player'
      text_1.value = '邀请码,也可不填'
    } else {
      api.value = 'Service'
      text_1.value = '游戏UID'
    }
  }
  let date = {}
  let login = () => {
    if (!getApp().globalData.code) {
      let you = (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/g)
      let pass = (/^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{1,9}$/g)
      let ipOrDomain =
        /^((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*(?:[A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){2,}))$/g
      if (api.value === 'Service') {
        if (username.value !== '' && password.value !== '' && ip.value !== '' && token.value !== '' && UID.value !==
          '') {
          if (!you.test(username.value)) {
            uni.showToast({
              title: '用户名格式不正确',
              icon: 'none'
            })
            return
          } else if (!pass.test(password.value)) {
            uni.showToast({
              title: '密码格式不正确,密码为由字母、数字、特殊字符，任意2种组成，1-9位',
              icon: 'none'
            })
            return
          } else if (!ipOrDomain.test(ip.value)) {
            uni.showToast({
              title: 'IP地址或域名格式不正确',
              icon: 'none'
            })
            return
          } else {
            uni.request({
              url: 'https://' + ip.value + '/opencommand/api',
              method: 'POST',
              data: {
                action: 'ping'
              }
            }).catch(e => {
              uni.showToast({
                title: '此IP或域名可能不支持gc-opencommand-plugin插件',
                icon: 'none',
                duration: 2000
              })
              return
            })
          }
        } else {
          uni.showToast({
            title: '不能为空',
            icon: 'error'
          })
          return
        }
        date.UID = UID.value
        date.ip = ip.value
        date.token = token.value
        date.api = api.value
      } else {
        if (username.value !== '' && password.value !== '' && UID.value !==
          '') {
          if (!you.test(username.value)) {
            uni.showToast({
              title: '用户名格式不正确',
              icon: 'error'
            })
            return
          } else if (!pass.test(password.value)) {
            uni.showToast({
              title: '密码格式不正确,密码为字母、数字、特殊字符，任意2种组成，1-9位',
              icon: 'none'
            })
            return
          } else if (!/^$|^\d{5,}$/.test(token.value)) {
            uni.showToast({
              title: '邀请码不正确，需要5位的数字',
              icon: 'none'
            })
            return
          }
        } else {
          uni.showToast({
            title: '不能为空',
            icon: 'error'
          })
          return
        }
        date.api = api.value
        date.zhucema = token.value
        date.UID = UID.value
      }
    }
    if (getApp().globalData.code) {
      uniCloud.callFunction({
        name: 'user',
        data: {
          username: getApp().globalData.username,
          password: getApp().globalData.password,
          api: 'enroll',
          date: getApp().globalData.date
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
        uni.showToast({
          title: '注册成功',
          icon: 'success'
        })
        setTimeout(() => {
          uni.redirectTo({
            url: '/pages/index/index'
          })
        }, 1600)
      })
    } else {
      uni.showToast({
        title: '请验证',
        icon: 'none'
      })
      getApp().globalData.username = username.value
      getApp().globalData.password = password.value
      getApp().globalData.date = date
      uni.reLaunch({
        url: '/pages/login/yanzhenma'
      })
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
    background-image: url('https://i.328888.xyz/2023/03/05/G1ExE.jpeg');
    block-size: 100% 80%;
    background-size: 100%;
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

            &.color {
              color: red;
            }
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
        background-color: skyblue;
        width: 50%;
        border: 2rpx solid rgba(255, 255, 255, 0.8);
      }
    }
  }
</style>
