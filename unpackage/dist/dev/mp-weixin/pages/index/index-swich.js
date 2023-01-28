"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index-swich",
  setup(__props) {
    let date = common_vendor.reactive({
      list: []
    });
    common_vendor.onLoad(() => {
      common_vendor.Es.callFunction({
        name: "list-tab",
        data: {
          tab: "tab"
        }
      }).then((res) => {
        date.list = res.result;
      });
    });
    function gh(item) {
      common_vendor.index.$emit("update", {
        value: item.text
      });
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(date).list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: index,
            c: common_vendor.o(($event) => gh(item), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/index/index-swich.vue"]]);
wx.createPage(MiniProgramPage);
