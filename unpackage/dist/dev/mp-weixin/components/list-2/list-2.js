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
  __name: "list-2",
  setup(__props) {
    let show = common_vendor.ref(0);
    let text = common_vendor.ref("\u7C7B\u578B");
    let text_1 = common_vendor.ref("\u72B6\u6001");
    let value = common_vendor.ref("godmode");
    let as = common_vendor.ref(0);
    let h = common_vendor.ref("0");
    let aq = common_vendor.ref(0);
    let ad = common_vendor.ref(0);
    let a = "setprop";
    let UID = "<@" + getApp().globalData.UID + ">";
    let date = a + " " + value.value + " " + h.value + " " + UID;
    let vModelValue = common_vendor.ref(1);
    let list = common_vendor.reactive({
      a: [
        {
          value: "\u65E0\u654C/\u65E0\u9650\u4F53\u529B/\u65E0\u9650\u80FD\u91CF/\u951A\u70B9\u89E3\u9501"
        },
        {
          value: "\u6DF1\u6E0A\u89E3\u9501"
        },
        {
          value: "\u6218\u4EE4\u7B49\u7EA7"
        },
        {
          value: "\u4E16\u754C\u7B49\u7EA7"
        },
        {
          value: "\u73A9\u5BB6\u7B49\u7EA7"
        }
      ],
      j: ["\u65E0\u654C", "\u65E0\u9650\u4F53\u529B", "\u65E0\u9650\u80FD\u91CF", "\u951A\u70B9\u89E3\u9501"]
    });
    let op = (index) => {
      ad.value = index;
      if (index === 0) {
        value.value = "godmode";
      } else if (index === 1) {
        value.value = "nostmina";
      } else if (index === 2) {
        value.value = "unlimitedenergy";
      } else {
        value.value = "unlockmap";
      }
    };
    let Switch2 = (e) => {
      if (e.detail.value === true) {
        h.value = "1";
      } else {
        h.value = "0";
      }
    };
    let Switch = (index) => {
      as.value = index;
      if (index === 1 || index === 2 || index === 3 || index === 4) {
        aq.value = 1;
        switch (index) {
          case 1:
            text.value = "\u6DF1\u6E0A";
            value.value = "abyss";
            text_1.value = "\u5C42\u6570";
            break;
          case 2:
            text.value = "\u6218\u4EE4\u7B49\u7EA7";
            value.value = "battlepass";
            text_1.value = "\u7B49\u7EA7";
            break;
          case 3:
            text.value = "\u4E16\u754C\u7B49\u7EA7";
            value.value = "worldlevel";
            text_1.value = "\u7B49\u7EA7";
            break;
          case 4:
            text.value = "\u73A9\u5BB6\u7B49\u7EA7";
            value.value = "player_level";
            text_1.value = "\u7B49\u7EA7";
            break;
        }
        date = a + " " + value.value + " " + vModelValue.value.toString() + " " + UID;
      } else {
        aq.value = 0;
        text.value = "\u7C7B\u578B";
        value.value = "godmode";
        text_1.value = "\u72B6\u6001";
        date = a + " " + value.value + " " + h.value + " " + UID;
      }
    };
    let CarryOut = () => {
      common_vendor.index.showToast({
        title: "\u8BF7\u6C42\u4E2D",
        icon: "none"
      });
      common_vendor.index.request({
        url: "https://" + getApp().globalData.ServiceIp + "/opencommand/api",
        method: "POST",
        data: {
          action: "command",
          token: getApp().globalData.Plugins,
          data: date
        }
      }).then((res) => {
        if (res.data.data) {
          common_vendor.index.showToast({
            title: res.data.data,
            icon: "none"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(Switch)),
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
        e: common_vendor.f(common_vendor.unref(list).j, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.unref(ad) === index ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => common_vendor.unref(op)(index), index)
          };
        }),
        f: common_vendor.unref(as) === 0,
        g: common_vendor.t(common_vendor.unref(value)),
        h: common_vendor.unref(as) !== 0,
        i: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        j: common_vendor.o((...args) => _ctx.Sw && _ctx.Sw(...args)),
        k: common_vendor.unref(as) !== 0,
        l: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        m: common_vendor.t(common_vendor.unref(text_1)),
        n: common_vendor.unref(aq) === 1,
        o: common_vendor.o(($event) => common_vendor.isRef(vModelValue) ? vModelValue.value = $event : vModelValue = $event),
        p: common_vendor.p({
          max: 99999,
          min: 1,
          modelValue: common_vendor.unref(vModelValue)
        }),
        q: common_vendor.o((...args) => common_vendor.unref(Switch2) && common_vendor.unref(Switch2)(...args)),
        r: common_vendor.unref(aq) === 0,
        s: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        t: common_vendor.unref(show) === 0 ? true : false,
        v: common_vendor.o((...args) => common_vendor.unref(CarryOut) && common_vendor.unref(CarryOut)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-161fa33e"], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/components/list-2/list-2.vue"]]);
wx.createComponent(Component);
