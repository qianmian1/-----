"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const common_Getapp = require("./common/Getapp.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/user/user.js";
  "./pages/login/login.js";
  "./pages/login/zhuce/zhuce.js";
  "./pages/login/yanzhenma.js";
  "./pages/user/guanyuwo.js";
  "./pages/index/index-tab.js";
  "./pages/index/index-swich.js";
  "./pages/user/token.js";
}
const _sfc_main = {
  onLaunch: function() {
    function req(asstoken = common_vendor.index.getStorageSync("asstoken")) {
      common_vendor.index.showLoading({
        title: "登录中",
        mask: true
      });
      let set = null;
      set = setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "请求超时",
          duration: 1600,
          icon: "none"
        });
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
        return;
      }, 5e3);
      common_vendor.Es.callFunction({
        name: "user",
        data: {
          api: "login_token",
          asstoken
        }
      }).then((res) => {
        if (res.result === -1 && getApp().globalData.cheng === 0) {
          common_vendor.index.hideLoading();
          clearTimeout(set);
          getApp().globalData.cheng = 1;
          req(token);
          return;
        } else if (res.result === -1 && getApp().globalData.cheng === 1) {
          common_vendor.index.hideLoading();
          clearTimeout(set);
          common_vendor.index.showToast({
            title: "登陆失效，请重新登陆",
            duration: 1600,
            icon: "none"
          });
          common_vendor.index.reLaunch({
            url: "/pages/login/login"
          });
          return;
        } else if (res.result.err) {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "请求出错，请联系开发者",
            duration: 1600,
            icon: "none"
          });
          common_vendor.index.reLaunch({
            url: "/pages/login/login"
          });
          return;
        }
        common_vendor.index.hideLoading();
        clearTimeout(set);
        common_Getapp.Getapp.setdata(res);
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      });
    }
    let token = common_vendor.index.getStorageSync("assxtoken");
    if (!token) {
      common_vendor.index.showToast({
        title: "未登陆",
        icon: "none",
        duration: 1600
      });
      setTimeout(() => {
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      }, 1600);
      return;
    }
    req();
  },
  onShow: function() {
  },
  onHide: function() {
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
