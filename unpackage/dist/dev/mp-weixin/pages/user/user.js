"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    let ServiceIp = common_vendor.ref(getApp().globalData.ServiceIp);
    let zhucheMa = common_vendor.ref(getApp().globalData.zhucheMa);
    let name = common_vendor.ref("");
    let img = common_vendor.ref(getApp().globalData.img);
    function swct(e) {
      if (e.detail.value) {
        getApp().globalData.copy = true;
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/user/token"
        });
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(img),
        b: common_vendor.t(common_vendor.unref(name)),
        c: common_vendor.t(common_vendor.unref(ServiceIp)),
        d: common_vendor.t(common_vendor.unref(zhucheMa)),
        e: common_vendor.unref(zhucheMa) === "-1" ? true : false
      }, (common_vendor.unref(zhucheMa) === "-1" ? true : false) ? {
        f: common_vendor.p({
          type: "contact",
          size: "16",
          color: "#666"
        }),
        g: common_vendor.o(swct)
      } : {}, {
        h: common_vendor.p({
          type: "info",
          size: "16",
          color: "#666"
        }),
        i: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        j: common_vendor.o((...args) => _ctx.h && _ctx.h(...args))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
