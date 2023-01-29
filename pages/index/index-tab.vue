<template>
  <view>
    <view class="container">
      <view class="box-bg">
        <view class="h">
          <!-- #ifndef MP-WEIXIN-->
          <!--  <view :style="{height:statusBarHeight+'px',position:'absolute'}" class="he"></view> -->
          <!-- #endif -->
          <!-- #ifndef APP-PLUS-->
          <view :style="{height:statusBarHeight+'px',position:'absolute'}" class="he"></view>
          <!-- #endif -->
        </view>
        <uni-nav-bar leftIcon="back" :rightText="Search" fixed="true" @clickLeft="back" @clickRight="cd">
          <view class="input-view">
            <uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
            <input confirm-type="search" class="nav-bar-input" v-model="search" type="text" placeholder="输入搜索关键词"
              @confirm="confirm" @focus="cd" />
          </view>
        </uni-nav-bar>
      </view>
    </view>
    <scroll-view scroll-y="true" class="scro">
      <view v-for="(item,index) in data.list" :key="index" @tap="fh(item)">
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
  // #ifndef MP-WEIXIN
  const MenuButtonBoundingClientRect = uni.getMenuButtonBoundingClientRect().height
  const statusBarHeight = ref(uni.getSystemInfoSync().statusBarHeight + MenuButtonBoundingClientRect)
  //#endif
  // //#ifndef APP-PLUS
  // const statusBarHeight = ref(uni.getSystemInfoSync().statusBarHeight)
  // //#endif
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
          Monster
          break
      }
    })

    setTimeout(() => {
      uni.hideLoading()
    }, 2500)
  })

  function cd() {
    if (Search.value === '搜索') {
      Search.value = '取消'
    } else {
      Search.value = '搜索'
      if (getApp().globalData.list.length !== 0) {
        data.list = getApp().globalData.list
      }
    }
  }

  function confirm() {
    data.Search = '取消'
    const s = new Set()
    // let i = 0
    // let qe = search.value + '1' + '1' + '1' + '1' + '1' + '1' + '1'
    // let y = true
    getApp().globalData.list = data.list
    data.list.forEach(item => {
      // i++
      try {
        if (item.text === search.value) {
          s.add(item)
          throw ('11221')
        }
      } catch (e) {}
      //else if (y === true) {
      //   for (; i < item.text.length;) {
      //     console.log(item.text[i]);
      //     if (item.text[i] === qe[i]) {
      //       console.log(111112);
      //       s.add(item)
      //       y = false
      //       return
      //     } else {
      //       return
      //     }
      //   }
      // }
    })
    let c = [...s]
    data.list = c
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


  $nav-height:30px;

  .box-bg {

    background-color: #F5F5F5;
    padding: 5px 0;
  }

  .h {

    .he {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
    }
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
