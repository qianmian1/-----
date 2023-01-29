"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_icons2 + _easycom_uni_number_box2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_number_box)();
}
const _sfc_main = {
  __name: "list-3",
  setup(__props) {
    let vModelValue = common_vendor.ref(1);
    let vModelValu = common_vendor.ref(90);
    let text_1 = common_vendor.ref("\u6570\u91CF");
    let text_2 = common_vendor.ref("\u7B49\u7EA7");
    let text = common_vendor.ref("\u602A\u7269");
    let value = common_vendor.ref("123");
    let valu = common_vendor.ref("");
    let a = "spawn";
    let UID = "<@" + getApp().globalData.UID + ">";
    let date = a + " " + valu.value + " x" + vModelValue.value.toString() + " lv" + vModelValu.value.toString() + " " + UID;
    let sw = () => {
      common_vendor.index.navigateTo({
        url: "/pages/index/index-tab?id=10"
      });
    };
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
    common_vendor.index.$on("update", function(data) {
      valu.value = data.value;
      value.value = data.text;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        b: common_vendor.t(common_vendor.unref(text)),
        c: common_vendor.t(common_vendor.unref(value)),
        d: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        e: common_vendor.o((...args) => common_vendor.unref(sw) && common_vendor.unref(sw)(...args)),
        f: common_vendor.t(common_vendor.unref(text_1)),
        g: common_vendor.o(($event) => common_vendor.isRef(vModelValue) ? vModelValue.value = $event : vModelValue = $event),
        h: common_vendor.p({
          max: 99999,
          min: 1,
          modelValue: common_vendor.unref(vModelValue)
        }),
        i: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        j: common_vendor.t(common_vendor.unref(text_2)),
        k: common_vendor.o(($event) => common_vendor.isRef(vModelValu) ? vModelValu.value = $event : vModelValu = $event),
        l: common_vendor.p({
          max: 99999,
          min: 1,
          modelValue: common_vendor.unref(vModelValu)
        }),
        m: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        n: common_vendor.o((...args) => common_vendor.unref(CarryOut) && common_vendor.unref(CarryOut)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b8e63b1"], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/components/list-3/list-3.vue"]]);
wx.createComponent(Component);
