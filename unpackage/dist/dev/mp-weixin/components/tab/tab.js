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
          text: "你1"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
        },
        {
          text: "你好"
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
              title: "共搜索" + data.list.length + "条内容"
            });
          } else if (i == c2.length) {
            common_vendor.index.showToast({
              title: "未找到该内容",
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c62da4a3"], ["__file", "E:/指令执行器/components/tab/tab.vue"]]);
wx.createComponent(Component);
