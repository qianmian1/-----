"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      api: "login"
    };
  },
  methods: {
    login() {
      if (this.username == "") {
        common_vendor.index.showToast({
          title: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",
          icon: "none"
        });
      } else if (this.password == "") {
        common_vendor.index.showToast({
          title: "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
          icon: "none"
        });
      } else if (this.username != "" && this.password != "") {
        common_vendor.Es.callFunction({
          name: "user",
          data: {
            username: this.username,
            password: this.password,
            api: this.api
          }
        }).then((res) => {
          if (res.result.code === 200 || res.result.code === 201) {
            common_vendor.index.showToast({
              title: "\u767B\u9646\u6210\u529F",
              icon: "success"
            });
            if (!res.result.RandomNumber) {
              this.$store.dispatch("ayuncupdatatoken", {
                token: res.result.token
              });
              this.$store.dispatch("ayuncUpDataServiceIp", {
                ServiceIp: res.result.ServiceIp
              });
            } else {
              this.$store.dispatch("ayuncupdatatoken", {
                token: res.result.token
              });
              this.$store.dispatch("ayuncUpDataServiceIp", {
                ServiceIp: res.result.ServiceIp
              });
              this.$store.dispatch("ayuncUpDataRandomNumber", {
                RandomNumber: res.result.RandomNumber
              });
            }
            setTimeout(() => {
              common_vendor.index.redirectTo({
                url: "/pages/index/index"
              });
            }, 1e3);
          }
        }).catch((e) => {
          if (e.message == "\u5BC6\u7801\u9519\u8BEF") {
            common_vendor.index.showToast({
              title: "\u5BC6\u7801\u6216\u8D26\u53F7\u9519\u8BEF",
              icon: "error"
            });
          }
          if (e.message == "\u7528\u6237\u4E0D\u5B58\u5728") {
            common_vendor.index.showToast({
              title: "\u7528\u6237\u4E0D\u5B58\u5728",
              icon: "error"
            });
          }
        });
      }
    },
    zhuce() {
      common_vendor.index.redirectTo({
        url: "/pages/login/zhuce/zhuce"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o(($event) => $options.zhuce()),
    f: common_vendor.o(($event) => $options.login())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
