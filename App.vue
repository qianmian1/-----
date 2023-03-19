<script>
  import Getapp from "./common/Getapp.js";
  export default {
    globalData: {
      username: "",
      password: "",
      date: null,
      ServiceIp: "",
      Plugins: "",
      zhucheMa: "-1",
      code: false,
      list: [],
      UID: "",
      asstoken: "",
      assxtoken: "",
      name: "",
      img: "",
      copy: false,
      cheng: 0,
    },
    onLaunch: function() {


      function req(asstoken = uni.getStorageSync("asstoken")) {
        uni.showLoading({
          title: "登录中",
          mask: true,
        });

        let set = null;
        set = setTimeout(() => {
          uni.hideLoading();
          uni.showToast({
            title: "请求超时",
            duration: 1600,
            icon: "none",
          });
          uni.reLaunch({
            url: "/pages/login/login",
          });
          return;
        }, 5000);
        uniCloud
          .callFunction({
            name: "user",
            data: {
              api: "login_token",
              asstoken,
            },
          })
          .then((res) => {
            if (res.result === -1 && getApp().globalData.cheng === 0) {
              uni.hideLoading();
              clearTimeout(set);
              getApp().globalData.cheng = 1;
              req(token);
              return;
            } else if (res.result === -1 && getApp().globalData.cheng === 1) {
              uni.hideLoading();
              clearTimeout(set);
              uni.showToast({
                title: "登陆失效，请重新登陆",
                duration: 1600,
                icon: "none",
              });
              uni.reLaunch({
                url: "/pages/login/login",
              });
              return;
            } else if (res.result.err) {
              uni.hideLoading();
              uni.showToast({
                title: "请求出错，请联系开发者",
                duration: 1600,
                icon: "none",
              });
              uni.reLaunch({
                url: "/pages/login/login",
              });
              return;
            }
            uni.hideLoading();
            clearTimeout(set);
            Getapp.setdata(res);

            uni.switchTab({
              url: "/pages/index/index",
            });
          });
      }
      let token = uni.getStorageSync("assxtoken");
      if (!token) {
        uni.showToast({
          title: "未登陆",
          icon: "none",
          duration: 1600
        });
        setTimeout(() => {
          uni.reLaunch({
            url: "/pages/login/login",
          });
        }, 1600)
        return;
      }
      req();

    },
    onShow: function() {},
    onHide: function() {},
  };
</script>

<style>
  /*每个页面公共css */
  @import "./static/iconfont.css";
</style>
