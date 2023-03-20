"use strict";
const common_vendor = require("../../common/vendor.js");
const common_Getapp = require("../../common/Getapp.js");
const _sfc_main = {
  __name: "token",
  setup(__props) {
    let ip = common_vendor.ref("");
    let uid = common_vendor.ref(common_Getapp.Getapp.globa.UID.replace(/@/g, ""));
    let sw = common_vendor.ref(false);
    let token = null;
    function gettoken() {
      common_vendor.index.showLoading({
        title: "请求中",
        mask: true
      });
      if (!sw.value) {
        common_vendor.index.request({
          url: "https://" + ip.value + "/opencommand/api",
          method: "POST",
          data: {
            action: "sendCode",
            data: Number(uid.value)
          }
        }).then((res) => {
          if (res.data.data == null) {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: "发送失败",
              icon: "error"
            });
            return;
          }
          console.log(res);
          common_vendor.index.hideLoading();
          console.log(res.data.data);
          token = res.data.data;
          sw.value = true;
        });
      } else {
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            icon: "error",
            title: "请求失败请重试"
          });
        }, 3e3);
        common_vendor.index.request({
          url: "https://" + ip.value + "/opencommand/api",
          method: "POST",
          data: {
            action: "verify",
            data: +uid.value,
            token
          }
        }).then((res) => {
          if (res.data.message == "Success") {
            common_vendor.index.hideLoading();
            common_Getapp.Getapp.globa.ServiceIp = ip.value;
            common_Getapp.Getapp.globa.Plugins = token;
            common_Getapp.Getapp.globa.zhucheMa = "1";
            common_Getapp.Getapp.globa.copy = true;
            common_vendor.index.showToast({
              title: "验证成功",
              icon: "success"
            });
            setTimeout(() => {
              common_vendor.index.redirectTo({
                url: "/pages/user/user"
              });
            }, 1600);
          } else {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: "验证失败",
              icon: "error"
            });
          }
        });
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(ip),
        b: common_vendor.o(($event) => common_vendor.isRef(ip) ? ip.value = $event.detail.value : ip = $event.detail.value),
        c: common_vendor.unref(sw)
      }, common_vendor.unref(sw) ? {
        d: common_vendor.unref(uid),
        e: common_vendor.o(($event) => common_vendor.isRef(uid) ? uid.value = $event.detail.value : uid = $event.detail.value)
      } : {}, {
        f: common_vendor.o(gettoken)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/pages/user/token.vue"]]);
wx.createPage(MiniProgramPage);
