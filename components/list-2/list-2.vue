<template>
  <view>
    <view class="box">
      <list-tab :list="list.a" :as="as" @taptab='Switch'></list-tab>
      <view class="my-content" v-show="show===0?true:false">
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>{{text}}</text>
          </view>
          <view v-for="(item,index) in list.j" :key='index' @tap='op(index)' class="text-box" v-show="as===0">
            <text :class="{ad:ad===index}" class="text">{{item}}</text>
          </view>
          <text v-show="as!==0">{{value}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red" v-show="as!==0"></uni-icons>
            <text>{{text_1}}</text>
          </view>
          <uni-number-box :max="99999" :min="1" v-show="aq===1" @change="upvModeValue"></uni-number-box>
          <switch @change='Switch2' color="#FFCC33" v-show="aq===0"></switch>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
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
    watch,
  } from "vue";
  name: "list-2"
  let show = ref(0)
  let text = ref('类型')
  let text_1 = ref('状态')
  let value = ref('godmode')
  let as = ref(0)
  let boo = ref('0')
  let aq = ref(0)
  let ad = ref(0)
  let a = 'setprop'
  let UID = '@' + getApp().globalData.UID
  let vModeValue = ref(1)
  let date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
  let list = reactive({
    a: [{
        value: '无敌/无限体力/无限能量/锚点解锁'
      },
      {
        value: '深渊解锁'
      },
      {
        value: '战令等级'
      },
      {
        value: '世界等级'
      },
      {
        value: '玩家等级'
      }
    ],
    j: ['无敌', '无限体力', '无限能量', '锚点解锁']
  })
  let upvModeValue = (value) => {
    vModeValue.value = value;
  }
  watch(ad, () => {
    if (ad.value === 0) {
      value.value = 'godmode'
      date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
    } else if (ad.value === 1) {
      value.value = 'nostmina'
      date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
    } else if (ad.value === 2) {
      value.value = 'unlimitedenergy'
      date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
    } else {
      value.value = 'unlockmap'
      date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
    }
  }, {
    immediate: true
  })
  let op = (index) => {
    ad.value = index
  }
  let Switch2 = (e) => {
    if (e.detail.value === true) {
      boo.value = '1'
      date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
    } else {
      boo.value = '0'
      date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
    }
  }
  let Switch = (index) => {
    as.value = index
    if (index === 1 || index === 2 || index === 3 || index === 4) {
      aq.value = 1
      switch (index) {
        case 1:
          text.value = '深渊'
          value.value = 'abyss'
          text_1.value = '层数'
          break
        case 2:
          text.value = '战令等级'
          value.value = 'bplevel'
          text_1.value = '等级'
          break
        case 3:
          text.value = '世界等级'
          value.value = 'worldlevel'
          text_1.value = '等级'
          break
        case 4:
          text.value = '玩家等级'
          value.value = 'player_level'
          text_1.value = '等级'
          break
      }
    } else {
      aq.value = 0
      text.value = '类型'
      value.value = 'godmode'
      text_1.value = '状态'
    }
  }
  let CarryOut = () => {
    if (as.value !== 0) {
      date = a + ' ' + value.value + ' ' + vModeValue.value.toString() + ' ' + UID
    } else {
      date = a + ' ' + value.value + ' ' + boo.value + ' ' + UID
    }
    uni.showLoading({
      title: '请求中',
      mask: true
    })
    if (getApp().globalData.copy && getApp().globalData.zhucheMa == '-1') {
      uni.setClipboardData({
        data: '/' + date,
        success: function() {
          uni.hideLoading()
          uni.showToast({
            title: '复制成功',
            icon: "success"
          })
        },
        fail: function() {
          uni.hideLoading()
          uni.showToast({
            title: '复制失败',
            icon: "error"
          })
        }
      })
      return
    }
    uni.request({
      url: 'https://' + getApp().globalData.ServiceIp + '/opencommand/api',
      method: "POST",
      data: {
        action: 'command',
        token: getApp().globalData.Plugins,
        data: date
      }
    }).then(res => {
      if (res.data !== '') {
        uni.hideLoading()
        uni.showToast({
          title: res.data,
          icon: 'success'
        })
      } else {
        uni.hideLoading()
        uni.showToast({
          title: '执行成功',
          icon: 'success'
        })
      }
    }).catch(e => {
      uni.hideLoading()
      uni.showToast({
        title: '请求失败',
        icon: 'none'
      })
    })
  }
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
    box-shadow: 3px 4px 1px rgba(0, 0, 0, .2);

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
    }
  }
</style>
