<template>
  <view>
    <view class="box">
      <view class="my-content">
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>类型</text>
          </view>
          <view v-for="(item, index) in list" :key="index" @tap="set(index)" class="text-box">
            <text :class="{ ad: ad === index }" class="text">{{ item }}</text>
          </view>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>等级</text>
          </view>
          <uni-number-box @change="setnum" value="10" :max="15" :min="1"></uni-number-box>
          <view></view>
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
    reactive,
    ref
  } from "vue";
  import Getapp from "../../common/Getapp.js";
  name: "list-7";
  let list = reactive(["普攻", "战绩", "爆发"]);
  let ad = ref(0);
  let num = "10";
  let str = "n";

  function set(index) {
    ad.value = index;
    switch (index) {
      case 0:
        str = "n";
        break;
      case 1:
        str = "e";
        break;
      case 2:
        str = "q";
        break;
    }
  }

  function setnum(value) {
    num = value.toString();
  }
  let CarryOut = () => {
    let date = "talent" + " " + str + " " + num + " " + Getapp.globa.UID;
    uni.showLoading({
      title: "请求中",
      mask: true,
    });
    if (!Getapp.globa.copy && Getapp.globa.zhucheMa == "-1") {
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
  };
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
