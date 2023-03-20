<template>
  <view>
    <view class="box">
      <view class="my-content">
        <view class="my-comtent_list" @tap="sw">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>{{ text }}</text>
          </view>
          <text>{{ value }}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <text>{{ text_1 }}</text>
          </view>
          <uni-number-box :max="99999" :min="1" @change="upvm"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <text>{{ text_2 }}</text>
          </view>
          <uni-number-box :max="99999" :min="1" @change="upvmi"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
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
  let vModelValue = ref(1);
  let vModelValu = ref(1);
  let text_1 = ref("数量");
  let text_2 = ref("等级");
  let text = ref("怪物");
  let value = ref("丘丘人");
  let valu = ref("21010101");
  let a = "spawn";
  let upvm = (value) => {
    vModelValue.value = value;
  };
  let upvmi = (value) => {
    vModelValu.value = value;
  };
  let sw = () => {
    uni.navigateTo({
      url: "/pages/index/index-tab?id=10",
    });
  };

  let CarryOut = () => {
    let date =
      a +
      " " +
      valu.value +
      " " +
      "x" +
      vModelValue.value.toString() +
      " " +
      "lv" +
      vModelValu.value +
      " " +
      Getapp.globa.UID;
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
        if (res.data.data) {
          uni.hideLoading();
          uni.showToast({
            title: res.data.data,
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
  uni.$on("update", function(data) {
    valu.value = data.value;
    value.value = data.text;
  });
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
