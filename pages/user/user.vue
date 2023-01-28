<template>
  <view>
    <view class="my_header">
      <view class="my_header_backgroud">
        <image src="../../static/logo.png" mode=""></image>
      </view>
      <view class="my_header_logo">
        <view class="my_header_logobox">
          <image src="../../static/logo.png" mode="aspectFill"></image>
        </view>
        <text class="my_header_name">苏瑶</text>
      </view>
      <view class="my_header_info">
        <view class="my_header_info-box">
          <text class="my_header_info-title">
            ip地址
          </text>
          <text>{{ServiceIp}}</text>
        </view>
        <view class="my_header_info-box">
          <text class="my_header_info-title">
            注册码
          </text>
          <text>{{zhucheMa}}</text>
        </view>
      </view>
    </view>
    <view class="my-content">
      <view class="my-comtent_list">
        <view class="my-comtent_list-title">
          <uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
          <text>测试</text>
        </view>
        <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
      </view>
      <view class="my-comtent_list" @tap="h">
        <view class="my-comtent_list-title">
          <uni-icons class="icons" type="info" size="16" color="#666"></uni-icons>
          <text>关于我</text>
        </view>
        <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
      </view>
    </view>
    <input type="text" placeholder="服务器域名ip" v-model="a">
    <input type="text" v-model="e" placeholder="游戏Id">
    <input type="text" v-model="f" placeholder="插件token">
    <button @click="jk">提交</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        a: '',
        e: '',
        f: '',
        ServiceIp: getApp().globalData.ServiceIp !== '' ? '121.36.98.174' : '无',
        zhucheMa: getApp().globalData.zhucheMa !== '' ? 1 : '未填写'
      }
    },
    onReady() {

    },
    methods: {
      jk() {
        getApp().globalData.ServiceIp = this.a
        getApp().globalData.Plugins = this.f
        getApp().globalData.Switch = this.e
        uni.showToast({
          title: '提交成功',
          icon: 'success'
        })
      },
      h() {
        uni.navigateTo({
          url: '/pages/user/guanyuwo'
        })
      }
    }
  };
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
      filter: blur(8px);
      opacity: 0.3;

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
</style>
