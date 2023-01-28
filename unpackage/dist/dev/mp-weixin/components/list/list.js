"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_list_tab2 = common_vendor.resolveComponent("list-tab");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_list_tab2 + _easycom_uni_icons2 + _easycom_uni_number_box2)();
}
const _easycom_list_tab = () => "../list-tab/list-tab.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_list_tab + _easycom_uni_icons + _easycom_uni_number_box)();
}
const _sfc_main = {
  __name: "list",
  setup(__props) {
    let text = common_vendor.ref("\u7269\u54C1");
    let text_t = common_vendor.ref("\u539F\u77F3");
    let value = common_vendor.ref("201");
    let show = common_vendor.ref(0);
    let vModeV = common_vendor.ref(1);
    let vMode = common_vendor.ref(1);
    let vModelValue = common_vendor.ref(1);
    let text_1 = common_vendor.ref("\u6570\u91CF");
    let list = common_vendor.reactive({
      a: [
        {
          value: "\u83B7\u53D6\u6750\u6599"
        },
        {
          value: "\u83B7\u53D6\u5723\u9057\u7269"
        },
        {
          value: "\u83B7\u53D6\u89D2\u8272"
        },
        {
          value: "\u83B7\u53D6\u6B66\u5668"
        },
        {
          value: "\u83B7\u53D6\u5168\u90E8"
        },
        {
          value: "\u83B7\u53D6\u6240\u6709\u6B66\u5668"
        },
        {
          value: "\u83B7\u53D6\u6240\u6709\u6750\u6599"
        },
        {
          value: "\u83B7\u53D6\u6240\u6709\u89D2\u8272"
        },
        {
          value: "\u83B7\u53D6\u89D2\u8272\u547D\u661F"
        }
      ]
    });
    let as = common_vendor.ref(0);
    const taptab = (index) => {
      as.value = index;
      if (index === 0 || index === 2 || index === 7 || index === 8 || index === 6) {
        show.value = 0;
        switch (index) {
          case 0:
            text_1.value = "\u6570\u91CF";
            text_t.value = "\u539F\u77F3";
            text.value = "\u7269\u54C1";
            value.value = "201";
            break;
          case 2:
            text_1.value = "\u7B49\u7EA7";
            text.value = "\u89D2\u8272";
            text_t.value = "\u51EF\u7279";
            value.value = "10000001";
            break;
          case 6:
            text_1.value = "\u6570\u91CF";
            text.value = "\u6750\u6599";
            text_t.value = "mats";
            value.value = "mats";
            break;
          case 7:
            text_1.value = "\u7B49\u7EA7";
            text.value = "\u89D2\u8272";
            text_t.value = "avatrs";
            value.value = "avatrs";
            break;
          case 8:
            text.value = "\u547D\u661F";
            text_t.value = "\u795E\u91CC\u7EEB\u534E\u7684\u547D\u661F";
            value.value = "1102";
            break;
        }
      } else if (index === 1) {
        text.value = "\u5723\u9057\u7269";
        text_t.value = "\u521D\u5B66\u8005\u4E4B\u7FBD";
        value.value = "20002";
        show.value = 1;
      } else if (index >= 3 && index < 6) {
        show.value = 2;
        switch (index) {
          case 4:
            text.value = "\u83B7\u53D6\u5168\u90E8";
            text_t.value = "all";
            value.value = "all";
            break;
          case 5:
            text.value = "\u6B66\u5668";
            text_t.value = "weapons";
            value.value = "weapons";
            break;
          case 3:
            text.value = "\u83B7\u53D6\u6B66\u5668";
            text_t.value = "\u65E0\u950B\u5251";
            value.value = "11101";
        }
      }
    };
    function CarryOut() {
      let UID = "@<" + getApp().globalData.UID + ">";
      let date = null;
      if (as.value === 0 || as.value === 8 || as.value === 6) {
        date = "give " + value.value + " x" + vModelValue.value.toString() + " " + UID;
      } else if (as.value === 2 || as.value === 7) {
        date = "give " + value.value + " lv" + vModelValue.value.toString() + " " + UID;
      } else if (as.value === 3) {
        date = "give " + value.value + " lv" + vModelValue.value.toString() + " x" + vModeV.value.toString() + " r" + vMode.value.toString() + " " + UID;
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
        common_vendor.index.showToast({
          title: res.data.data,
          icon: "none"
        });
      });
    }
    function Sw() {
      common_vendor.index.navigateTo({
        url: "/pages/index/index-tab?id=" + as.value
      });
    }
    common_vendor.index.$on("update", function(data) {
      text_t.value = data.text;
      value.value = data.value;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(taptab),
        b: common_vendor.p({
          list: common_vendor.unref(list).a,
          as: common_vendor.unref(as)
        }),
        c: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        d: common_vendor.t(common_vendor.unref(text)),
        e: common_vendor.t(common_vendor.unref(text_t)),
        f: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        g: common_vendor.o(Sw),
        h: common_vendor.t(common_vendor.unref(text_1)),
        i: common_vendor.o(($event) => common_vendor.isRef(vModelValue) ? vModelValue.value = $event : vModelValue = $event),
        j: common_vendor.p({
          max: 99999,
          min: 1,
          modelValue: common_vendor.unref(vModelValue)
        }),
        k: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        l: common_vendor.unref(show) === 0 ? true : false,
        m: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        n: common_vendor.t(common_vendor.unref(text)),
        o: common_vendor.t(common_vendor.unref(text_t)),
        p: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        q: common_vendor.o(Sw),
        r: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        s: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        t: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        v: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        w: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        x: common_vendor.t(common_vendor.unref(text_t)),
        y: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        z: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        A: common_vendor.t(common_vendor.unref(text_t)),
        B: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        C: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        D: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        E: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        F: common_vendor.t(common_vendor.unref(text_t)),
        G: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        H: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        I: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        J: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        K: common_vendor.t(common_vendor.unref(text_t)),
        L: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        M: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        N: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        O: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        P: common_vendor.t(common_vendor.unref(text_t)),
        Q: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        R: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        S: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        T: common_vendor.unref(show) === 1 ? true : false,
        U: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        V: common_vendor.t(common_vendor.unref(text)),
        W: common_vendor.t(common_vendor.unref(text_t)),
        X: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        Y: common_vendor.o(Sw),
        Z: common_vendor.o(($event) => common_vendor.isRef(vModelValue) ? vModelValue.value = $event : vModelValue = $event),
        aa: common_vendor.p({
          min: 1,
          modelValue: common_vendor.unref(vModelValue)
        }),
        ab: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        ac: common_vendor.o(($event) => common_vendor.isRef(vModeV) ? vModeV.value = $event : vModeV = $event),
        ad: common_vendor.p({
          min: 1,
          modelValue: common_vendor.unref(vModeV)
        }),
        ae: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        af: common_vendor.o(($event) => common_vendor.isRef(vMode) ? vMode.value = $event : vMode = $event),
        ag: common_vendor.p({
          max: 99999,
          min: 1,
          modelValue: common_vendor.unref(vMode)
        }),
        ah: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        ai: common_vendor.unref(show) === 2 ? true : false,
        aj: common_vendor.o(CarryOut)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/components/list/list.vue"]]);
wx.createComponent(Component);
