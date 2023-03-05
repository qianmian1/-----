<template>

  <view class="box">
    <text class="txt">登录</text>
    <view class="bod">
      <view class="input-box">
        <input type="text" v-model="username" placeholder="用户名" class="input" />
      </view>
      <view class="input-box">
        <input v-model="password" placeholder="密码" :type="se" class="input" style="width: 88%;" />
        <view>
          <uni-icons :type="eye" class="img" size="30px" @click="Si"></uni-icons>
        </view>
      </view>
    </view>
    <view class="box-text">
      <text class="text" @tap="getto">注册账号</text>
      <navigator url="" class="text">忘记密码？</navigator>
    </view>

    <button @click="login()" size="mini" class="btn">登录</button>
    <view class="cv"></view>
  </view>
</template>

<script setup>
  import {
    ref
  } from "vue";
  let username = ref('')
  let password = ref('')
  let api = ref("login")
  let se = ref('password')
  let eye = ref('eye')

  function getto() {
    uni.navigateTo({
      url: '/pages/login/zhuce/zhuce'
    })
  }

  function Si() {
    if (se.value == 'password') {
      eye.value = 'eye-slash'
      se.value = 'text'
    } else {
      eye.value = 'eye'
      se.value = 'password'
    }
  }

  function login() {
    uni.showLoading({
      title: '登录中',
      mask: true
    })
    if (username.value == '') {
      uni.hideLoading()
      uni.showToast({
        title: '用户名不能为空',
        icon: 'none'
      })
    } else if (password.value == '') {
      uni.hideLoading()
      uni.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
    } else if (username.value != '' && password.value != '') {
      uniCloud.callFunction({
        name: 'user',
        data: {
          username: username.value,
          password: password.value,
          api: api.value
        }
      }).then(res => {
        if (!res.result.succes) {
          uni.showToast({
            title: '请求失败，请联系作者',
            icon: 'none'
          })
          return
        }
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
      }).catch(e => {
        console.log(e);
        uni.hideLoading()
        if (e.message == "密码错误") {
          uni.showToast({
            title: '密码或账号错误',
            icon: 'error'
          })
        }
        if (e.message == "用户不存在") {
          uni.showToast({
            title: '用户不存在',
            icon: 'error'
          })
        }
      })
    }
  }
</script>

<style lang="scss">
  page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url('https://i.328888.xyz/2023/03/05/G10Uq.jpeg');
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: on-repeat;
  }

  .box {
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 600rpx;
    height: 350px;
    background-color: rgba(255, 255, 255, .4);
    z-index: 1;

    .txt {
      margin-top: 10px;
      font-size: 30px;
      color: #555555;
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-weight: 600;
      text-align: center;
      white-space: nowrap;
    }

    .bod {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      flex: 1;

      .input-box {
        position: relative;
        margin: 10px auto;
        height: 50px;
        width: 95%;
        border-radius: 4px;
        border: 1px solid #999;

        .input {
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0);
          border: 0;
          outline: none;
          text-indent: 10px;
        }

        .img {
          position: absolute;
          margin: auto 1px;
          top: 11px;
          right: 5px;
        }
      }

      .input-box:hover {
        border: 1px solid skyblue;
      }
    }

    .box-text {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .text {
        margin: 0 10px;
        color: #333;
      }
    }

    .btn {
      width: 90%;
      height: 50px;
      background-color: skyblue;
      text-align: center;
      font-size: 20px;
      margin: 0 auto;
      border-radius: 4px;
      border: 1px solid #EEE;
      margin-top: 30px;
      line-height: 50px;
    }

    .btn:active {
      background-color: skyblue;
      opacity: 0.3;
    }

    .cv {
      flex: 1;
    }
  }
</style>
