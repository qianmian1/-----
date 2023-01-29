"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  (_easycom_uni_icons2 + _easycom_uni_nav_bar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_nav_bar)();
}
const _sfc_main = {
  __name: "index-tab",
  setup(__props) {
    let Search = common_vendor.ref("\u641C\u7D22");
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
            Monster;
            break;
        }
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 2500);
    });
    function cd() {
      if (Search.value === "\u641C\u7D22") {
        Search.value = "\u53D6\u6D88";
      } else {
        Search.value = "\u641C\u7D22";
        if (getApp().globalData.list.length !== 0) {
          data.list = getApp().globalData.list;
        }
      }
    }
    function confirm() {
      data.Search = "\u53D6\u6D88";
      const s = /* @__PURE__ */ new Set();
      getApp().globalData.list = data.list;
      data.list.forEach((item) => {
        try {
          if (item.text === search.value) {
            s.add(item);
            throw "11221";
          }
        } catch (e) {
        }
      });
      let c = [...s];
      data.list = c;
    }
    function back() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
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
        a: _ctx.statusBarHeight + "px",
        b: common_vendor.p({
          type: "search",
          size: "18",
          color: "#999"
        }),
        c: common_vendor.o(confirm),
        d: common_vendor.o(cd),
        e: common_vendor.unref(search),
        f: common_vendor.o(($event) => common_vendor.isRef(search) ? search.value = $event.detail.value : search = $event.detail.value),
        g: common_vendor.o(back),
        h: common_vendor.o(cd),
        i: common_vendor.p({
          leftIcon: "back",
          rightText: common_vendor.unref(Search),
          fixed: "true"
        }),
        j: common_vendor.f(common_vendor.unref(data).list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: index,
            c: common_vendor.o(($event) => fh(item), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6307\u4EE4\u6267\u884C\u5668/pages/index/index-tab.vue"]]);
wx.createPage(MiniProgramPage);
