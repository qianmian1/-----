<template>
  <view>
    <view class="box">
      <view class="input-box">
        <text class="txt">登录</text>
        <text>用户名</text>
        <input type="text" v-model="username" placeholder="用户名" />
      </view>
      <view class="input-box">
        <text>密码</text>
        <input v-model="password" placeholder="密码" type="password" />
        <text class="xxx" @click="zhuce()">注册</text>
      </view>
      <view class="but-box">
        <button @click="login()" size="mini" class="btn">登录</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        api: "login",
      }
    },
    methods: {
      login() {
        if (this.username == '') {
          uni.showToast({
            title: '用户名不能为空',
            icon: 'none'
          })
        } else if (this.password == '') {
          uni.showToast({
            title: '密码不能为空',
            icon: 'none'
          })
        } else if (this.username != '' && this.password != '') {
          uniCloud.callFunction({
            name: 'user',
            data: {
              username: this.username,
              password: this.password,
              api: this.api
            }
          }).then(res => {
            setTimeout(() => {
              uni.redirectTo({
                url: '/pages/index/index'
              })
            }, 1000)
          }).catch(e => {
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
      },
      zhuce() {
        uni.redirectTo({
          url: '/pages/login/zhuce/zhuce'
        })
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

      .txt {
        font-size: 32px;
        display: block;
        text-align: center;
        position: relative;
        top: -10px;
        left: 40%;
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
