"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      a: "",
      e: "",
      f: "",
      ServiceIp: getApp().globalData.ServiceIp !== "" ? "121.36.98.174" : "无",
      zhucheMa: getApp().globalData.zhucheMa !== "" ? 1 : "未填写"
    };
  },
  onReady() {
  },
  methods: {
    jk() {
      getApp().globalData.ServiceIp = this.a;
      getApp().globalData.Plugins = this.f;
      getApp().globalData.Switch = this.e;
      common_vendor.index.showToast({
        title: "提交成功",
        icon: "success"
      });
    },
    h() {
      common_vendor.index.navigateTo({
        url: "/pages/user/guanyuwo"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.ServiceIp),
    b: common_vendor.t($data.zhucheMa),
    c: common_vendor.p({
      type: "contact",
      size: "16",
      color: "#666"
    }),
    d: common_vendor.p({
      type: "arrowright",
      size: "16",
      color: "#666"
    }),
    e: common_vendor.p({
      type: "info",
      size: "16",
      color: "#666"
    }),
    f: common_vendor.p({
      type: "arrowright",
      size: "16",
      color: "#666"
    }),
    g: common_vendor.o((...args) => $options.h && $options.h(...args)),
    h: $data.a,
    i: common_vendor.o(($event) => $data.a = $event.detail.value),
    j: $data.e,
    k: common_vendor.o(($event) => $data.e = $event.detail.value),
    l: $data.f,
    m: common_vendor.o(($event) => $data.f = $event.detail.value),
    n: common_vendor.o((...args) => $options.jk && $options.jk(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/指令执行器/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
