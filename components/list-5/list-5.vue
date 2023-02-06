<template>
  <view class="box">
    <view class="my-content">
      <view class="my-comtent_list">
        <view class="my-comtent_list-title">
          <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
          <text>类型</text>
        </view>
        <view v-for="(item,index) in list" :key='index' @tap='yu(index)' class="text-box">
          <text :class="{ad:ad===index}" class="text">{{item}}</text>
        </view>
      </view>
    </view>
    <view class="btn-box">
      <button class="btn" @click="CarryOut">提交</button>
    </view>
  </view>
</template>

<script setup>
  import {
    ref,
    reactive,
    watch
  } from "vue";
  name: 'list-5'
  let ad = ref(0)
  let valuek = ref('all')
  let UID = '<' + '@' + getApp().globalData.UID + '>'
  let a = 'clear'

  let list = reactive(['全部', '武器', '圣遗物', '材料'])
  let yu = index => {
    ad.value = index
    console.log(index);
    if (ad.value === 0) {
      valuek.value = 'all'
    } else if (ad.value === 1) {
      valuek.value = 'wp'
    } else if (ad.value === 2) {
      valuek.value = 'art'
    } else {
      valuek.value = 'mat'
    }
  }
  let date = a + ' ' + valuek.value + ' ' + UID
  let CarryOut = () => {
    uni.showToast({
      title: '请求中',
      icon: 'none'
    })
    uni.request({
      url: 'https://' + getApp().globalData.ServiceIp + '/opencommand/api',
      method: "POST",
      data: {
        action: 'command',
        token: getApp().globalData.Plugins,
        data: date
      }
    }).then(res => {
      if (res.data.data) {
        uni.showToast({
          title: res.data.data,
          icon: 'none'
        })
      }
    })
  }
</script>

<style scoped lang="scss">
  .box {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #ffffff;

    .my-content {
      .my-comtent_list {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        margin-bottom: 10px;
        background-color: #ffffff;
        color: #333;
        font-size: 14px;

        .text-box {
          .text {
            &.ad {
              color: red;
            }
          }
        }

        .my-comtent_list-title {
          display: flex;
          align-items: center;


          .my-comtent_list-value {
            width: 50px;
            height: 50px;
            background-color: #f5f5f5;
            font-size: 15px;
          }

          .icons {
            margin-right: 5px;
          }
        }
      }
    }

    .btn-box {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: flex-end;

      .btn {
        background-color: skyblue;
        width: 200px;
        font-size: 14px;
        margin-top: 10px;
        font-family: 微软雅黑;
      }
    }
  }
</style>
