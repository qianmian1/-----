<template>
  <view class="box">

    <view class="input-box">
      <view class="input-boxname">
        <view class="input-boxname1">
          <view v-for="(item,index) in data.list" :key="index" class="txt" :class="{color:color===index}"
            @tap="chken(index)">{{item.name}}
          </view>
        </view>
      </view>
      <text>用户名</text>
      <input type="text" v-model="username" placeholder="请输入邮箱格式的用户名" />
      <text>密码</text>
      <uni-easyinput type="password" v-model="password" maxlength=16 placeholder="请输入密码" :styles="data.styles">
      </uni-easyinput>
      <text>{{text}}</text>
      <input type="text" v-model="ip" placeholder="请输入ip地址或域名" />
      <text>{{text_1}}</text>
      <input type="text" v-model="token" :placeholder="'请输入插件'+text_1" />
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
    ref,
    watch
  } from "vue";
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
      color: '#666',
      background: 'rgba(255, 255, 255, .1)',
      border: ' 1px solid #ffffff'
    },
    date: {

    }
  })
  watch(code, () => {
    login()
  })
  let login = () => {
    let date = data.date
    if (api === 'Service') {
      date.UID = UID.value
      date.ip = ip.value
      date.token = token
    } else {
      date.zhudema = token.value
      date.UID = UID.value
    }
    if (code === true) {
      uniCloud.callFunction({
        name: 'user',
        data: {
          username: username.value,
          password: password.value,
          api: api.value,
          date: date
        }
      })
    } else {
      uni.showToast({
        title: '请验证',
        icon: 'none'
      })
      uni.navigateTo({
        url: '/pages/login/yanzhenma?username:' + username.value.toString()
      })
    }
    let chken = (index) => {
      color.value = index
      if (index === 1) {
        api.value = 'Player'
        text_1.value = '邀请码'
      } else {
        api.value = 'Service'
        text_1.value = '游戏UID'
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
