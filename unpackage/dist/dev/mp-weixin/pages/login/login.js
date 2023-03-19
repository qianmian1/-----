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
  __name: "login",
  setup(__props) {
    let username = common_vendor.ref("");
    let password = common_vendor.ref("");
    let api = common_vendor.ref("login");
    let se = common_vendor.ref("password");
    let eye = common_vendor.ref("eye");
    function getto() {
      common_vendor.index.navigateTo({
        url: "/pages/login/zhuce/zhuce"
      });
    }
    function Si() {
      if (se.value == "password") {
        eye.value = "eye-slash";
        se.value = "text";
      } else {
        eye.value = "eye";
        se.value = "password";
      }
    }
    function login() {
      common_vendor.index.showLoading({
        title: "登录中",
        mask: true
      });
      if (username.value == "") {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "用户名不能为空",
          icon: "none"
        });
      } else if (password.value == "") {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "密码不能为空",
          icon: "none"
        });
      } else if (username.value != "" && password.value != "") {
        common_vendor.Es.callFunction({
          name: "user",
          data: {
            username: username.value,
            password: password.value,
            api: api.value
          }
        }).then((res) => {
          if (res.result.errorMessage) {
            common_vendor.index.showToast({
              title: res.result.errorMessage,
              icon: "error"
            });
            return;
          }
          common_Getapp.Getapp.setdata(res);
          common_vendor.index.setStorageSync("asstoken", res.result.asstoken);
          common_vendor.index.setStorageSync("assxtoken", res.result.assxtoken);
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "登录成功",
            icon: "success"
          });
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: "/pages/index/index"
            });
          }, 1600);
        }).catch((e) => {
          common_vendor.index.hideLoading();
          if (e.message == "密码错误") {
            common_vendor.index.showToast({
              title: "密码或账号错误",
              icon: "error"
            });
          }
          if (e.message == "用户不存在") {
            common_vendor.index.showToast({
              title: "用户不存在",
              icon: "error"
            });
          }
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(username),
        b: common_vendor.o(($event) => common_vendor.isRef(username) ? username.value = $event.detail.value : username = $event.detail.value),
        c: common_vendor.unref(se),
        d: common_vendor.unref(password),
        e: common_vendor.o(($event) => common_vendor.isRef(password) ? password.value = $event.detail.value : password = $event.detail.value),
        f: common_vendor.o(Si),
        g: common_vendor.p({
          type: common_vendor.unref(eye),
          size: "30px"
        }),
        h: common_vendor.o(getto),
        i: common_vendor.o(($event) => login())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
