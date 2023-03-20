"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_Getapp = require("../../../common/Getapp.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const _sfc_main = {
  __name: "zhuce",
  setup(__props) {
    let username = common_vendor.ref("");
    let password = common_vendor.ref("");
    let color = common_vendor.ref(0);
    let text = common_vendor.ref("IP地址或域名");
    let ip = common_vendor.ref("");
    let text_1 = common_vendor.ref("插件token");
    let token = common_vendor.ref("");
    let text_2 = common_vendor.ref("游戏UID");
    let UID = common_vendor.ref("");
    let api = common_vendor.ref("Service");
    common_vendor.ref(common_Getapp.Getapp.globa.code);
    let data = common_vendor.reactive({
      list: [
        {
          name: "服主注册"
        },
        {
          name: "玩家注册"
        }
      ],
      styles: {
        color: "#ffffff",
        background: "rgba(255, 255, 255, .1)",
        borderColor: "#ffffff"
      }
    });
    common_vendor.onLoad(() => {
      if (common_Getapp.Getapp.globa.code) {
        login();
      }
    });
    let chack = (index) => {
      color.value = index;
      if (index === 1) {
        api.value = "Player";
        text_1.value = "邀请码,也可不填";
      } else {
        api.value = "Service";
        text_1.value = "插件token";
      }
    };
    let date = {};
    let login = () => {
      if (!common_Getapp.Getapp.globa.code) {
        let you = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/g;
        let pass = /^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{1,9}$/g;
        let ipOrDomain = /^((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*(?:[A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){2,}))$/g;
        if (api.value === "Service") {
          if (username.value !== "" && password.value !== "" && ip.value !== "" && token.value !== "" && UID.value !== "") {
            if (!you.test(username.value)) {
              common_vendor.index.showToast({
                title: "用户名格式不正确",
                icon: "none"
              });
              return;
            } else if (!pass.test(password.value)) {
              common_vendor.index.showToast({
                title: "密码格式不正确,密码为由字母、数字、特殊字符，任意2种组成，1-9位",
                icon: "none"
              });
              return;
            } else if (!ipOrDomain.test(ip.value)) {
              common_vendor.index.showToast({
                title: "IP地址或域名格式不正确",
                icon: "none"
              });
              return;
            } else {
              common_vendor.index.request({
                url: "https://" + ip.value + "/opencommand/api",
                method: "POST",
                data: {
                  action: "ping"
                }
              }).catch((e) => {
                common_vendor.index.showToast({
                  title: "此IP或域名可能不支持gc-opencommand-plugin插件",
                  icon: "none",
                  duration: 2e3
                });
                return;
              });
            }
          } else {
            common_vendor.index.showToast({
              title: "不能为空",
              icon: "error"
            });
            return;
          }
          date.UID = UID.value;
          date.ip = ip.value;
          date.token = token.value;
          date.api = api.value;
        } else {
          if (username.value !== "" && password.value !== "" && UID.value !== "") {
            if (!you.test(username.value)) {
              common_vendor.index.showToast({
                title: "用户名格式不正确",
                icon: "error"
              });
              return;
            } else if (!pass.test(password.value)) {
              common_vendor.index.showToast({
                title: "密码格式不正确,密码为字母、数字、特殊字符，任意2种组成，1-9位",
                icon: "none"
              });
              return;
            } else if (!/^$|^\d{5,}$/.test(token.value)) {
              common_vendor.index.showToast({
                title: "邀请码不正确，需要5位的数字",
                icon: "none"
              });
              return;
            }
          } else {
            common_vendor.index.showToast({
              title: "不能为空",
              icon: "error"
            });
            return;
          }
          date.api = api.value;
          date.zhucema = token.value;
          date.UID = UID.value;
        }
      }
      if (common_Getapp.Getapp.globa.code) {
        common_vendor.Es.callFunction({
          name: "user",
          data: {
            username: common_Getapp.Getapp.globa.username,
            password: common_Getapp.Getapp.globa.password,
            api: "enroll",
            date: common_Getapp.Getapp.globa.date
          }
        }).then((res) => {
          common_Getapp.Getapp.setdata(res);
          common_vendor.index.setStorageSync("asstoken", res.result.asstoken);
          common_vendor.index.setStorageSync("assxtoken", res.result.assxtoken);
          common_vendor.index.showToast({
            title: "注册成功",
            icon: "success"
          });
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: "/pages/index/index"
            });
          }, 1600);
        });
      } else {
        common_vendor.index.showToast({
          title: "请验证",
          icon: "none"
        });
        common_Getapp.Getapp.globa.username = username.value;
        common_Getapp.Getapp.globa.password = password.value;
        common_Getapp.Getapp.globa.date = date;
        common_vendor.index.reLaunch({
          url: "/pages/login/yanzhenma"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index,
            c: common_vendor.unref(color) === index ? 1 : "",
            d: common_vendor.o(($event) => common_vendor.unref(chack)(index), index)
          };
        }),
        b: common_vendor.unref(username),
        c: common_vendor.o(($event) => common_vendor.isRef(username) ? username.value = $event.detail.value : username = $event.detail.value),
        d: common_vendor.o(($event) => common_vendor.isRef(password) ? password.value = $event : password = $event),
        e: common_vendor.p({
          type: "password",
          maxlength: "16",
          placeholder: "请输入密码,密码为字母、数字、特殊字符，任意2种组成，1-9位",
          styles: common_vendor.unref(data).styles,
          modelValue: common_vendor.unref(password)
        }),
        f: common_vendor.t(common_vendor.unref(text)),
        g: common_vendor.unref(color) === 0 ? true : false,
        h: common_vendor.unref(color) === 0 ? true : false,
        i: common_vendor.unref(ip),
        j: common_vendor.o(($event) => common_vendor.isRef(ip) ? ip.value = $event.detail.value : ip = $event.detail.value),
        k: common_vendor.t(common_vendor.unref(text_1)),
        l: "请输入" + common_vendor.unref(text_1),
        m: common_vendor.unref(token),
        n: common_vendor.o(($event) => common_vendor.isRef(token) ? token.value = $event.detail.value : token = $event.detail.value),
        o: common_vendor.t(common_vendor.unref(text_2)),
        p: common_vendor.unref(UID),
        q: common_vendor.o(($event) => common_vendor.isRef(UID) ? UID.value = $event.detail.value : UID = $event.detail.value),
        r: common_vendor.o(($event) => common_vendor.unref(login)())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/pages/login/zhuce/zhuce.vue"]]);
wx.createPage(MiniProgramPage);
