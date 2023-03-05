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
        name: "user",
        data: {
          api: "list-tab",
          tab: "tab"
        }
      }).then((res) => {
        date.list = res.result.data;
      });
    });
    function gh(item) {
      common_vendor.index.$emit("updata", {
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/pages/index/index-swich.vue"]]);
wx.createPage(MiniProgramPage);
