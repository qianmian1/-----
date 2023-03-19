"use strict";
const common_vendor = require("../../common/vendor.js");
const common_Getapp = require("../../common/Getapp.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_icons2 + _easycom_uni_number_box2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_number_box)();
}
const _sfc_main = {
  __name: "list-3",
  setup(__props) {
    let vModelValue = common_vendor.ref(1);
    let vModelValu = common_vendor.ref(1);
    let text_1 = common_vendor.ref("数量");
    let text_2 = common_vendor.ref("等级");
    let text = common_vendor.ref("怪物");
    let value = common_vendor.ref("丘丘人");
    let valu = common_vendor.ref("21010101");
    let a = "spawn";
    let upvm = (value2) => {
      vModelValue.value = value2;
    };
    let upvmi = (value2) => {
      vModelValu.value = value2;
    };
    let sw = () => {
      common_vendor.index.navigateTo({
        url: "/pages/index/index-tab?id=10"
      });
    };
    let CarryOut = () => {
      let date = a + " " + valu.value + " x" + vModelValue.value.toString() + " lv" + vModelValu.value + " " + common_Getapp.Getapp.globa.UID;
      common_vendor.index.showLoading({
        title: "请求中",
        mask: true
      });
      if (common_Getapp.Getapp.globa.copy && common_Getapp.Getapp.globa.zhucheMa == "-1") {
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
        if (res.data.data) {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: res.data.data,
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
    };
    common_vendor.index.$on("update", function(data) {
      valu.value = data.value;
      value.value = data.text;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-xinghao",
          size: "10",
          color: "red"
        }),
        b: common_vendor.t(common_vendor.unref(text)),
        c: common_vendor.t(common_vendor.unref(value)),
        d: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        e: common_vendor.o((...args) => common_vendor.unref(sw) && common_vendor.unref(sw)(...args)),
        f: common_vendor.t(common_vendor.unref(text_1)),
        g: common_vendor.o(common_vendor.unref(upvm)),
        h: common_vendor.p({
          max: 99999,
          min: 1
        }),
        i: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        j: common_vendor.t(common_vendor.unref(text_2)),
        k: common_vendor.o(common_vendor.unref(upvmi)),
        l: common_vendor.p({
          max: 99999,
          min: 1
        }),
        m: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#666"
        }),
        n: common_vendor.o((...args) => common_vendor.unref(CarryOut) && common_vendor.unref(CarryOut)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b8e63b1"], ["__file", "E:/指令执行器/components/list-3/list-3.vue"]]);
wx.createComponent(Component);
