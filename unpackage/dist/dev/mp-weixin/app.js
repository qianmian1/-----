"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
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
  globalData: {
    username: "",
    password: "",
    date: null,
    ServiceIp: "",
    Plugins: "",
    zhucheMa: "",
    code: false,
    list: [],
    UID: "",
    asstoken: "",
    assxtoken: "",
    name: "",
    img: "",
    copy: true
  },
  onLaunch: function() {
    console.log("App Launch");
    let token = common_vendor.index.getStorageSync("asstoken");
    if (!token) {
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    } else {
      common_vendor.index.showLoading({
        title: "登陆中",
        mask: true
      });
      common_vendor.Es.callFunction({
        name: "user",
        data: {
          api: "login_token",
          asstoken: common_vendor.index.getStorageSync("asstoken"),
          date: {
            api: true
          }
        }
      }).then((res) => {
        if (res.result == -1) {
          common_vendor.Es.callFunction({
            name: "user",
            data: {
              api: "login_token",
              assxtoken: common_vendor.index.getStorageSync("assxtoken"),
              date: {
                api: false
              }
            }
          }).then((res2) => {
            getApp().globalData.UID = res2.result.user.UID;
            getApp().globalData.Plugins = res2.result.user.token;
            getApp().globalData.ServiceIp = res2.result.user.ip;
            getApp().globalData.zhucheMa = res2.result.user.zhucema;
            getApp().globalData.asstoken = res2.result.asstoken;
            getApp().globalData.assxtoken = res2.result.assxtoken;
            getApp().globalData.name = res2.result.user.name;
            getApp().globalData.img = res2.result.user.img;
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: "登录成功",
              icon: "success"
            });
            setTimeout(() => {
              common_vendor.index.redirectTo({
                url: "/pages/index/index"
              });
            }, 1600);
          });
        } else if (res.result == -2) {
          common_vendor.index.showToast({
            title: "未登录",
            icon: "error",
            duration: 1600
          });
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: "/pages/login/login"
            });
          }, 1600);
        } else {
          getApp().globalData.UID = res.result.user.UID;
          getApp().globalData.Plugins = res.result.user.token;
          getApp().globalData.ServiceIp = res.result.user.ip;
          getApp().globalData.zhucheMa = res.result.user.zhucema;
          getApp().globalData.asstoken = res.result.asstoken;
          getApp().globalData.assxtoken = res.result.assxtoken;
          getApp().globalData.name = res.result.user.name;
          getApp().globalData.img = res.result.user.img;
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "登录成功",
            icon: "success"
          });
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: "/pages/index/index"
            });
          }, 1600);
        }
      });
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    common_vendor.index.setStorageSync("asstoken", getApp().globalData.asstoken);
    common_vendor.index.setStorageSync("assxtoken", getApp().globalData.assxtoken);
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
