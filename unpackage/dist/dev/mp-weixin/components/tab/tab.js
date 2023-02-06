"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab",
  props: {
    height: {
      type: Number,
      required: true,
      default: 300
    },
    v_right: {
      type: String,
      required: true,
      default: "flex-end"
    }
  },
  setup(__props) {
    const c = "justify-content:";
    let search = common_vendor.ref(null);
    let data = common_vendor.reactive({
      list: [
        {
          text: "\u4F601"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        },
        {
          text: "\u4F60\u597D"
        }
      ]
    });
    function confirm() {
      let c2 = [];
      const text = new RegExp(search.value);
      getApp().globalData.list = data.list;
      data.list.forEach((item, i) => {
        if (text.test(item.text)) {
          item.id = i;
          c2.push(item);
          data.list = c2;
        } else {
          if (c2 !== getApp().globalData.list.length && c2.length != 0) {
            common_vendor.index.showToast({
              title: "\u5171\u641C\u7D22" + data.list.length + "\u6761\u5185\u5BB9"
            });
          } else if (i == c2.length) {
            common_vendor.index.showToast({
              title: "\u672A\u627E\u5230\u8BE5\u5185\u5BB9",
              icon: "error"
            });
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(confirm),
        b: common_vendor.unref(search),
        c: common_vendor.o(($event) => common_vendor.isRef(search) ? search.value = $event.detail.value : search = $event.detail.value),
        d: common_vendor.f(common_vendor.unref(data).list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: index
          };
        }),
        e: common_vendor.o(($event) => _ctx.h()),
        f: __props.height + "px",
        g: common_vendor.s(c + __props.v_right)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c62da4a3"], ["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/components/tab/tab.vue"]]);
wx.createComponent(Component);
