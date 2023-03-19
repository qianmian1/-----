<template>
  <view>
    <view class=".box"> 该命令无参数 </view>
    <view class="btn-box">
      <button class="btn" @click="CarryOut(str)">执行</button>
    </view>
  </view>
</template>

<script setup>
  import Getapp from "../../common/Getapp.js";
  name: "list-8";
  const props = defineProps({
    str: {
      type: String,
      required: true,
      default: "",
    },
  });

  function CarryOut(str) {
    let date = str + " " + Getapp.globa.UID;
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
    uni.request({
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
    height: 134px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 3px 4px 1px rgba(0, 0, 0, 0.2);
    text-align: center;
    line-height: 134px;
    font-size: 20px;
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
