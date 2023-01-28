"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      ServiceIp: "",
      api: "Service",
      Plugins: "",
      Service: "\u670D\u52A1\u5668ip",
      Switch: "\u63D2\u4EF6token",
      Color1: "color: red;",
      Color2: "color: black;",
      ServiceIo: "ip\u6216\u57DF\u540D"
    };
  },
  onReady() {
    if (getApp().globalData.code === true) {
      common_vendor.index.showLoading({
        mask: true
      });
      this.login();
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 2e3);
    }
  },
  onLoad() {
  },
  methods: {
    yu() {
      this.Service = "\u670D\u52A1\u5668ip";
      this.api = "Service";
      this.Color1 = "color: red;";
      this.Switch = "\u63D2\u4EF6token";
      this.Color2 = "color: black;";
      this.ServiceIo = "ip\u6216\u57DF\u540D";
    },
    yi() {
      this.tu = "\u6CE8\u518C\u7801";
      this.api = "Player";
      this.Color1 = "color: black;";
      this.Color2 = "color: red;";
      this.Switch = "\u6E38\u620FUID";
      this.ServiceIo = "\u8BF7\u8F93\u5165\u6CE8\u518C\u7801\uFF08\u4E5F\u53EF\u4E0D\u586B\uFF09";
    },
    login() {
      if (getApp().globalData.code === false) {
        getApp().globalData.username = this.username;
        getApp().globalData.password = this.password;
        getApp().globalData.ServiceIp = this.ServiceIp;
        getApp().globalData.Plugins = this.Plugins;
        getApp().globalData.api = this.api;
        getApp().globalData.Switch = this.Switch;
        common_vendor.index.navigateTo({
          url: "/pages/login/yanzhenma"
        });
        return;
      }
      if (getApp().globalData.Switch === true) {
        common_vendor.Es.callFunction({
          name: "user",
          data: {
            username: getApp().globalData.username,
            password: getApp().globalData.password,
            ip: getApp().globalData.ServiceIp,
            Plugins: getApp().globalData.Plugins,
            api: getApp().globalData.api
          }
        }).then((res) => {
          if (res.result.code == 200) {
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u6CE8\u518C\u6210\u529F",
              icon: "success"
            });
            getApp().globalData.code = false;
            getApp().globalData.token = res.result.token;
            getApp().globalData.Plugins = res.result.Plugins;
            getApp().globalData.RandomNumber = res.result.RandomNumber;
            setTimeout(() => {
              common_vendor.index.redirectTo({
                url: "/pages/index/index"
              });
            }, 1e3);
          }
        }).catch((e) => {
          getApp().globalData.code = false;
          console.log(e.message);
          if (e.message === "\u7528\u6237\u5DF2\u88AB\u6CE8\u518C") {
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u7528\u6237\u5DF2\u88AB\u6CE8\u518C",
              icon: "error"
            });
            this.username = "";
          }
        });
      } else {
        common_vendor.Es.callFunction({
          name: "user",
          data: {
            username: getApp().globalData.username,
            password: getApp().globalData.password,
            zhucheMa: getApp().globalData.ServiceIp,
            UID: getApp().globalData.Plugins,
            api: getApp().globalData.api
          }
        }).then((res) => {
          if (res.result.code == 200) {
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u6CE8\u518C\u6210\u529F",
              icon: "success"
            });
            getApp().globalData.code = false;
            getApp().globalData.token = res.result.token;
            getApp().globalData.UID = res.result.UID;
            console.log(getApp().globalData.UID);
            if (res.result.plugins) {
              getApp().globalData.zhucheMa = res.result.zhucheMa;
              getApp().globalData.Plugins = res.result.Plugins;
              getApp().globalData.ServiceIp = res.result.ServiceIp;
            }
            common_vendor.index.redirectTo({
              url: "/pages/index/index"
            });
          }
        }).catch((e) => {
          getApp().globalData.code = false;
          if (e.message === "\u7528\u6237\u5DF2\u88AB\u6CE8\u518C") {
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u7528\u6237\u5DF2\u88AB\u6CE8\u518C",
              icon: "error"
            });
            this.username = "";
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.yu()),
    b: common_vendor.s($data.Color1),
    c: common_vendor.o(($event) => $options.yi()),
    d: common_vendor.s($data.Color2),
    e: $data.username,
    f: common_vendor.o(($event) => $data.username = $event.detail.value),
    g: $data.password,
    h: common_vendor.o(($event) => $data.password = $event.detail.value),
    i: common_vendor.t($data.ServiceIo),
    j: $data.ServiceIo,
    k: $data.ServiceIp,
    l: common_vendor.o(($event) => $data.ServiceIp = $event.detail.value),
    m: common_vendor.t($data.Switch),
    n: $data.Plugins,
    o: common_vendor.o(($event) => $data.Plugins = $event.detail.value),
    p: common_vendor.o(($event) => $options.login())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/login/zhuce/zhuce.vue"]]);
wx.createPage(MiniProgramPage);
