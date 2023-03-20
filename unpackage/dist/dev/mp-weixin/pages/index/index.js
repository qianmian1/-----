"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_list2 = common_vendor.resolveComponent("list");
  const _easycom_list_22 = common_vendor.resolveComponent("list-2");
  const _easycom_list_32 = common_vendor.resolveComponent("list-3");
  const _easycom_list_42 = common_vendor.resolveComponent("list-4");
  const _easycom_list_52 = common_vendor.resolveComponent("list-5");
  const _easycom_list_62 = common_vendor.resolveComponent("list-6");
  const _easycom_list_72 = common_vendor.resolveComponent("list-7");
  const _easycom_list_82 = common_vendor.resolveComponent("list-8");
  (_easycom_list2 + _easycom_list_22 + _easycom_list_32 + _easycom_list_42 + _easycom_list_52 + _easycom_list_62 + _easycom_list_72 + _easycom_list_82)();
}
const _easycom_list = () => "../../components/list/list.js";
const _easycom_list_2 = () => "../../components/list-2/list-2.js";
const _easycom_list_3 = () => "../../components/list-3/list-3.js";
const _easycom_list_4 = () => "../../components/list-4/list-4.js";
const _easycom_list_5 = () => "../../components/list-5/list-5.js";
const _easycom_list_6 = () => "../../components/list-6/list-6.js";
const _easycom_list_7 = () => "../../components/list-7/list-7.js";
const _easycom_list_8 = () => "../../components/list-8/list-8.js";
if (!Math) {
  (_easycom_list + _easycom_list_2 + _easycom_list_3 + _easycom_list_4 + _easycom_list_5 + _easycom_list_6 + _easycom_list_7 + _easycom_list_8)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let value = common_vendor.ref("give");
    function fh() {
      common_vendor.index.navigateTo({
        url: "/pages/index/index-swich"
      });
    }
    common_vendor.index.$on("updata", (date) => {
      value.value = date.value;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(value)),
        b: common_vendor.o(fh),
        c: common_vendor.unref(value) === "give",
        d: common_vendor.unref(value) === "setprop",
        e: common_vendor.unref(value) === "spawn",
        f: common_vendor.unref(value) === "setConst",
        g: common_vendor.unref(value) === "clear",
        h: common_vendor.unref(value) === "setfetterlevel",
        i: common_vendor.unref(value) === "talent",
        j: common_vendor.p({
          str: common_vendor.unref(value)
        }),
        k: common_vendor.unref(value) === "heal",
        l: common_vendor.p({
          str: common_vendor.unref(value)
        }),
        m: common_vendor.unref(value) === "resetconst",
        n: common_vendor.p({
          str: common_vendor.unref(value)
        }),
        o: common_vendor.unref(value) === "tpall"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/指令执行器/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
