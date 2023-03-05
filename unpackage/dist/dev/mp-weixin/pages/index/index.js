"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_list2 = common_vendor.resolveComponent("list");
  const _easycom_list_22 = common_vendor.resolveComponent("list-2");
  const _easycom_list_32 = common_vendor.resolveComponent("list-3");
  const _easycom_list_42 = common_vendor.resolveComponent("list-4");
  const _easycom_list_52 = common_vendor.resolveComponent("list-5");
  (_easycom_list2 + _easycom_list_22 + _easycom_list_32 + _easycom_list_42 + _easycom_list_52)();
}
const _easycom_list = () => "../../components/list/list.js";
const _easycom_list_2 = () => "../../components/list-2/list-2.js";
const _easycom_list_3 = () => "../../components/list-3/list-3.js";
const _easycom_list_4 = () => "../../components/list-4/list-4.js";
const _easycom_list_5 = () => "../../components/list-5/list-5.js";
if (!Math) {
  (_easycom_list + _easycom_list_2 + _easycom_list_3 + _easycom_list_4 + _easycom_list_5)();
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
        g: common_vendor.unref(value) === "clear"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/指令执行器/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
