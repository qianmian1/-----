<template>
  <view>
    <view class="box">
      <view class="input-box">
        <input type="text" class="input" placeholder="IP地址或域名" v-model="ip">
      </view>
      <view class="input-box" v-if='sw'>
        <input type="text" class="input" v-model="uid" placeholder="验证码">
      </view>
      <button @click="gettoken" size="mini" style="background-color: #ffffff;">发送</button>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from "vue";
  import Getapp from '../../common/Getapp.js'
  let ip = ref('')
  let uid = ref(Getapp.globa.UID.replace(/@/g, ''))
  let sw = ref(false)
  let token = null

  function gettoken() {
    uni.showLoading({
      title: '请求中',
      mask: true
    })
    if (!sw.value) {
      uni.request({
        url: 'https://' + ip.value + '/opencommand/api',
        method: 'POST',
        data: {
          action: 'sendCode',
          data: Number(uid.value)
        }
      }).then(res => {
        if (res.data.data == null) {
          uni.hideLoading()
          uni.showToast({
            title: '发送失败',
            icon: 'error'
          })
          return
        }
        console.log(res);
        uni.hideLoading()
        console.log(res.data.data);
        token = res.data.data
        sw.value = true
      })
    } else {
      setTimeout(() => {
        uni.hideLoading()
        uni.showToast({
          icon: 'error',
          title: '请求失败请重试',
        })
      }, 3000)

      uni.request({
        url: 'https://' + ip.value + '/opencommand/api',
        method: 'POST',
        data: {
          action: 'verify',
          data: +uid.value,
          token: token,
        }
      }).then(res => {
        if (res.data.message == 'Success') {
          uni.hideLoading()
          Getapp.globa.ServiceIp = ip.value
          Getapp.globa.Plugins = token
          Getapp.globa.zhucheMa = '1'
          Getapp.globa.copy = true
          uni.showToast({
            title: '验证成功',
            icon: 'success'
          })
          setTimeout(() => {
            uni.redirectTo({
              url: '/pages/user/user',
            })
          }, 1600)
        } else {
          uni.hideLoading()
          uni.showToast({
            title: '验证失败',
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
    height: 100%;
    background-color: #f5f5f5f5;
    justify-content: center;
    align-items: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600rpx;
    height: 300px;
    background-color: #fffae8;
    box-shadow: 3px 4px 1px rgba(0, 0, 0, .2);

    .input-box {
      width: 90%;
      height: 30px;
      border: 1px solid black;
      border-radius: 4px;
      margin: 10px 0;

      .input {
        width: 100%;
        height: 100%;
        line-height: 30px;
        font-size: 15px;
        border-radius: 4px;
      }
    }
  }
</style>
