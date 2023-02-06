"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "\u9A8C\u8BC1\u7801",
      second: 60,
      hi: "\u53D1\u9001\u9A8C\u8BC1\u7801",
      showText: true,
      code: "",
      codeId: "",
      statusJson: {
        "-5": "\u9A8C\u8BC1\u5931\u8D25",
        "-4": "\u9A8C\u8BC1\u7801\u5DF2\u4F7F\u7528",
        "-3": "\u9A8C\u8BC1\u7801\u5DF2\u5931\u6548",
        "-2": "\u5F53\u524D\u90AE\u7BB1\u672A\u53D1\u9001\u9A8C\u8BC1\u7801",
        "-1": "\u8FD8\u672A\u53D1\u9001\u9A8C\u8BC1\u7801",
        "0": "\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E",
        "1": "\u9A8C\u8BC1\u6210\u529F"
      }
    };
  },
  onLoad(option) {
    this.getCode(option.username);
  },
  methods: {
    testSend(username) {
      common_vendor.index.showLoading({
        mask: true
      });
      common_vendor.Es.callFunction({
        name: "emailCode",
        data: {
          method: "sendCode",
          email: username
        }
      }).then((res) => {
        common_vendor.index.hideLoading();
        if (res.result.status) {
          this.codeId = res.result.id;
          common_vendor.index.showToast({
            duration: 1500,
            icon: "none",
            title: "\u53D1\u9001\u6210\u529F",
            mask: true
          });
        } else {
          common_vendor.index.showToast({
            duration: 1500,
            title: "\u53D1\u9001\u5931\u8D25",
            mask: true,
            icon: "none"
          });
        }
      });
    },
    testValidate(username) {
      if (!this.code) {
        common_vendor.index.showToast({
          duration: 1500,
          title: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
          mask: true,
          icon: "none"
        });
        return;
      }
      common_vendor.index.showLoading({
        mask: true
      });
      common_vendor.Es.callFunction({
        name: "emailCode",
        data: {
          code: this.code,
          method: "validateCode",
          email: username,
          codeId: this.codeId,
          effectiveTime: 300
        }
      }).then((res) => {
        common_vendor.index.hideLoading();
        switch (res.result.status) {
          case 1:
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u9A8C\u8BC1\u6210\u529F",
              mask: true,
              icon: "none"
            });
            getApp().globalData.code = true;
            common_vendor.index.redirectTo({
              url: "/pages/login/zhuce/zhuce"
            });
            break;
          case 0:
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u9A8C\u8BC1\u7801",
              mask: true,
              icon: "none"
            });
            break;
          case -3:
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u9A8C\u8BC1\u7801\u5DF2\u5931\u6548",
              mask: true,
              icon: "none"
            });
            break;
          case -4:
            common_vendor.index.showToast({
              duration: 1500,
              title: "\u9A8C\u8BC1\u7801\u5DF2\u4F7F\u7528",
              mask: true,
              icon: "none"
            });
        }
      }).catch((e) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "\u53D1\u9001\u5931\u8D25",
          icon: "error"
        });
      });
    },
    getCode(username) {
      let that = this;
      that.testSend(username);
      let interval = setInterval(() => {
        that.showText = false;
        let times = that.second - 1;
        that.second = times;
      }, 1e3);
      setTimeout(() => {
        clearInterval(interval);
        that.hi = "\u91CD\u65B0\u53D1\u9001";
        that.second = 60;
        that.showText = true;
      }, 6e4);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_vendor.t($data.title),
    d: common_assets._imports_2,
    e: $data.code,
    f: common_vendor.o(($event) => $data.code = $event.detail.value),
    g: $data.showText
  }, $data.showText ? {
    h: common_vendor.t($data.hi),
    i: common_vendor.o((...args) => $options.getCode && $options.getCode(...args))
  } : {
    j: common_vendor.t($data.second)
  }, {
    k: common_vendor.o(($event) => $options.testValidate(_ctx.option.username))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/login/yanzhenma.vue"]]);
wx.createPage(MiniProgramPage);
