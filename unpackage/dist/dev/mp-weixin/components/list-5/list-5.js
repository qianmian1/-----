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
  __name: "list-5",
  setup(__props) {
    let ad = common_vendor.ref(0);
    let valuek = common_vendor.ref("all");
    let UID = "<@" + getApp().globalData.UID + ">";
    let a = "clear";
    let list = common_vendor.reactive(["\u5168\u90E8", "\u6B66\u5668", "\u5723\u9057\u7269", "\u6750\u6599"]);
    let yu = (index) => {
      ad.value = index;
      console.log(index);
      if (ad.value === 0) {
        valuek.value = "all";
      } else if (ad.value === 1) {
        valuek.value = "wp";
      } else if (ad.value === 2) {
        valuek.value = "art";
      } else {
        valuek.value = "mat";
      }
    };
    let date = a + " " + valuek.value + " " + UID;
    let CarryOut = () => {
      common_vendor.index.showToast({
        title: "\u8BF7\u6C42\u4E2D",
        icon: "none"
      });
      common_vendor.index.request({
        url: "https://" + getApp().globalData.ServiceIp + "/opencommand/api",
        method: "POST",
        data: {
          action: "command",
          token: getApp().globalData.Plugins,
          data: date
        }
      }).then((res) => {
        if (res.data.data) {
          common_vendor.index.showToast({
            title: res.data.data,
            icon: "none"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        b: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.unref(ad) === index ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => common_vendor.unref(yu)(index), index)
          };
        }),
        c: common_vendor.o((...args) => common_vendor.unref(CarryOut) && common_vendor.unref(CarryOut)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-873d3217"], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/components/list-5/list-5.vue"]]);
wx.createComponent(Component);
