<template>
  <view>
    <scroll-view scroll-y="true" class="scro">
      <view v-for="(item,index) in date.list" :key="index" @tap="gh(item)">
        <view class="box">
          <view>{{item.text}}</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
  import {
    reactive
  } from "vue";
  import {
    onLoad
  } from '@dcloudio/uni-app';
  let date = reactive({
    list: []
  })
  onLoad(() => {
    uniCloud.callFunction({
      name: 'user',
      data: {
        api: 'list-tab',
        tab: 'tab'
      }
    }).then((res) => {
      date.list = res.result.data
    })
  })

  function gh(item) {
    uni.$emit('updata', {
      value: item.text
    })
    uni.switchTab({
      url: '/pages/index/index'
    })
  }
</script>

<style lang="scss">
  .scro {
    height: 100%;
    position: fixed;

    .box {
      margin: 20rpx;
      border-bottom: 1px solid #ccc;
      padding: 20rpx 0;
    }
  }
</style>
