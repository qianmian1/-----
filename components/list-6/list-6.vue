<template>
  <view>
    <view class="box">
      <view class="my-content">
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>好感级别</text>
          </view>
          <uni-number-box @change="set" value="10"></uni-number-box>
        </view>
      </view>
    </view>
    <view class="btn-box">
      <button class="btn" @click="CarryOut">执行</button>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from "vue";
  import Getapp from "../../common/Getapp.js";
  name: "list-6";
  let num = ref("10");
  let str = "setfetterlevel";

  function set(value) {
    num.value = value.toString();
  }

  function CarryOut() {
    let date = str + " " + num.value + " " + Getapp.globa.UID;
    uni.showLoading({
      title: "请求中",
      mask: true,
    });
    if (Getapp.globa.copy && Getapp.globa.zhucheMa == "-1") {
      uni.setClipboardData({
        data: "/" + date,
        success: function() {
          uni.hideLoading();
          uni.showToast({
            title: "复制成功",
            icon: "success",
          });
        },
        fail: function() {
          uni.hideLoading();
          uni.showToast({
            title: "复制失败",
            icon: "error",
          });
        },
      });
      return;
    } else if (Getapp.globa.zhucheMa === '1') {
      date = date.replace(/@[0-9]+/, '')
      uni.request({
          url: "https://" + Getapp.globa.ServiceIp + "/opencommand/api",
          method: "POST",
          data: {
            action: "command",
            data: date,
            token: Getapp.globa.Plugins,
          },
        })
        .then((res) => {
          if (res.errMsg == "request:ok") {
            uni.hideLoading();
            uni.showToast({
              title: res.data,
              icon: "success",
            });
          } else {
            uni.hideLoading();
            uni.showToast({
              title: res.data,
              icon: "none",
            });
          }
        })
        .catch((e) => {
          uni.hideLoading();
          uni.showToast({
            title: "请求失败",
            icon: "none",
          });
        });
      return
    }
    uni
      .request({
        url: "https://" + Getapp.globa.ServiceIp + "/opencommand/api",
        method: "POST",
        data: {
          action: "command",
          token: Getapp.globa.Plugins,
          data: date,
        },
      })
      .then((res) => {
        if (res.data) {
          uni.hideLoading();
          uni.showToast({
            title: res.data,
            icon: "none",
          });
        }
      })
      .catch((e) => {
        uni.hideLoading();
        uni.showToast({
          title: "请求失败",
          icon: "none",
        });
      });
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
    box-shadow: 3px 4px 1px rgba(0, 0, 0, 0.2);

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
      font-family: 微软雅黑;
    }
  }
</style>
