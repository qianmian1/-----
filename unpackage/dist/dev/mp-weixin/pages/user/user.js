"use strict";
const common_vendor = require("../../common/vendor.js");
const common_Getapp = require("../../common/Getapp.js");
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
    let ServiceIp = common_vendor.ref(common_Getapp.Getapp.globa.ServiceIp);
    let zhucheMa = common_vendor.ref(common_Getapp.Getapp.globa.zhucheMa);
    let name = common_vendor.ref("");
    let img = common_vendor.ref(common_Getapp.Getapp.globa.img);
    common_vendor.index.request({
      url: common_Getapp.Getapp.globa.name
    }).then((res) => {
      name.value = res.data;
    });
    function h() {
      common_vendor.index.showToast({
        title: "还没想好怎么做",
        icon: "none"
      });
    }
    function loginOut() {
      common_vendor.index.removeStorageSync("asstoken");
      common_vendor.index.removeStorageSync("assxtoken");
      common_Getapp.Getapp.globa.code = false;
      common_vendor.index.showToast({
        title: "退出成功",
        icon: "success",
        duration: 1600
      });
      setTimeout(() => {
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      }, 1600);
    }
    function swct(e) {
      if (e.detail.value) {
        common_Getapp.Getapp.globa.copy = false;
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
        j: common_vendor.o(h),
        k: common_vendor.p({
          type: "info",
          size: "16",
          color: "#666"
        }),
        l: common_vendor.o(loginOut)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
