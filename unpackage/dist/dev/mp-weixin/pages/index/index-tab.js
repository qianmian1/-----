"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index-tab",
  setup(__props) {
    common_vendor.ref("\u641C\u7D22");
    let data = common_vendor.reactive({
      list: []
    });
    let search = common_vendor.ref("");
    common_vendor.onLoad((option) => {
      const id = common_vendor.ref(option.id);
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D",
        mask: true
      });
      common_vendor.Es.callFunction({
        name: "list-tab",
        data: {
          tab: "commandlist"
        }
      }).then((res) => {
        switch (id.value) {
          case "0":
            data.list = res.result.wupinList;
            break;
          case "2":
            data.list = res.result.commandList;
            break;
          case "8":
            data.list = res.result.mingxingList;
            break;
          case "1":
            data.list = res.result.shengyiwu;
            break;
          case "3":
            data.list = res.result.wuqi;
            break;
          case "10":
            data.list = res.result.Monster;
            break;
        }
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 2500);
    });
    function cd() {
      data.list = getApp().globalData.list;
      search.value = "";
      common_vendor.index.showToast({
        title: "\u5DF2\u6210\u529F\u91CD\u7F6E",
        icon: "success"
      });
    }
    let h = (item) => {
      console.log("\u88AB\u89E6\u53D1");
    };
    function confirm() {
      let c = [];
      const text = new RegExp(search.value);
      getApp().globalData.list = data.list;
      data.list.forEach((item, i) => {
        if (text.test(item.text)) {
          item.id = i;
          c.push(item);
          data.list = c;
        } else {
          if (c !== getApp().globalData.list.length && c.length != 0) {
            common_vendor.index.showToast({
              title: "\u5171\u641C\u7D22" + data.list.length + "\u6761\u5185\u5BB9"
            });
          } else if (i == c.length) {
            common_vendor.index.showToast({
              title: "\u672A\u627E\u5230\u8BE5\u5185\u5BB9",
              icon: "error"
            });
          }
        }
      });
    }
    function fh(item) {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
      common_vendor.index.$emit("update", {
        text: item.text,
        value: item.vaue
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(confirm),
        b: common_vendor.unref(search),
        c: common_vendor.o(($event) => common_vendor.isRef(search) ? search.value = $event.detail.value : search = $event.detail.value),
        d: common_vendor.o(cd),
        e: common_vendor.f(common_vendor.unref(data).list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.id,
            c: common_vendor.o(($event) => fh(item), item.id)
          };
        }),
        f: common_vendor.o(($event) => common_vendor.unref(h)())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/index/index-tab.vue"]]);
wx.createPage(MiniProgramPage);
