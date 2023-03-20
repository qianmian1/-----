"use strict";
const common_vendor = require("../../common/vendor.js");
const common_Getapp = require("../../common/Getapp.js");
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
    let text = common_vendor.ref("类型");
    let text_1 = common_vendor.ref("状态");
    let value = common_vendor.ref("godmode");
    let as = common_vendor.ref(0);
    let boo = common_vendor.ref("0");
    let aq = common_vendor.ref(0);
    let ad = common_vendor.ref(0);
    let a = "setprop";
    let vModeValue = common_vendor.ref(1);
    let date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
    let list = common_vendor.reactive({
      a: [
        {
          value: "无敌/无限体力/无限能量/锚点解锁"
        },
        {
          value: "深渊解锁"
        },
        {
          value: "战令等级"
        },
        {
          value: "世界等级"
        },
        {
          value: "玩家等级"
        }
      ],
      j: ["无敌", "无限体力", "无限能量", "锚点解锁"]
    });
    let upvModeValue = (value2) => {
      vModeValue.value = value2;
    };
    common_vendor.watch(ad, () => {
      if (ad.value === 0) {
        value.value = "godmode";
        date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
      } else if (ad.value === 1) {
        value.value = "nostmina";
        date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
      } else if (ad.value === 2) {
        value.value = "unlimitedenergy";
        date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
      } else {
        value.value = "unlockmap";
        date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
      }
    }, {
      immediate: true
    });
    let op = (index) => {
      ad.value = index;
    };
    let Switch2 = (e) => {
      if (e.detail.value === true) {
        boo.value = "1";
        date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
      } else {
        boo.value = "0";
        date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
      }
    };
    let Switch = (index) => {
      as.value = index;
      if (index === 1 || index === 2 || index === 3 || index === 4) {
        aq.value = 1;
        switch (index) {
          case 1:
            text.value = "深渊";
            value.value = "abyss";
            text_1.value = "层数";
            break;
          case 2:
            text.value = "战令等级";
            value.value = "bplevel";
            text_1.value = "等级";
            break;
          case 3:
            text.value = "世界等级";
            value.value = "worldlevel";
            text_1.value = "等级";
            break;
          case 4:
            text.value = "玩家等级";
            value.value = "player_level";
            text_1.value = "等级";
            break;
        }
      } else {
        aq.value = 0;
        text.value = "类型";
        value.value = "godmode";
        text_1.value = "状态";
      }
    };
    let CarryOut = () => {
      if (as.value !== 0) {
        date = a + " " + value.value + " " + vModeValue.value.toString() + " " + common_Getapp.Getapp.globa.UID;
      } else {
        date = a + " " + value.value + " " + boo.value + " " + common_Getapp.Getapp.globa.UID;
      }
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
        if (res.data !== "") {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: res.data,
            icon: "success"
          });
        } else {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "执行成功",
            icon: "success"
          });
        }
      }).catch((e) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "请求失败",
          icon: "none"
        });
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
        j: common_vendor.unref(as) !== 0,
        k: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        l: common_vendor.t(common_vendor.unref(text_1)),
        m: common_vendor.unref(aq) === 1,
        n: common_vendor.o(common_vendor.unref(upvModeValue)),
        o: common_vendor.p({
          max: 99999,
          min: 1
        }),
        p: common_vendor.o((...args) => common_vendor.unref(Switch2) && common_vendor.unref(Switch2)(...args)),
        q: common_vendor.unref(aq) === 0,
        r: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        s: common_vendor.unref(show) === 0 ? true : false,
        t: common_vendor.o((...args) => common_vendor.unref(CarryOut) && common_vendor.unref(CarryOut)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-161fa33e"], ["__file", "E:/指令执行器/components/list-2/list-2.vue"]]);
wx.createComponent(Component);
