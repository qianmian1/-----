"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index-tab",
  setup(__props) {
    let data = common_vendor.reactive({
      list: []
    });
    let search = common_vendor.ref("");
    common_vendor.onLoad((option) => {
      const id = common_vendor.ref(option.id);
      common_vendor.index.showLoading({
        title: "加载中",
        mask: true
      });
      common_vendor.Es.callFunction({
        name: "user",
        data: {
          api: "list-tab",
          tab: "commandlist"
        }
      }).then((res) => {
        switch (id.value) {
          case "0":
            data.list = res.result.data.wupinList;
            break;
          case "2":
            data.list = res.result.data.commandList;
            break;
          case "8":
            data.list = res.result.data.mingxingList;
            break;
          case "1":
            data.list = res.result.data.shengyiwu;
            break;
          case "3":
            data.list = res.result.data.wuqi;
            break;
          case "10":
            data.list = res.result.data.Monster;
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
        title: "已成功重置",
        icon: "success"
      });
    }
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
              title: "共搜索" + data.list.length + "条内容"
            });
          } else if (i == c.length) {
            common_vendor.index.showToast({
              title: "未找到该内容",
              icon: "error"
            });
          }
        }
      });
    }
    function fh(item) {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
        //+ item.vlue + '&key=' + item.text.toString()
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
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/指令执行器/pages/index/index-tab.vue"]]);
wx.createPage(MiniProgramPage);
