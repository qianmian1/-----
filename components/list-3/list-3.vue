<template>
  <view>
    <view class="box">
      <view class="my-content">
        <view class="my-comtent_list " @tap='sw'>
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>{{text}}</text>
          </view>
          <text>{{value}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <text>{{text_1}}</text>
          </view>
          <uni-number-box :max="99999" :min="1" v-model="vModelValue"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <text>{{text_2}}</text>
          </view>
          <uni-number-box :max="99999" :min="1" v-model="vModelValu"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
      </view>
      <view class="btn-box">
        <button class="btn" @click="CarryOut">提交</button>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref,
    reactive,
    watch
  } from "vue";
  let vModelValue = ref(1)
  let vModelValu = ref(90)
  let text_1 = ref('数量')
  let text_2 = ref('等级')
  let text = ref('怪物')
  let value = ref('123')
  let valu = ref('')
  let a = 'spawn'
  let UID = '@' + getApp().globalData.UID
  let date = a + ' ' + valu.value + ' ' + 'x' + vModelValue.value.toString() + ' ' + 'lv' + vModelValu.value
    .toString() + ' ' + UID
  let sw = () => {
    uni.navigateTo({
      url: '/pages/index/index-tab?id=10'
    })
  }
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
  uni.$on('update', function(data) {
    valu.value = data.value
    value.value = data.text
  })
</script>

<style lang="scss" scoped>
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
