"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "验证码",
      //填写logo或者app名称，也可以用：欢迎回来，看您需求
      second: 60,
      //默认60秒
      hi: "发送验证码",
      showText: true,
      //判断短信是否发送
      code: "",
      //验证码
      codeId: "",
      statusJson: {
        "-5": "验证失败",
        "-4": "验证码已使用",
        "-3": "验证码已失效",
        "-2": "当前邮箱未发送验证码",
        "-1": "还未发送验证码",
        "0": "验证码不正确",
        "1": "验证成功"
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
            title: "发送成功",
            mask: true
          });
        } else {
          common_vendor.index.showToast({
            duration: 1500,
            title: "发送失败",
            mask: true,
            icon: "none"
          });
        }
      });
    },
    //当前登录按钮操作
    testValidate(username) {
      if (!this.code) {
        common_vendor.index.showToast({
          duration: 1500,
          title: "请输入验证码",
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
              title: "验证成功",
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
              title: "验证失败，请检查验证码",
              mask: true,
              icon: "none"
            });
            break;
          case -3:
            common_vendor.index.showToast({
              duration: 1500,
              title: "验证码已失效",
              mask: true,
              icon: "none"
            });
            break;
          case -4:
            common_vendor.index.showToast({
              duration: 1500,
              title: "验证码已使用",
              mask: true,
              icon: "none"
            });
        }
      }).catch((e) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "发送失败",
          icon: "error"
        });
      });
    },
    //获取短信验证码
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
        that.hi = "重新发送";
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/指令执行器/pages/login/yanzhenma.vue"]]);
wx.createPage(MiniProgramPage);
