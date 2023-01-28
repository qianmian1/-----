"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "list-tab",
  props: {
    as: {
      type: Number,
      required: true,
      default: 0
    },
    list: {
      type: Array,
      required: true,
      default(props) {
        return [];
      }
    }
  },
  emits: ["taptab"],
  setup(__props, { emit: em }) {
    const taptablist = (index) => {
      em("taptab", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.value),
            b: index,
            c: __props.as === index ? 1 : "",
            d: common_vendor.o(($event) => taptablist(index), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f8db88d0"], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/components/list-tab/list-tab.vue"]]);
wx.createComponent(Component);
