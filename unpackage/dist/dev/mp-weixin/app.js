"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/user/user.js";
  "./pages/login/login.js";
  "./pages/login/zhuce/zhuce.js";
  "./pages/login/yanzhenma.js";
  "./pages/user/guanyuwo.js";
  "./pages/index/index-tab.js";
  "./pages/index/index-swich.js";
}
const _sfc_main = {
  globalData: {
    ServiceIp: "xiaosu520.xyz",
    Plugins: "470683",
    zhucheMa: "",
    code: false,
    token: "",
    list: [],
    UID: "10012"
  },
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    common_vendor.index.setStorageSync("token", getApp().globalData.token);
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
