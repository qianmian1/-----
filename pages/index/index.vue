<template>
  <view>
    <view class="box">
      <view class="box-text-1">
        <text class="text">{{value}}</text>
      </view>
      <text class="box-text" @tap="fh">切换命令</text>
    </view>
    <view v-if="value==='give'">
      <list></list>
    </view>
    <view v-if="value==='setprop'">
      <list-2></list-2>
    </view>
    <view v-if="value==='spawn'">
      <list-3></list-3>
    </view>
    <view v-if="value==='setConst'">
      <list-4></list-4>
    </view>
  </view>

</template>

<script setup>
  import {
    ref,
    reactive,
    watch,
  } from "vue";
  let value = ref('spawn')

  function fh() {
    uni.navigateTo({
      url: '/pages/index/index-swich'
    })
  }
  uni.$on('updata', (date) => {
    value.value = date.value
  })
</script>

<style lang="scss" scoped>
  page {
    background-color: #f5f5f5;
  }

  .box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 0;

    .box-text-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
      margin-bottom: 0px;
      align-self: center;
      background-color: #f5f5f5;
      width: 50px;
      height: 20px;
      margin-right: 5px;
      border-radius: 3px;

      .text {
        font-size: 15px;
        color: skyblue;
      }
    }

    .box-text {
      margin-right: 10px;
      font-size: 15px;
    }
  }
</style>
