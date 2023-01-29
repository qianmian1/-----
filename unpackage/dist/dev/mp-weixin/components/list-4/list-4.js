"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_number_box2 + _easycom_uni_icons2)();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "list-4",
  setup(__props) {
    let text_2 = common_vendor.ref("\u547D\u661F\u7B49\u7EA7");
    let vModelValu = common_vendor.ref(6);
    let a = "setConst";
    let UID = "<@" + getApp().globalData.UID + ">";
    let date = a + " " + vModelValu.value.toString() + " " + UID;
    let CarryOut = () => {
      console.log(date);
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
        a: common_vendor.t(common_vendor.unref(text_2)),
        b: common_vendor.o(($event) => common_vendor.isRef(vModelValu) ? vModelValu.value = $event : vModelValu = $event),
        c: common_vendor.p({
          max: 99999,
          min: 1,
          modelValue: common_vendor.unref(vModelValu)
        }),
        d: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        e: common_vendor.o((...args) => common_vendor.unref(CarryOut) && common_vendor.unref(CarryOut)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c9d32acc"], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/components/list-4/list-4.vue"]]);
wx.createComponent(Component);
