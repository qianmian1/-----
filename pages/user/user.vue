<template>
  <view>
    <view class="my_header">
      <view class="my_header_backgroud">
        <image src="../../static/images/01126-0.jpg" mode=""></image>
      </view>
      <view class="my_header_logo">
        <view class="my_header_logobox">
          <image :src="img" mode="aspectFill"></image>
        </view>
        <text class="my_header_name">{{ name }}</text>
      </view>
      <view class="my_header_info">
        <view class="my_header_info-box">
          <text class="my_header_info-title"> ip地址 </text>
          <text>{{ ServiceIp }}</text>
        </view>
        <view class="my_header_info-box">
          <text class="my_header_info-title"> 注册码 </text>
          <text>{{ zhucheMa }}</text>
        </view>
      </view>
    </view>
    <view class="my-content">
      <view class="my-comtent_list" v-if="zhucheMa === '-1' ? true : false">
        <view class="my-comtent_list-title">
          <uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
          <text>复制</text>
        </view>
        <switch checked="true" @change="swct" color="#FFCC33" />
        <text></text>
      </view>
      <view class="my-comtent_list" @tap="h">
        <view class="my-comtent_list-title">
          <uni-icons class="icons" type="info" size="16" color="#666"></uni-icons>
          <text>关于我</text>
        </view>
        <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
      </view>
      <view class="my-comtent_list hu" @click="loginOut">
        <view class="my-comtent_list-title">
          <uni-icons class="icons" type="info" size="16" color="#666"></uni-icons>
          <text>退出登录</text>
        </view>
        <view class=""></view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from "vue";
  import Getapp from "../../common/Getapp.js";
  let ServiceIp = ref(Getapp.globa.ServiceIp);
  let zhucheMa = ref(Getapp.globa.zhucheMa);
  let name = ref("");
  let img = ref(Getapp.globa.img);
  uni.request({
      url: Getapp.globa.name,
    })
    .then((res) => {
      name.value = res.data;
    });

  function h() {
    uni.showToast({
      title: '还没想好怎么做',
      icon: 'none',
    })
  }

  function loginOut() {
    uni.removeStorageSync('asstoken')
    uni.removeStorageSync('assxtoken')
    Getapp.globa.code = false
    uni.showToast({
      title: '退出成功',
      icon: 'success',
      duration: 1600
    })
    setTimeout(() => {
      uni.reLaunch({
        url: "/pages/login/login",
      })
    }, 1600)
  }

  function swct(e) {
    if (e.detail.value) {
      Getapp.globa.copy = false;
    } else {
      uni.navigateTo({
        url: "/pages/user/token",
      });
    }
  }
</script>

<style lang="scss">
  // @import url('user.scss');
  page {
    background-color: #f5f5f5;
  }

  .my_header {
    position: relative;
    padding-bottom: 15px;

    .my_header_backgroud {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(2px);
      opacity: 0.5;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .my_header_logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;

      .my_header_logobox {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;

        image {
          width: 100%;
          height: 100%;
        }
      }

      .my_header_name {
        margin-top: 15px;
        font-size: 16px;
        font-weight: bold;
      }
    }

    .my_header_info {
      margin-top: 15px;
      display: flex;

      .my_header_info-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 12px;
        color: #999;

        .my_header_info-title {
          font-size: 14px;
          color: #333;
        }
      }
    }
  }

  .my-content {
    .my-comtent_list {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      margin-bottom: 10px;
      background-color: #ffffff;
      color: #333;
      font-size: 14px;

      .my-comtent_list-title {
        display: flex;
        align-items: center;

        .icons {
          margin-right: 5px;
        }
      }
    }
  }

  .hu:active {
    background-color: rgba(0, 0, 0, .1);
  }
</style>
