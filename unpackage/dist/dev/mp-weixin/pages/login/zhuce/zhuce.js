"use strict";
const common_vendor = require("../../../common/vendor.js");
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
    let text = common_vendor.ref("IP\u5730\u5740\u6216\u57DF\u540D");
    let ip = common_vendor.ref("");
    let text_1 = common_vendor.ref("\u63D2\u4EF6token");
    let token = common_vendor.ref("");
    let text_2 = common_vendor.ref("\u6E38\u620FUID");
    let UID = common_vendor.ref("");
    let api = common_vendor.ref("Service");
    let code = common_vendor.ref(getApp().globalData.code);
    let data = common_vendor.reactive({
      list: [
        {
          name: "\u670D\u4E3B\u6CE8\u518C"
        },
        {
          name: "\u73A9\u5BB6\u6CE8\u518C"
        }
      ],
      styles: {
        color: "#666",
        background: "rgba(255, 255, 255, .1)",
        border: " 1px solid #ffffff"
      }
    });
    common_vendor.watch(code, () => {
      login();
    });
    let chack = (index) => {
      color.value = index;
      if (index === 1) {
        api.value = "Player";
        text_1.value = "\u9080\u8BF7\u7801,\u4E5F\u53EF\u4E0D\u586B";
      } else {
        api.value = "Service";
        text_1.value = "\u6E38\u620FUID";
      }
    };
    let login = () => {
      let date = {};
      if (api.value === "Service") {
        date.UID = UID.value;
        date.ip = ip.value;
        date.token = token.value;
        date.api = api.value;
      } else {
        date.api = api.value;
        date.zhudema = token.value;
        date.UID = UID.value;
      }
      {
        common_vendor.Es.callFunction({
          name: "user",
          data: {
            username: username.value,
            password: password.value,
            api: "enroll",
            date
          }
        }).then((result) => console.log(result));
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
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          styles: common_vendor.unref(data).styles,
          modelValue: common_vendor.unref(password)
        }),
        f: common_vendor.t(common_vendor.unref(text)),
        g: common_vendor.unref(color) === 0 ? true : false,
        h: common_vendor.unref(color) === 0 ? true : false,
        i: common_vendor.unref(ip),
        j: common_vendor.o(($event) => common_vendor.isRef(ip) ? ip.value = $event.detail.value : ip = $event.detail.value),
        k: common_vendor.t(common_vendor.unref(text_1)),
        l: "\u8BF7\u8F93\u5165" + common_vendor.unref(text_1),
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/login/zhuce/zhuce.vue"]]);
wx.createPage(MiniProgramPage);
