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
    let UID = "@" + getApp().globalData.UID;
    let a = "clear";
    let list = common_vendor.reactive(["全部", "武器", "圣遗物", "材料"]);
    let yu = (index) => {
      ad.value = index;
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
    let CarryOut = () => {
      let date = a + " " + valuek.value + " " + UID;
      common_vendor.index.showLoading({
        title: "请求中",
        mask: true
      });
      if (getApp().globalData.copy && getApp().globalData.zhucheMa == "-1") {
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
      }
      common_vendor.index.request({
        url: "https://" + getApp().globalData.ServiceIp + "/opencommand/api",
        method: "POST",
        data: {
          action: "command",
          token: getApp().globalData.Plugins,
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-873d3217"], ["__file", "E:/指令执行器/components/list-5/list-5.vue"]]);
wx.createComponent(Component);
