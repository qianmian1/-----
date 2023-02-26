"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  _easycom_uni_number_box2();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  _easycom_uni_number_box();
}
const _sfc_main = {
  __name: "list-4",
  setup(__props) {
    let text_2 = common_vendor.ref("命星等级");
    let vModelValu = common_vendor.ref(6);
    let a = "setConst";
    let UID = "@" + getApp().globalData.UID;
    let date = a + " " + vModelValu.value.toString() + " " + UID;
    let CarryOut = () => {
      common_vendor.index.showToast({
        title: "请求中",
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
        d: common_vendor.o((...args) => common_vendor.unref(CarryOut) && common_vendor.unref(CarryOut)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c9d32acc"], ["__file", "E:/指令执行器/components/list-4/list-4.vue"]]);
wx.createComponent(Component);
