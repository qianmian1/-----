<template>
  <view>
    <view class="box" catchtouchmove="true">
      <view class="list-box-flex" :style="c+v_right">
        <view class="list-box" :style="{height:height+'px'}">
          <view class="input-box">
            <input confirm-type="search" class="input" v-model="search" type="text" placeholder="输入搜索关键词"
              @confirm="confirm" />
          </view>
          <scroll-view scroll-y="true" class="scro" lower-threshold="100px" @scrolltolower="h()">
            <view v-for="(item,index) in data.list" :key="index">
              <view class=".box">
                <view>{{item.text}}</view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>

</template>

<script setup>
  import {
    reactive,
    ref
  } from "vue";
  name: "tab"
  const c = 'justify-content:'
  let search = ref(null)
  const props = defineProps({
    height: {
      type: Number,
      required: true,
      default: 300
    },
    v_right: {
      type: String,
      required: true,
      default: 'flex-end'
    }
  })
  let data = reactive({
    list: [{
        text: '你1'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      },
      {
        text: '你好'
      }
    ]
  })

  function confirm() {
    let c = []
    const text = new RegExp(search.value)
    getApp().globalData.list = data.list
    data.list.forEach((item, i) => {
      if (text.test(item.text)) {
        item.id = i
        c.push(item)
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
</script>

<style lang="scss" scoped>
  .box {
    .list-box-flex {
      width: 100%;
      display: flex;
      position: relative;
      background-color: $uni-bg-color-mask;

      .list-box {
        width: 50%;
        background-color: #f5f5f5f5;

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

        .scro {
          height: 90%;

          .box {
            margin: 20rpx;
            border-bottom: 1px solid #ccc;
            padding: 20rpx 0;
          }
        }
      }
    }
  }
</style>
