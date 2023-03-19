"use strict";
const common_vendor = require("../../common/vendor.js");
const common_Getapp = require("../../common/Getapp.js");
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
  __name: "list-6",
  setup(__props) {
    let num = common_vendor.ref("10");
    let str = "setfetterlevel";
    function set(value) {
      num.value = value.toString();
    }
    function CarryOut() {
      let date = str + " " + num.value + " " + common_Getapp.Getapp.globa.UID;
      common_vendor.index.showLoading({
        title: "请求中",
        mask: true
      });
      if (common_Getapp.Getapp.globa.copy && common_Getapp.Getapp.globa.zhucheMa == "-1") {
        common_vendor.index.setClipboardData({
          data: "/" + date,
          success: function() {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: "复制成功",
              icon: "success"
            });
          },
          fail: function() {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: "复制失败",
              icon: "error"
            });
          }
        });
        return;
      } else if (common_Getapp.Getapp.globa.zhucheMa === "1") {
        date = date.replace(/@[0-9]+/, "");
        common_vendor.index.request({
          url: "https://" + common_Getapp.Getapp.globa.ServiceIp + "/opencommand/api",
          method: "POST",
          data: {
            action: "command",
            data: date,
            token: common_Getapp.Getapp.globa.Plugins
          }
        }).then((res) => {
          if (res.errMsg == "request:ok") {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: res.data,
              icon: "success"
            });
          } else {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: res.data,
              icon: "none"
            });
          }
        }).catch((e) => {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "请求失败",
            icon: "none"
          });
        });
        return;
      }
      common_vendor.index.request({
        url: "https://" + common_Getapp.Getapp.globa.ServiceIp + "/opencommand/api",
        method: "POST",
        data: {
          action: "command",
          token: common_Getapp.Getapp.globa.Plugins,
          data: date
        }
      }).then((res) => {
        if (res.data) {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: res.data,
            icon: "none"
          });
        }
      }).catch((e) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "请求失败",
          icon: "none"
        });
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        b: common_vendor.o(set),
        c: common_vendor.p({
          value: "10"
        }),
        d: common_vendor.o(CarryOut)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fb5c6125"], ["__file", "E:/指令执行器/components/list-6/list-6.vue"]]);
wx.createComponent(Component);
