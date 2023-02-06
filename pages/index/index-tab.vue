<template>
  <view>
    <view class="box1">
      <view class="input-box">
        <input confirm-type="search" class="input" v-model="search" type="text" placeholder="输入搜索关键词"
          @confirm="confirm" />
      </view>
      <view class="box-txt" @tap="cd">
        <text>重置</text>
      </view>
    </view>
    <scroll-view scroll-y="true" class="scro" lower-threshold="100px" @scrolltolower="h()">
      <view v-for="item in data.list" :key="item.id" @tap="fh(item)">
        <view class=".box">
          <view>{{item.text}}</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script setup>
  import {
    ref,
    reactive,
    watch,
  } from "vue";
  import {
    onLoad
  } from '@dcloudio/uni-app';
  let Search = ref('搜索')
  let data = reactive({
    list: []
  })
  let search = ref('')
  onLoad(option => {
    const id = ref(option.id)
    uni.showLoading({
      title: '加载中',
      mask: true
    })
    uniCloud.callFunction({
      name: 'list-tab',
      data: {
        tab: 'commandlist'
      }
    }).then(res => {
      switch (id.value) {
        case '0':
          data.list = res.result.wupinList

          break
        case '2':
          data.list = res.result.commandList

          break
        case '8':
          data.list = res.result.mingxingList

          break
        case '1':
          data.list = res.result.shengyiwu

          break
        case '3':
          data.list = res.result.wuqi
          break
        case '10':
          data.list = res.result.Monster
          break
      }
    })

    setTimeout(() => {
      uni.hideLoading()
    }, 2500)
  })

  function cd() {
    data.list = getApp().globalData.list
    search.value = ''
    uni.showToast({
      title: '已成功重置',
      icon: 'success'
    })
  }
  let h = (item) => {
    console.log('被触发');
  }

  function confirm() {
    let c = []
    const text = new RegExp(search.value)
    getApp().globalData.list = data.list
    data.list.forEach((item, i) => {
      if (text.test(item.text)) {
        item.id = i
        c.push(item)
        // console.log(c);
        data.list = c

      } else {
        if (c !== getApp().globalData.list.length && c.length != 0) {
          uni.showToast({
            title: '共搜索' + data.list.length + '条内容'
          })
        } else if (i == c.length) {
          uni.showToast({
            title: '未找到该内容',
            icon: "error"
          })
        }
      }
    })
  }

  function back() {
    uni.switchTab({
      url: '/pages/index/index'
    })
  }

  function fh(item) {
    uni.switchTab({
      url: '/pages/index/index', //+ item.vlue + '&key=' + item.text.toString()
    })
    uni.$emit('update', {
      text: item.text,
      value: item.vaue
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

  .box1 {
    display: flex;
    height: 30px;
    align-items: center;

    .box-txt {
      width: 35px;
      height: 50%;
      background-color: skyblue;
      font-size: 12px;
    }

    .input-box {
      border: 5px solid #ffffff;
      border-radius: 5px;
      margin: 5px 5px;

      .input {
        background-color: #ffffff;
        margin: auto;
        font-size: 12px;
      }
    }
  }

  $nav-height:30px;

  .box-bg {

    background-color: #F5F5F5;
    padding: 5px 0;
  }

  .h {

    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }


  .city {
    /* #ifndef APP-PLUS-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 160rpx;
    margin-left: 4px;
  }

  .input-view {
    /* #ifndef APP-PLUS-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    width: 500rpx;
    flex: 1;
    background-color: #f8f8f8;
    height: $nav-height;
    border-radius: 15px;
    padding: 0 15px;
    flex-wrap: nowrap;
    margin: 7px 0;
    line-height: $nav-height;
  }

  .input-uni-icon {
    line-height: $nav-height;
  }

  .nav-bar-input {
    height: $nav-height;
    line-height: $nav-height;
    /* #ifdef APP-PLUS-NVUE */
    width: 370rpx;
    /* #endif */
    padding: 0 5px;
    font-size: 12px;
    background-color: #f8f8f8;
  }
</style>
