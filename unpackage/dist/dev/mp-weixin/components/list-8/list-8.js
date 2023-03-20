"use strict";
const common_vendor = require("../../common/vendor.js");
const common_Getapp = require("../../common/Getapp.js");
const _sfc_main = {
  __name: "list-8",
  props: {
    str: {
      type: String,
      required: true,
      default: ""
    }
  },
  setup(__props) {
    function CarryOut(str) {
      let date = str + " " + common_Getapp.Getapp.globa.UID;
      common_vendor.index.showLoading({
        title: "请求中",
        mask: true
      });
      if (!common_Getapp.Getapp.globa.copy && common_Getapp.Getapp.globa.zhucheMa == "-1") {
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
        a: common_vendor.o(($event) => CarryOut(__props.str))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-95c2f405"], ["__file", "E:/指令执行器/components/list-8/list-8.vue"]]);
wx.createComponent(Component);
