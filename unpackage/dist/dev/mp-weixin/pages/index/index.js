"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_list2 = common_vendor.resolveComponent("list");
  const _easycom_list_22 = common_vendor.resolveComponent("list-2");
  const _easycom_list_32 = common_vendor.resolveComponent("list-3");
  const _easycom_list_42 = common_vendor.resolveComponent("list-4");
  const _easycom_list_52 = common_vendor.resolveComponent("list-5");
  const _easycom_tab2 = common_vendor.resolveComponent("tab");
  (_easycom_list2 + _easycom_list_22 + _easycom_list_32 + _easycom_list_42 + _easycom_list_52 + _easycom_tab2)();
}
const _easycom_list = () => "../../components/list/list.js";
const _easycom_list_2 = () => "../../components/list-2/list-2.js";
const _easycom_list_3 = () => "../../components/list-3/list-3.js";
const _easycom_list_4 = () => "../../components/list-4/list-4.js";
const _easycom_list_5 = () => "../../components/list-5/list-5.js";
const _easycom_tab = () => "../../components/tab/tab.js";
if (!Math) {
  (_easycom_list + _easycom_list_2 + _easycom_list_3 + _easycom_list_4 + _easycom_list_5 + _easycom_tab)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let value = common_vendor.ref("clear");
    let height = common_vendor.ref(common_vendor.index.getSystemInfoSync().screenHeight - (common_vendor.index.getSystemInfoSync().statusBarHeight + common_vendor.index.getMenuButtonBoundingClientRect().height));
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
        h: common_vendor.p({
          height: common_vendor.unref(height),
          v_right: "flex-end"
        }),
        i: common_vendor.unref(value) === 1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
